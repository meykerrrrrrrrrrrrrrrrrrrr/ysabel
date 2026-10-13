/**
 * ==========================================================================
 * PLATAFORMA SIY1704 - MOTOR PRINCIPAL DE LÓGICA Y EXPERIENCIA INTERACTIVA
 * Diseñado y Dedicado para: Ysabel Carolina Nuñez
 * Funcionalidades:
 *  - Compañero Monito con bocadillos animados superiores y estados emocionales
 *  - Audiolibro con síntesis de voz, selector de voces, velocidad y control
 *  - Simulador de Examen con selección de temas, preguntas y tiempo
 *  - Sistema Anti-Trampa estricto (Pantalla completa, blur/tab-switch, no-copy, lock)
 *  - Retroalimentación formativa inmediata (Explicación de fallo y solución)
 *  - PWA: Instalación en pantalla de inicio y soporte offline
 * ==========================================================================
 */

(function () {
  'use strict';

  // ESTADO GLOBAL DE LA APLICACIÓN
  const AppState = {
    usuario: SIY_DATA.usuario,
    voices: [],
    selectedVoice: null,
    speechRate: 1.0,
    speechPitch: 1.0,
    synth: window.speechSynthesis || null,
    isSpeaking: false,
    currentUtterance: null,
    
    // Estado del Examen
    exam: {
      isActive: false,
      selectedTopics: [],
      totalQuestionsCount: 10,
      timeLimitMinutes: 10,
      timeRemainingSeconds: 0,
      timerInterval: null,
      questionQueue: [],
      currentIndex: 0,
      currentQuestion: null,
      score: 0,
      userAnswers: [],
      antiCheatViolations: 0,
      maxViolations: 3,
      isAnswerSubmitted: false
    },

    // Instalación PWA
    deferredPrompt: null
  };

  // BANCO DE FRASES MOTIVACIONALES DEL MONITO PARA YSABEL CAROLINA
  const MascotPhrases = {
    bienvenida: [
      "¡Hola, Ysabel Carolina! 🐒 Soy tu compañero prevencionista en SIY1704. ¡Hoy vamos a dominar la seguridad industrial venezolana!",
      "¡Qué alegría verte estudiar, Ysabel Carolina! Las normas SY-S04 y YR-S17 salvan vidas en el campo todos los días.",
      "¡Lista para aprender, Ysabel Carolina! Recuerda que un buen prevencionista nunca improvisa."
    ],
    acierto: [
      "¡BRUTAL, Ysabel Carolina! 🌟 ¡Acertaste con precisión técnica! Esa es la actitud de una gran líder de seguridad.",
      "¡Excelente respuesta, Ysabel Carolina! 🐒🎯 Dominas la norma venezolana a la perfección.",
      "¡Así se hace, Ysabel Carolina! Tienes el ojo clínico de una auténtica inspectora SIAHO.",
      "¡Bravo Ysabel Carolina! Cada punto correcto es un accidente menos en el campo laboral. ¡Orgulloso de ti! 🎉"
    ],
    fallo: [
      "¡No te desanimes, Ysabel Carolina! 💪 De los errores nacen las mejores inspectoras. Lee la explicación para que la fijes en tu mente.",
      "¡Ánimo Ysabel Carolina! 🐒 Esta pregunta tenía su trampa. Lo importante es que ahora ya sabes la razón técnica correcta.",
      "¡Tranquila Ysabel Carolina! En seguridad industrial aprendemos analizando las causas. ¡La próxima la clavas seguro!",
      "¡Vamos con todo Ysabel Carolina! El conocimiento se construye paso a paso, ¡tú tienes la capacidad de dominarlo!"
    ],
    consejos: [
      "Consejo del Monito: Ysabel Carolina, nunca firmes un ART sin verificar que la cuadrilla tenga sus EPP completos.",
      "¿Sabías Ysabel Carolina? En la norma SY-S04, el vigía de fuego debe vigilar por lo menos 30 minutos tras terminar de soldar.",
      "Tip vital: Mezclar cloro con ácido muriático en casa genera gas cloro letal. ¡La seguridad empieza en el hogar, Ysabel!"
    ]
  };

  // INICIALIZACIÓN AL CARGAR DOM
  document.addEventListener('DOMContentLoaded', () => {
    initPersonalization();
    initSpeechSynthesis();
    initMascot();
    renderLibraryModules();
    renderComparativeCases();
    renderFAQs();
    renderGlossary();
    initModals();
    initExamEngine();
    initPWA();
  });

  // ==========================================================================
  // 1. PERSONALIZACIÓN Y SALUDO
  // ==========================================================================
  function initPersonalization() {
    const studentNameEls = document.querySelectorAll('.inject-student-name');
    studentNameEls.forEach(el => {
      el.textContent = AppState.usuario.nombre;
    });

    // Saludo inicial del Monito
    setTimeout(() => {
      showMascotSpeech(getRandomPhrase(MascotPhrases.bienvenida));
    }, 1200);
  }

  function getRandomPhrase(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ==========================================================================
  // 2. COMPAÑERO MONITO (MASCOT ENGINE)
  // ==========================================================================
  function initMascot() {
    const mascotBtn = document.getElementById('mascotAvatarBtn');
    const mascotBubble = document.getElementById('mascotBubble');
    const mascotCloseBtn = document.getElementById('mascotBubbleClose');

    if (mascotBtn) {
      mascotBtn.addEventListener('click', () => {
        // Al tocar el monito, da un consejo o ánimo
        const frase = getRandomPhrase(MascotPhrases.consejos);
        showMascotSpeech(frase);
        // Pequeño sonido o síntesis si está habilitada
        speakText(frase, true);
      });
    }

    if (mascotCloseBtn) {
      mascotCloseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        hideMascotSpeech();
      });
    }
  }

  function showMascotSpeech(texto) {
    const mascotBubble = document.getElementById('mascotBubble');
    const mascotText = document.getElementById('mascotSpeechText');
    if (!mascotBubble || !mascotText) return;

    mascotText.innerHTML = texto;
    mascotBubble.style.display = 'block';
    mascotBubble.classList.remove('animate-pop');
    void mascotBubble.offsetWidth; // reflow
    mascotBubble.classList.add('animate-pop');

    // Auto ocultar después de 9 segundos
    clearTimeout(window.mascotBubbleTimeout);
    window.mascotBubbleTimeout = setTimeout(() => {
      hideMascotSpeech();
    }, 9000);
  }

  function hideMascotSpeech() {
    const mascotBubble = document.getElementById('mascotBubble');
    if (mascotBubble) {
      mascotBubble.style.display = 'none';
    }
  }

  // ==========================================================================
  // 3. MOTOR DE AUDIOLIBRO / TEXT-TO-SPEECH (WEB SPEECH API)
  // ==========================================================================
  function initSpeechSynthesis() {
    if (!AppState.synth) {
      console.warn('Web Speech API no soportada en este navegador.');
      const statusEl = document.getElementById('audioStatusText');
      if (statusEl) statusEl.textContent = 'Síntesis de voz no compatible en este navegador.';
      return;
    }

    function populateVoices() {
      AppState.voices = AppState.synth.getVoices();
      const voiceSelect = document.getElementById('voiceSelect');
      if (!voiceSelect || AppState.voices.length === 0) return;

      voiceSelect.innerHTML = '';
      
      // Filtrar y ordenar: preferir voces en español
      const spanishVoices = AppState.voices.filter(v => v.lang.startsWith('es'));
      const otherVoices = AppState.voices.filter(v => !v.lang.startsWith('es'));
      const orderedVoices = [...spanishVoices, ...otherVoices];

      orderedVoices.forEach((voice, index) => {
        const option = document.createElement('option');
        option.value = voice.name;
        const isEs = voice.lang.startsWith('es') ? '🇪🇸/🇻🇪 ' : '🌐 ';
        option.textContent = `${isEs}${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
      });

      // Seleccionar por defecto la primera voz en español o la primera disponible
      if (spanishVoices.length > 0) {
        AppState.selectedVoice = spanishVoices[0];
        voiceSelect.value = spanishVoices[0].name;
      } else if (orderedVoices.length > 0) {
        AppState.selectedVoice = orderedVoices[0];
      }
    }

    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoices;
    }

    // Controles de audio en la barra
    const voiceSelect = document.getElementById('voiceSelect');
    const rateSlider = document.getElementById('rateSlider');
    const rateValueLabel = document.getElementById('rateValueLabel');
    const btnAudioPlay = document.getElementById('btnAudioPlay');
    const btnAudioPause = document.getElementById('btnAudioPause');
    const btnAudioStop = document.getElementById('btnAudioStop');

    if (voiceSelect) {
      voiceSelect.addEventListener('change', (e) => {
        const name = e.target.value;
        AppState.selectedVoice = AppState.voices.find(v => v.name === name) || null;
      });
    }

    if (rateSlider && rateValueLabel) {
      rateSlider.addEventListener('input', (e) => {
        AppState.speechRate = parseFloat(e.target.value);
        rateValueLabel.textContent = `${AppState.speechRate.toFixed(1)}x`;
      });
    }

    if (btnAudioPlay) {
      btnAudioPlay.addEventListener('click', () => {
        if (AppState.synth.paused) {
          AppState.synth.resume();
          updateAudioStatus('Reproducción reanudada');
        } else {
          // Leer resumen general si no hay nada activo
          const texto = `Hola Ysabel Carolina Nuñez. Te encuentras en la biblioteca SIY1704. Aquí puedes estudiar la norma SY-S04 sobre permisos de trabajo, la norma YR-S17 sobre análisis de riesgos en el trabajo, el marco LOPCYMAT y realizar exámenes con simulador anti-trampa.`;
          speakText(texto);
        }
      });
    }

    if (btnAudioPause) {
      btnAudioPause.addEventListener('click', () => {
        if (AppState.synth.speaking && !AppState.synth.paused) {
          AppState.synth.pause();
          updateAudioStatus('Pausado');
        }
      });
    }

    if (btnAudioStop) {
      btnAudioStop.addEventListener('click', () => {
        stopAudio();
      });
    }
  }

  function speakText(textoLimpio, esCorto = false) {
    if (!AppState.synth) return;

    AppState.synth.cancel(); // Detener cualquier lectura previa

    // Limpieza de etiquetas HTML si las tuviese
    const div = document.createElement('div');
    div.innerHTML = textoLimpio;
    const textoPlano = div.textContent || div.innerText || '';

    const utterance = new SpeechSynthesisUtterance(textoPlano);
    if (AppState.selectedVoice) {
      utterance.voice = AppState.selectedVoice;
    }
    utterance.rate = AppState.speechRate;
    utterance.pitch = AppState.speechPitch;

    utterance.onstart = () => {
      AppState.isSpeaking = true;
      if (!esCorto) {
        updateAudioStatus(`Leyendo contenido en voz alta...`);
      }
    };

    utterance.onend = () => {
      AppState.isSpeaking = false;
      if (!esCorto) {
        updateAudioStatus('Lectura completada');
      }
    };

    utterance.onerror = (e) => {
      console.warn('Error en SpeechSynthesis:', e);
      AppState.isSpeaking = false;
      updateAudioStatus('Lectura detenida');
    };

    AppState.currentUtterance = utterance;
    AppState.synth.speak(utterance);
  }

  function stopAudio() {
    if (AppState.synth) {
      AppState.synth.cancel();
      AppState.isSpeaking = false;
      updateAudioStatus('Detenido');
    }
  }

  function updateAudioStatus(msg) {
    const statusEl = document.getElementById('audioStatusText');
    if (statusEl) {
      statusEl.textContent = msg;
    }
  }

  // ==========================================================================
  // 4. RENDERIZADO DE LA BIBLIOTECA DE ESTUDIO
  // ==========================================================================
  function renderLibraryModules() {
    const container = document.getElementById('libraryModulesGrid');
    if (!container) return;

    container.innerHTML = '';
    SIY_DATA.modulos.forEach(mod => {
      const card = document.createElement('div');
      card.className = `module-card theme-${mod.colorTag}`;
      card.innerHTML = `
        <span class="module-badge-code badge-${mod.colorTag}">${mod.codigo}</span>
        <h3 class="module-title">${mod.icono} ${mod.titulo}</h3>
        <p class="module-summary">${mod.resumen}</p>
        <div class="module-actions">
          <button class="btn-action-primary" data-module-id="${mod.id}">
            📖 Leer y Estudiar
          </button>
          <button class="btn-action-listen" title="Escuchar con Audiolibro" data-listen-module="${mod.id}">
            🔊
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    // Delegación de eventos para leer y escuchar
    container.addEventListener('click', (e) => {
      const btnRead = e.target.closest('[data-module-id]');
      const btnListen = e.target.closest('[data-listen-module]');

      if (btnRead) {
        const id = btnRead.getAttribute('data-module-id');
        openModuleModal(id);
      } else if (btnListen) {
        const id = btnListen.getAttribute('data-listen-module');
        const modulo = SIY_DATA.modulos.find(m => m.id === id);
        if (modulo) {
          const texto = `${modulo.titulo}. Código: ${modulo.codigo}. ${modulo.subtitulo}. ${modulo.resumen}`;
          speakText(texto);
          showMascotSpeech(`🎧 ¡Escuchando el tema ${modulo.codigo}, Ysabel Carolina! Relájate y aprende.`);
        }
      }
    });
  }

  // Modal para ver el tema completo
  function openModuleModal(moduleId) {
    const modulo = SIY_DATA.modulos.find(m => m.id === moduleId);
    if (!modulo) return;

    const modal = document.getElementById('moduleDetailModal');
    const modalTitle = document.getElementById('modalModuleTitle');
    const modalBody = document.getElementById('modalModuleBody');
    const btnAudioModal = document.getElementById('modalAudioBtn');

    if (!modal || !modalTitle || !modalBody) return;

    modalTitle.innerHTML = `${modulo.icono} ${modulo.codigo}: ${modulo.titulo}`;
    modalBody.innerHTML = modulo.contenidoHtml;

    if (btnAudioModal) {
      btnAudioModal.onclick = () => {
        speakText(`${modulo.titulo}. ${modalBody.innerText}`);
        showMascotSpeech(`Leyendo el módulo completo para ti, Ysabel Carolina 🐒`);
      };
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function initModals() {
    const modals = document.querySelectorAll('.modal-overlay');
    modals.forEach(modal => {
      const closeBtn = modal.querySelector('.modal-close-btn');
      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        });
      }
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ==========================================================================
  // 5. CASOS COMPARATIVOS: COTIDIANO VS LABORAL
  // ==========================================================================
  function renderComparativeCases() {
    const container = document.getElementById('comparativeCasesGrid');
    if (!container) return;

    container.innerHTML = '';
    SIY_DATA.casosComparativos.forEach(caso => {
      const card = document.createElement('div');
      card.className = 'case-card';
      card.innerHTML = `
        <div class="case-header">
          <h3 class="case-title">${caso.icono} ${caso.titulo}</h3>
          <span class="case-category-tag">${caso.categoria}</span>
        </div>
        <div class="case-comparison-split">
          <!-- Columna Laboral -->
          <div class="case-column column-laboral">
            <h4 class="column-heading">🏭 Entorno Laboral / Industrial</h4>
            <div class="case-text-block"><strong>Escenario:</strong> ${caso.laboral.escenario}</div>
            <div class="case-text-block"><strong>Peligro & Riesgo:</strong> ${caso.laboral.peligro} → <em>${caso.laboral.riesgo}</em></div>
            <div class="case-text-block"><strong>Controles Normativos SY-S04 / YR-S17:</strong></div>
            <ul class="case-list">
              ${caso.laboral.controlesNormativos.map(c => `<li>${c}</li>`).join('')}
            </ul>
          </div>

          <!-- Columna Cotidiana -->
          <div class="case-column column-cotidiano">
            <h4 class="column-heading">🏠 Entorno Cotidiano / Hogar</h4>
            <div class="case-text-block"><strong>Escenario Común:</strong> ${caso.cotidiano.escenario}</div>
            <div class="case-text-block"><strong>Peligro & Riesgo Oculto:</strong> ${caso.cotidiano.peligro} → <em>${caso.cotidiano.riesgo}</em></div>
            <div class="case-text-block"><strong>Forma Segura de Solucionar:</strong></div>
            <ul class="case-list">
              ${caso.cotidiano.solucionCorrecta.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="case-moraleja">
          💡 <strong>Lección Preventiva:</strong> ${caso.moraleja}
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 6. FAQS Y GLOSARIO
  // ==========================================================================
  function renderFAQs() {
    const container = document.getElementById('faqsListContainer');
    if (!container) return;

    container.innerHTML = '';
    SIY_DATA.faqs.forEach((faq, idx) => {
      const item = document.createElement('div');
      item.className = 'faq-card';
      item.innerHTML = `
        <button class="faq-trigger" type="button">
          <span>❓ ${faq.pregunta}</span>
          <span class="faq-icon-arrow">▼</span>
        </button>
        <div class="faq-content">
          <p>${faq.respuesta.replace(/\n/g, '<br>')}</p>
          <button class="btn-header" style="margin-top:0.75rem;" data-faq-audio="${idx}">
            🔊 Escuchar Respuesta
          </button>
        </div>
      `;
      container.appendChild(item);
    });

    container.addEventListener('click', (e) => {
      const trigger = e.target.closest('.faq-trigger');
      const audioBtn = e.target.closest('[data-faq-audio]');

      if (trigger) {
        const card = trigger.closest('.faq-card');
        card.classList.toggle('open');
      } else if (audioBtn) {
        const idx = parseInt(audioBtn.getAttribute('data-faq-audio'), 10);
        const faq = SIY_DATA.faqs[idx];
        if (faq) {
          speakText(`Pregunta: ${faq.pregunta}. Respuesta: ${faq.respuesta}`);
        }
      }
    });
  }

  function renderGlossary() {
    const container = document.getElementById('glossaryGrid');
    if (!container) return;

    container.innerHTML = '';
    SIY_DATA.glosario.forEach(item => {
      const card = document.createElement('div');
      card.className = 'glossary-item';
      card.innerHTML = `
        <h4 class="glossary-term">📌 ${item.termino}</h4>
        <p class="glossary-desc">${item.definicion}</p>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 7. MOTOR DE EXAMEN CON SISTEMA ANTI-TRAMPA ESTRICTO
  // ==========================================================================
  function initExamEngine() {
    const btnStartExam = document.getElementById('btnStartExam');
    const examSetupBox = document.getElementById('examSetupBox');
    const examActivePanel = document.getElementById('examActivePanel');
    const examResultsPanel = document.getElementById('examResultsPanel');
    const btnNextQuestion = document.getElementById('btnNextQuestion');
    const btnResumeExam = document.getElementById('btnResumeExam');
    const btnRestartExam = document.getElementById('btnRestartExam');

    if (btnStartExam) {
      btnStartExam.addEventListener('click', startExamSession);
    }

    if (btnNextQuestion) {
      btnNextQuestion.addEventListener('click', moveToNextQuestion);
    }

    if (btnResumeExam) {
      btnResumeExam.addEventListener('click', dismissAntiCheatModal);
    }

    if (btnRestartExam) {
      btnRestartExam.addEventListener('click', resetExamToConfig);
    }

    // Configurar monitores anti-trampa globales
    setupAntiCheatListeners();
  }

  function startExamSession() {
    // 1. Obtener filtros de configuración
    const topicCheckboxes = document.querySelectorAll('input[name="examTopic"]:checked');
    const selectedTopics = Array.from(topicCheckboxes).map(cb => cb.value);

    if (selectedTopics.length === 0) {
      alert('Ysabel Carolina, por favor selecciona al menos un tema para tu examen.');
      return;
    }

    const questionCountSelect = document.getElementById('examQuestionCount');
    const timeLimitSelect = document.getElementById('examTimeLimit');

    const totalQuestions = parseInt(questionCountSelect.value, 10);
    const timeMinutes = parseInt(timeLimitSelect.value, 10);

    // 2. Filtrar preguntas del banco
    let pool = SIY_DATA.preguntasExamen.filter(q => selectedTopics.includes(q.modulo));
    if (pool.length === 0) {
      pool = SIY_DATA.preguntasExamen;
    }

    // Mezclar aleatoriamente las preguntas
    pool = shuffleArray([...pool]);

    // Seleccionar la cantidad solicitada
    const finalQuestions = pool.slice(0, Math.min(totalQuestions, pool.length));

    // 3. Inicializar estado del examen
    AppState.exam.isActive = true;
    AppState.exam.selectedTopics = selectedTopics;
    AppState.exam.totalQuestionsCount = finalQuestions.length;
    AppState.exam.timeLimitMinutes = timeMinutes;
    AppState.exam.timeRemainingSeconds = timeMinutes * 60;
    AppState.exam.questionQueue = finalQuestions;
    AppState.exam.currentIndex = 0;
    AppState.exam.score = 0;
    AppState.exam.userAnswers = [];
    AppState.exam.antiCheatViolations = 0;
    AppState.exam.isAnswerSubmitted = false;

    // 4. Solicitar Pantalla Completa (Anti-Trampa)
    requestFullscreenMode();

    // 5. Interfaz: Ocultar setup y mostrar panel activo
    document.getElementById('examSetupBox').style.display = 'none';
    document.getElementById('examResultsPanel').classList.remove('active');
    document.getElementById('examActivePanel').classList.add('active');

    // Desplazar a la zona del examen
    document.getElementById('seccion-examen').scrollIntoView({ behavior: 'smooth' });

    // Iniciar temporizador
    startExamTimer();

    // Cargar primera pregunta
    loadCurrentQuestion();

    // Monito da inicio
    showMascotSpeech(`¡Examen iniciado, Ysabel Carolina! Mantén la calma, lee bien cada opción. ¡Estoy contigo! 🐒⏱️`);
  }

  function loadCurrentQuestion() {
    const qIndex = AppState.exam.currentIndex;
    const question = AppState.exam.questionQueue[qIndex];
    AppState.exam.currentQuestion = question;
    AppState.exam.isAnswerSubmitted = false;

    // Actualizar HUD
    const hudNum = document.getElementById('examProgressText');
    const hudBarFill = document.getElementById('examProgressBarFill');
    const qNumBadge = document.getElementById('questionBadgeNumber');
    const qThemeBadge = document.getElementById('questionBadgeTheme');
    const qTitle = document.getElementById('questionTitleText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackBox = document.getElementById('examFeedbackBox');

    if (hudNum) {
      hudNum.textContent = `Pregunta ${qIndex + 1} de ${AppState.exam.totalQuestionsCount}`;
    }
    if (hudBarFill) {
      const pct = (qIndex / AppState.exam.totalQuestionsCount) * 100;
      hudBarFill.style.width = `${pct}%`;
    }
    if (qNumBadge) {
      qNumBadge.textContent = `Pregunta ${qIndex + 1}`;
    }
    if (qThemeBadge) {
      qThemeBadge.textContent = question.tema;
    }
    if (qTitle) {
      qTitle.textContent = question.pregunta;
    }

    // Ocultar caja de retroalimentación
    if (feedbackBox) {
      feedbackBox.classList.remove('show', 'feedback-correct', 'feedback-wrong');
      feedbackBox.style.display = 'none';
    }

    // Renderizar opciones
    if (optionsContainer) {
      optionsContainer.innerHTML = '';
      const letras = ['A', 'B', 'C', 'D'];
      question.opciones.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.type = 'button';
        btn.setAttribute('data-option-index', idx);
        btn.innerHTML = `
          <span class="option-index">${letras[idx]}</span>
          <span class="option-label">${opt}</span>
        `;
        btn.addEventListener('click', () => handleOptionSelection(idx));
        optionsContainer.appendChild(btn);
      });
    }
  }

  function handleOptionSelection(selectedIndex) {
    if (AppState.exam.isAnswerSubmitted) return; // Evitar doble click
    AppState.exam.isAnswerSubmitted = true;

    const question = AppState.exam.currentQuestion;
    const isCorrect = selectedIndex === question.correcta;

    // Deshabilitar botones de opciones
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.getAttribute('data-option-index'), 10);
      if (idx === question.correcta) {
        btn.classList.add('selected-correct');
      } else if (idx === selectedIndex && !isCorrect) {
        btn.classList.add('selected-wrong');
      }
    });

    // Guardar respuesta del usuario
    AppState.exam.userAnswers.push({
      questionId: question.id,
      selected: selectedIndex,
      isCorrect: isCorrect
    });

    if (isCorrect) {
      AppState.exam.score++;
    }

    // Mostrar retroalimentación formativa y profunda
    renderQuestionFeedback(selectedIndex, isCorrect);
  }

  function renderQuestionFeedback(selectedIndex, isCorrect) {
    const question = AppState.exam.currentQuestion;
    const feedbackBox = document.getElementById('examFeedbackBox');
    const feedbackHeader = document.getElementById('feedbackHeader');
    const feedbackErrorSection = document.getElementById('feedbackErrorSection');
    const feedbackErrorExplanation = document.getElementById('feedbackErrorExplanation');
    const feedbackSolutionExplanation = document.getElementById('feedbackSolutionExplanation');
    const nextBtn = document.getElementById('btnNextQuestion');

    if (!feedbackBox) return;

    if (isCorrect) {
      feedbackBox.className = 'feedback-box show feedback-correct';
      feedbackHeader.innerHTML = `🎉 ¡EXCELENTE YSABEL CAROLINA! RESPUESTA CORRECTA`;
      
      // Ocultar bloque de error
      feedbackErrorSection.style.display = 'none';

      // Explicación de por qué es correcta
      feedbackSolutionExplanation.innerHTML = question.explicacionCorrecta;

      // Reacción del monito
      showMascotSpeech(getRandomPhrase(MascotPhrases.acierto));
    } else {
      feedbackBox.className = 'feedback-box show feedback-wrong';
      feedbackHeader.innerHTML = `⚠️ RESPUESTA INCORRECTA, YSABEL CAROLINA — VAMOS A ANALIZARLA`;

      // Mostrar por qué la opción elegida era un fallo
      feedbackErrorSection.style.display = 'block';
      const falloExplicado = question.retroalimentacionIncorrecta[selectedIndex] || 
        "Esta opción no cumple con las directrices de la norma técnica venezolana.";
      feedbackErrorExplanation.innerHTML = `❌ <strong>¿Por qué tu opción seleccionada no es la adecuada?</strong><br>${falloExplicado}`;

      // Mostrar por qué la correcta es la válida
      feedbackSolutionExplanation.innerHTML = `✅ <strong>Opción Correcta Fundamentada:</strong><br>${question.explicacionCorrecta}`;

      // Reacción del monito
      showMascotSpeech(getRandomPhrase(MascotPhrases.fallo));
    }

    feedbackBox.style.display = 'block';

    // Ajustar texto del botón si es la última pregunta
    if (AppState.exam.currentIndex === AppState.exam.totalQuestionsCount - 1) {
      nextBtn.innerHTML = `🏁 Finalizar Examen y Ver Resultados`;
    } else {
      nextBtn.innerHTML = `Siguiente Pregunta ➔`;
    }

    // Auto-scroll para que Ysabel lea cómodamente el feedback
    feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function moveToNextQuestion() {
    if (AppState.exam.currentIndex < AppState.exam.totalQuestionsCount - 1) {
      AppState.exam.currentIndex++;
      loadCurrentQuestion();
    } else {
      finishExamSession();
    }
  }

  function startExamTimer() {
    clearInterval(AppState.exam.timerInterval);
    const timerDisplay = document.getElementById('examTimerDisplay');

    AppState.exam.timerInterval = setInterval(() => {
      if (AppState.exam.timeRemainingSeconds <= 0) {
        clearInterval(AppState.exam.timerInterval);
        alert('⏰ ¡El tiempo del examen ha terminado, Ysabel Carolina! Se registrarán tus respuestas actuales.');
        finishExamSession();
        return;
      }

      AppState.exam.timeRemainingSeconds--;
      const mins = Math.floor(AppState.exam.timeRemainingSeconds / 60);
      const secs = AppState.exam.timeRemainingSeconds % 60;
      if (timerDisplay) {
        timerDisplay.textContent = `⏱️ ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }, 1000);
  }

  function finishExamSession() {
    AppState.exam.isActive = false;
    clearInterval(AppState.exam.timerInterval);

    // Salir de pantalla completa si estaba activa
    exitFullscreenMode();

    // Actualizar interfaz
    document.getElementById('examActivePanel').classList.remove('active');
    const resultsPanel = document.getElementById('examResultsPanel');
    resultsPanel.classList.add('active');

    // Calcular estadísticas
    const total = AppState.exam.totalQuestionsCount;
    const score = AppState.exam.score;
    const percentage = Math.round((score / total) * 100);

    const scoreDisplay = document.getElementById('resultsScorePercent');
    const scoreText = document.getElementById('resultsScoreSummaryText');
    const diplomaScore = document.getElementById('diplomaScoreNumber');
    const diplomaDate = document.getElementById('diplomaDateText');

    if (scoreDisplay) scoreDisplay.textContent = `${percentage}%`;
    if (diplomaScore) diplomaScore.textContent = `${score} / ${total} (${percentage}%)`;
    if (diplomaDate) diplomaDate.textContent = new Date().toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' });

    let feedbackMsg = '';
    if (percentage >= 80) {
      feedbackMsg = `¡Extraordinario desempeño, Ysabel Carolina! Tienes un dominio superior sobre las normas SY-S04, YR-S17 y el marco de seguridad industrial venezolano. Tu compromiso con la prevención es inspirador.`;
      showMascotSpeech(`🏆 ¡FELICITACIONES YSABEL CAROLINA! ¡Eres una eminencia en seguridad industrial! Te has ganado tu diploma con honores.`);
    } else if (percentage >= 60) {
      feedbackMsg = `¡Buen trabajo, Ysabel Carolina! Has aprobado el examen con fundamentos sólidos. Te recomendamos repasar los casos de espacios confinados y permisos en caliente para alcanzar la perfección.`;
      showMascotSpeech(`¡Aprobado con ganas, Ysabel Carolina! Repasa los detalles que fallamos y serás invencible.`);
    } else {
      feedbackMsg = `¡Buen intento, Ysabel Carolina! La seguridad industrial requiere estudio continuo y meticulosidad. Repasa los módulos de la biblioteca y vuelve a intentar el simulador. ¡Tú puedes lograrlo!`;
      showMascotSpeech(`¡No te rindas jamás, Ysabel Carolina! Revisa las normas en la biblioteca y volvemos a intentarlo juntas.`);
    }

    if (scoreText) scoreText.textContent = feedbackMsg;

    resultsPanel.scrollIntoView({ behavior: 'smooth' });
  }

  function resetExamToConfig() {
    AppState.exam.isActive = false;
    clearInterval(AppState.exam.timerInterval);
    document.getElementById('examResultsPanel').classList.remove('active');
    document.getElementById('examActivePanel').classList.remove('active');
    document.getElementById('examSetupBox').style.display = 'block';
    document.getElementById('seccion-examen').scrollIntoView({ behavior: 'smooth' });
  }

  // ==========================================================================
  // 8. MECANISMO ESTRICTO ANTI-TRAMPA (ANTI-CHEAT SYSTEM)
  // ==========================================================================
  function setupAntiCheatListeners() {
    // A. Detectar cambio de pestaña o ventana minimizada
    document.addEventListener('visibilitychange', () => {
      if (AppState.exam.isActive && document.hidden) {
        handleAntiCheatViolation('Cambio de pestaña o aplicación detectado');
      }
    });

    window.addEventListener('blur', () => {
      if (AppState.exam.isActive) {
        handleAntiCheatViolation('Pérdida de foco en la ventana del examen');
      }
    });

    // B. Detectar salida involuntaria de pantalla completa
    document.addEventListener('fullscreenchange', () => {
      if (AppState.exam.isActive && !document.fullscreenElement) {
        handleAntiCheatViolation('Salida del modo pantalla completa obligatorio');
      }
    });

    // C. Bloquear clic derecho (context menu) durante el examen
    document.addEventListener('contextmenu', (e) => {
      if (AppState.exam.isActive) {
        e.preventDefault();
        showMascotSpeech(`⚠️ Ysabel Carolina, el menú contextual está deshabilitado durante el examen para garantizar la integridad de la prueba.`);
      }
    });

    // D. Bloquear atajos de teclado sospechosos (Ctrl+C, Ctrl+V, F12, Ctrl+U)
    document.addEventListener('keydown', (e) => {
      if (!AppState.exam.isActive) return;

      if (e.key === 'F12' || 
         (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
         (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 'c' || e.key === 'C' || e.key === 'v' || e.key === 'V'))) {
        e.preventDefault();
        handleAntiCheatViolation('Intento de copia o apertura de herramientas de inspección');
      }
    });

    // E. Bloquear navegación involuntaria (beforeunload)
    window.addEventListener('beforeunload', (e) => {
      if (AppState.exam.isActive) {
        e.preventDefault();
        e.returnValue = '¡Atención Ysabel Carolina! Si sales de la página perderás tu progreso en el examen.';
        return e.returnValue;
      }
    });
  }

  function handleAntiCheatViolation(motivo) {
    if (!AppState.exam.isActive) return;

    AppState.exam.antiCheatViolations++;
    const vCount = AppState.exam.antiCheatViolations;

    // Actualizar indicador en HUD
    const hudStatus = document.getElementById('hudAntiCheatBadge');
    if (hudStatus) {
      hudStatus.className = 'hud-anticheat-status warning';
      hudStatus.innerHTML = `⚠️ FALTAS: ${vCount} / ${AppState.exam.maxViolations}`;
    }

    // Modal de advertencia severo
    const modal = document.getElementById('antiCheatAlertModal');
    const modalDesc = document.getElementById('antiCheatModalDesc');

    if (modal && modalDesc) {
      modalDesc.innerHTML = `
        <strong>¡Atención Ysabel Carolina Nuñez!</strong><br>
        Has abandonado la pantalla del examen o intentado salir del entorno seguro.<br>
        <strong>Motivo detectado:</strong> ${motivo}.<br><br>
        Esta es tu <strong>infracción N° ${vCount} de ${AppState.exam.maxViolations}</strong>.<br>
        <em>Si acumulas ${AppState.exam.maxViolations} infracciones, el examen se anulará automáticamente por seguridad normativa.</em>
      `;
      modal.classList.add('active');
    }

    // Voz de advertencia
    speakText(`¡Atención Ysabel Carolina! Se ha detectado una infracción anti-trampa. Regresa a la prueba.`, true);

    // Si excede el máximo de violaciones
    if (vCount >= AppState.exam.maxViolations) {
      alert(`⚠️ Ysabel Carolina, has superado el límite de 3 advertencias anti-trampa. El examen finalizará inmediatamente.`);
      dismissAntiCheatModal();
      finishExamSession();
    }
  }

  function dismissAntiCheatModal() {
    const modal = document.getElementById('antiCheatAlertModal');
    if (modal) {
      modal.classList.remove('active');
    }
    requestFullscreenMode();
  }

  function requestFullscreenMode() {
    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen().catch(() => {});
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      }
    } catch (e) {
      console.warn('Pantalla completa no permitida por navegador');
    }
  }

  function exitFullscreenMode() {
    try {
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    } catch (e) {}
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ==========================================================================
  // 9. INSTALACIÓN PWA (DESCARGABLE EN PANTALLA DE INICIO)
  // ==========================================================================
  function initPWA() {
    const btnInstall = document.getElementById('btnInstallApp');
    const btnInstallHero = document.getElementById('btnInstallAppHero');
    const pwaModal = document.getElementById('pwaInstallModal');

    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('SIY1704 Service Worker registrado:', reg.scope))
          .catch(err => console.warn('Fallo registro de SW:', err));
      });
    }

    // Capturar evento de instalación nativa PWA
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      AppState.deferredPrompt = e;
      if (btnInstall) btnInstall.style.display = 'inline-flex';
      if (btnInstallHero) btnInstallHero.style.display = 'inline-flex';
    });

    const triggerInstall = () => {
      if (AppState.deferredPrompt) {
        AppState.deferredPrompt.prompt();
        AppState.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            showMascotSpeech(`🎉 ¡Genial Ysabel Carolina! SIY1704 se está instalando en tu dispositivo. ¡Ahora podrás estudiar cuando quieras!`);
          }
          AppState.deferredPrompt = null;
        });
      } else {
        // Si no está disponible el prompt nativo (por ejemplo en iOS o ya instalado), abrir modal guía
        if (pwaModal) {
          pwaModal.classList.add('active');
        }
      }
    };

    if (btnInstall) btnInstall.addEventListener('click', triggerInstall);
    if (btnInstallHero) btnInstallHero.addEventListener('click', triggerInstall);
  }

})();
