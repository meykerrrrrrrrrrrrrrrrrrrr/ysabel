/**
 * BASE DE CONOCIMIENTO Y CONTENIDO EDUCATIVO - PLATAFORMA SIY1704
 * Especializado para: Ysabel Carolina Nuñez
 * Normas: PDVSA SY-S-04 / SI-S-04, YR-S-17 / IR-S-17, LOPCYMAT, NT-01-2008, COVENIN
 */

const SIY_DATA = {
  usuario: {
    nombre: "Ysabel Carolina Nuñez",
    rol: "Especialista en Formación de Seguridad Industrial y Salud Laboral",
    plataforma: "SIY1704",
    lema: "La prevención no es un requisito de papel, es el escudo de tu vida y la de tus compañeros."
  },

  modulos: [
    {
      id: "modulo-sy-s04",
      codigo: "SY-S-04 / SI-S-04",
      titulo: "Requisitos de Seguridad Industrial e Higiene Ocupacional y Permisos de Trabajo",
      subtitulo: "Norma Técnica fundamental para la autorización, control e inspección segura de tareas operacionales y contratistas",
      icono: "🛡️",
      colorTag: "azul",
      resumen: "Establece los lineamientos de obligatorio cumplimiento para planificar, tramitar, emitir, ejecutar e inspeccionar trabajos mediante Permisos de Trabajo (Frío y Caliente) y Certificados de Apoyo, garantizando que ninguna labor inicie sin condiciones seguras comprobadas.",
      contenidoHtml: `
        <div class="norma-badge badge-blue">Norma Técnica Base: PDVSA SI-S-04 / SY-S-04 & COVENIN 2260</div>
        <h3>1. ¿Qué es y cuál es el Propósito de la Norma SY-S-04?</h3>
        <p>La norma <strong>SY-S-04</strong> (vinculada a la serie de Seguridad Industrial de la industria petrolera y petroquímica venezolana, alineada con <strong>COVENIN 2260</strong> y el marco <strong>LOPCYMAT</strong>) establece los requisitos mínimos de Seguridad Industrial, Ambiente e Higiene Ocupacional (SIAHO) que deben cumplir las unidades operativas y empresas contratistas antes, durante y después de la ejecución de cualquier actividad técnica.</p>
        <p>Su propósito es <strong>eliminar el trabajo improvisado</strong> mediante un sistema estricto de autorización por escrito denominado <em>Sistema de Permisos de Trabajo</em>.</p>

        <div class="callout callout-info">
          <h4>📌 Principio Clave para Ysabel Carolina:</h4>
          <p>Un permiso de trabajo <strong>NO es una simple firma burocrática</strong>. Es una declaración legal y técnica de que el sitio de trabajo fue inspeccionado, las fuentes de energía fueron aisladas, la atmósfera fue verificada y los riesgos están bajo control activo.</p>
        </div>

        <h3>2. Tipos de Permisos de Trabajo según la Norma</h3>
        <div class="grid-cards">
          <div class="card-item border-orange">
            <span class="card-tag tag-orange">🔥 Permiso en Caliente</span>
            <h4>Trabajos en Caliente (Hot Work)</h4>
            <p>Aplica a toda actividad capaz de generar chispas, llamas abiertas, arcos eléctricos o suficiente calor para encender vapores, polvos o gases inflamables.</p>
            <ul>
              <li><strong>Ejemplos:</strong> Soldadura eléctrica/autógena, oxicorte, uso de esmeriles/amoladoras, chorro de arena (sandblasting), vehículos de combustión en áreas clasificadas.</li>
              <li><strong>Requisitos críticos:</strong> Prueba de gas inflamable previa (Límite Explosivo LEL 0%), disponibilidad inmediata de extintores PQS/CO2 cargados, vigía de fuego certificado y cubiertas ignífugas.</li>
            </ul>
          </div>

          <div class="card-item border-blue">
            <span class="card-tag tag-blue">❄️ Permiso en Frío</span>
            <h4>Trabajos en Frío (Cold Work)</h4>
            <p>Aplica a labores mecánicas, civiles o instrumentales que no generan fuentes de ignición directa pero entrañan riesgos físicos, mecánicos o químicos.</p>
            <ul>
              <li><strong>Ejemplos:</strong> Desarme de bridas de tuberías sin presión, pintura con brocha, mantenimiento civil no ruidoso, inspección visual de equipos, limpieza manual.</li>
              <li><strong>Requisitos críticos:</strong> Aislamiento de líneas, despresurización comprobada, drenaje, señalización y bloqueo de paso peatonal.</li>
            </ul>
          </div>
        </div>

        <h3>3. Certificados de Apoyo Obligatorios</h3>
        <p>Cuando un trabajo tiene condiciones especiales de alto riesgo, el Permiso de Trabajo (Frío o Caliente) debe ir acompañado de uno o más <strong>Certificados Especiales de Apoyo</strong>:</p>
        <ul class="styled-list">
          <li><strong>Certificado de Entrada a Espacios Confinados:</strong> Obligatorio para entrar en tanques, recipientes, zanjas de más de 1.2 m, reactores o tuberías. Requiere medición continua de oxígeno (19.5% a 21.4%), toxicidad (H2S, CO) y explosividad (0% LEL), además de vigía externo permanente y plan de rescate.</li>
          <li><strong>Certificado de Bloqueo y Etiquetado (LOTO - Lock Out / Tag Out):</strong> Aislamiento de fuentes de energía eléctrica, mecánica, hidráulica, neumática o térmica mediante candados personales y tarjetas de advertencia.</li>
          <li><strong>Certificado de Excavación:</strong> Verificación de planos de tuberías soterradas, cables subterráneos, taludes de protección y entibado de paredes.</li>
          <li><strong>Certificado de Izamiento Crítico de Cargas:</strong> Inspección de grúa, estrobos, grilletes, cálculo de porcentaje de capacidad de la pluma (>80% es crítico) y radio de giro libre de personal.</li>
          <li><strong>Certificado para Trabajos en Altura (>1.80 metros):</strong> Inspección de andamios con tarjeta verde vigente, arnés de cuerpo entero con doble cabo de vida y amortiguador de impacto, puntos de anclaje certificados (5.000 lbs).</li>
        </ul>

        <h3>4. Roles y Responsabilidades Técnicas y Legales</h3>
        <table class="table-neon">
          <thead>
            <tr>
              <th>Rol Normativo</th>
              <th>Responsabilidad Principal</th>
              <th>Obligación en Campo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Emisor / Custodio</strong></td>
              <td>Dueño del área o instalación operacional.</td>
              <td>Garantiza que la planta esté segura para intervenir (aislada, venteada, libre de gas) y firma la autorización.</td>
            </tr>
            <tr>
              <td><strong>Receptor / Ejecutor</strong></td>
              <td>Supervisor o líder de la cuadrilla ejecutora.</td>
              <td>Verifica que su personal comprenda el ART, use los EPP adecuados y cumpla las medidas estipuladas.</td>
            </tr>
            <tr>
              <td><strong>Inspector SIAHO / Seguridad</strong></td>
              <td>Asesor técnico y auditor de cumplimiento.</td>
              <td>Fiscaliza en campo, audita pruebas de gas y tiene potestad de paralizar la actividad si hay peligro inminente.</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      id: "modulo-yr-s17",
      codigo: "YR-S-17 / IR-S-17",
      titulo: "Análisis de Riesgos en el Trabajo (ART) / Procedimientos de Trabajo Seguro",
      subtitulo: "Metodología sistemática venezolana para la identificación de peligros y control operacional",
      icono: "📋",
      colorTag: "amarillo",
      resumen: "Define la metodología reglamentaria para desglosar cada tarea paso a paso antes de su inicio, identificar peligros físicos, químicos, biológicos, disergonómicos y psicosociales, evaluar los riesgos asociados y formular barreras duras y blandas de control.",
      contenidoHtml: `
        <div class="norma-badge badge-yellow">Norma Técnica Base: PDVSA IR-S-17 / YR-S-17 & LOPCYMAT Art. 53 y 56</div>
        <h3>1. ¿Qué es el Análisis de Riesgos en el Trabajo (ART)?</h3>
        <p>El <strong>ART (o JSA por sus siglas en inglés: Job Safety Analysis)</strong> según la norma <strong>IR-S-17 / YR-S-17</strong> es una herramienta sistemática de gestión de seguridad preventiva que consiste en descomponer un trabajo en su secuencia cronológica de pasos, identificar los peligros y agentes de daño en cada etapa, evaluar el nivel de riesgo y establecer las medidas de control específicas que eviten incidentes, accidentes de trabajo y enfermedades ocupacionales.</p>

        <div class="callout callout-warning">
          <h4>💡 Regla de Oro para Ysabel Carolina Nuñez:</h4>
          <p>El ART <strong>se elabora con los trabajadores ejecutores</strong> en el sitio de la faena, nunca desde una oficina con copiar y pegar. Cada miembro de la cuadrilla debe firmar y comprender el ART antes de tocar una herramienta.</p>
        </div>

        <h3>2. Las 4 Etapas Metodológicas de la Norma YR-S-17</h3>
        <div class="steps-container">
          <div class="step-card">
            <div class="step-num">1</div>
            <div class="step-body">
              <h4>Desglose Cronológico de la Tarea</h4>
              <p>Dividir el trabajo en pasos sucesivos y lógicos (ej: 1. Inspección de herramientas y área, 2. Aislamiento mecánico, 3. Desmontaje de válvula, 4. Limpieza y orden final). No se debe hacer ni demasiado general ni excesivamente minucioso.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">2</div>
            <div class="step-body">
              <h4>Identificación de Peligros y Fuentes de Daño</h4>
              <p>Para cada paso, responder: ¿Qué puede fallar? ¿Qué energía existe? (presión, gravedad, electricidad, químicos, calor, movimiento). ¿Qué agente ambiental o biológico está presente?</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">3</div>
            <div class="step-body">
              <h4>Evaluación del Riesgo y Consecuencias Potenciales</h4>
              <p>Determinar la severidad potencial de la lesión o daño material y la probabilidad de ocurrencia si no existen controles. Se clasifica en Riesgo Alto, Medio o Bajo mediante la matriz de riesgos institucional.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-num">4</div>
            <div class="step-body">
              <h4>Establecimiento de Medidas de Prevención y Control</h4>
              <p>Aplicar estrictamente la <strong>Jerarquía de Controles</strong>: Diseñar controles que eliminen o mitiguen la causa raíz antes de depender únicamente de los equipos de protección personal (EPP).</p>
            </div>
          </div>
        </div>

        <h3>3. La Jerarquía de Controles según LOPCYMAT y la Norma</h3>
        <p>La normativa venezolana e internacional prohíbe descansar la seguridad únicamente en el casco y los guantes. El orden de prioridad legal y técnico es:</p>
        <div class="pyramid-control">
          <div class="level level-1">1. ELIMINACIÓN (Máxima Efectividad): Remover físicamente el peligro. Ej: Cancelar tarea en altura usando drones de inspección.</div>
          <div class="level level-2">2. SUSTITUCIÓN: Reemplazar el peligro. Ej: Usar solvente biodegradable a base de agua en vez de thinner o benceno.</div>
          <div class="level level-3">3. CONTROLES DE INGENIERÍA: Aislar a las personas del peligro. Ej: Guardas de protección en esmeril, extractores de humo, barandas rígidas.</div>
          <div class="level level-4">4. CONTROLES ADMINISTRATIVOS: Cambiar la forma en que trabajan las personas. Ej: Procedimientos escritos, capacitación, permisos de trabajo, rotación de turnos.</div>
          <div class="level level-5">5. EQUIPOS DE PROTECCIÓN PERSONAL (EPP - Última Barrera): Proteger al trabajador con vestimenta certificada si las barreras anteriores no eliminan el riesgo residual.</div>
        </div>
      `
    },
    {
      id: "modulo-marco-legal",
      codigo: "MARCO LEGAL VENEZOLANO",
      titulo: "LOPCYMAT, NT-01-2008, INPSASEL y Normas COVENIN",
      subtitulo: "La columna vertebral jurídica que ampara la vida, salud y condiciones de trabajo dignas en Venezuela",
      icono: "⚖️",
      colorTag: "fucsia",
      resumen: "Compendio de la Ley Orgánica de Prevención, Condiciones y Medio Ambiente de Trabajo, la Norma Técnica de Programas de Seguridad y Salud en el Trabajo, el rol fiscalizador de INPSASEL y las normas COVENIN esenciales.",
      contenidoHtml: `
        <div class="norma-badge badge-fuchsia">Base Legal: CRBV Art. 87 + LOPCYMAT Gaceta 38.236 + NT-01-2008</div>
        <h3>1. Constitución y LOPCYMAT: Derechos y Deberes Fundamentales</h3>
        <p>El Artículo 87 de la <strong>Constitución de la República Bolivariana de Venezuela (CRBV)</strong> consagra el deber de todo patrono de garantizar condiciones de seguridad, higiene y ambiente de trabajo adecuados.</p>
        <p>La <strong>LOPCYMAT</strong> profundiza este mandato y establece responsabilidades administrativas, civiles y penales directas para empleadores que incumplan las normas.</p>

        <div class="grid-cards">
          <div class="card-item border-fuchsia">
            <span class="card-tag tag-fuchsia">Artículo 53 LOPCYMAT</span>
            <h4>Derechos de los Trabajadores</h4>
            <ul>
              <li><strong>Derecho a ser informados:</strong> Conocer los riesgos a los que están expuestos antes de iniciar cualquier labor.</li>
              <li><strong>Derecho a negarse a trabajar:</strong> Paralizar la tarea y retirarse si existe una situación de <em>peligro inminente</em> que amenace su vida o integridad física, sin que ello genere represalias o despido.</li>
              <li><strong>Derecho a la formación:</strong> Recibir al menos 16 horas trimestrales de capacitación en materia de SST.</li>
              <li><strong>Derecho a EPP sin costo alguno:</strong> El patrono debe dotar de equipos de protección adecuados y certificados.</li>
            </ul>
          </div>

          <div class="card-item border-yellow">
            <span class="card-tag tag-yellow">Artículo 54 LOPCYMAT</span>
            <h4>Deberes de los Trabajadores</h4>
            <ul>
              <li>Usar obligatoriamente y cuidar los EPP y dispositivos de seguridad suministrados.</li>
              <li>Acatar las normas de seguridad e higiene y los procedimientos de trabajo seguro establecidos.</li>
              <li>Reportar de forma inmediata cualquier condición o acto inseguro en el puesto de trabajo.</li>
              <li>Participar activamente en la elaboración y cumplimiento de los ART y en los Comités de Seguridad.</li>
            </ul>
          </div>
        </div>

        <h3>2. Norma Técnica NT-01-2008 (INPSASEL)</h3>
        <p>Regula la elaboración, implementación y evaluación del <strong>Programa de Seguridad y Salud en el Trabajo (PSST)</strong>. Exige:</p>
        <ul class="styled-list">
          <li>Política de Seguridad y Salud redactada y firmada con la participación de los trabajadores.</li>
          <li>Identificación sistemática de procesos peligrosos (Método de Procesos Peligrosos).</li>
          <li>Planes de contingencia y atención médica inmediata ante emergencias.</li>
          <li>Investigación de todo accidente y reporte a INPSASEL dentro de los <strong>60 minutos</strong> siguientes vía portal/fax y formalización en 24 horas.</li>
        </ul>

        <h3>3. Normas COVENIN de Obligatoria Consulta</h3>
        <table class="table-neon">
          <thead>
            <tr>
              <th>Norma COVENIN</th>
              <th>Denominación Oficial</th>
              <th>Aplicación Clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>COVENIN 2260</strong></td>
              <td>Programa de Higiene y Seguridad Ocupacional</td>
              <td>Estructura general de gestión preventiva en empresas venezolanas.</td>
            </tr>
            <tr>
              <td><strong>COVENIN 2270</strong></td>
              <td>Comités de Seguridad y Salud Laboral</td>
              <td>Guía para constitución de comités paritarios (patronos y delegados).</td>
            </tr>
            <tr>
              <td><strong>COVENIN 187</strong></td>
              <td>Colores, Símbolos y Dimensiones para Señales de Seguridad</td>
              <td>Rojo (prohibición/fuego), Amarillo (precaución/riesgo), Azul (obligación), Verde (socorro).</td>
            </tr>
            <tr>
              <td><strong>COVENIN 39</strong></td>
              <td>Extintores Portátiles: Selección y Distribución</td>
              <td>Tipos A, B, C, D, K y mantenimiento periódico.</td>
            </tr>
            <tr>
              <td><strong>COVENIN 1056</strong></td>
              <td>Equipos de Protección Respiratoria</td>
              <td>Selección de mascarillas, filtros para vapores orgánicos y gases ácidos.</td>
            </tr>
          </tbody>
        </table>
      `
    },
    {
      id: "modulo-matriz-riesgo",
      codigo: "EVALUACIÓN Y MATRIZ",
      titulo: "Peligro vs Riesgo y Matriz de Severidad x Probabilidad",
      subtitulo: "Diferenciación conceptual precisa y valoración cuantitativa y cualitativa",
      icono: "🎯",
      colorTag: "naranja",
      resumen: "Aprende a diferenciar sin titubeos qué es un peligro de qué es un riesgo, cómo se calcula el Índice de Riesgo y cómo tomar decisiones operativas basadas en la matriz de tolerabilidad.",
      contenidoHtml: `
        <div class="norma-badge badge-orange">Metodología RAM & Matrices 5x5 de Seguridad Industrial</div>
        <h3>1. La Gran Diferencia que Ysabel Carolina debe dominar</h3>
        <div class="grid-cards">
          <div class="card-item border-orange">
            <span class="card-tag tag-orange">⚠️ PELIGRO (La Fuente o Condición)</span>
            <h4>Propiedad intrínseca capaz de causar daño</h4>
            <p>Es una fuente, situación o acto con potencial intrínseco de originar daños en términos de lesiones humanas, deterioro de la salud o daño a los activos.</p>
            <p><strong>Ejemplo:</strong> Un cable pelado energizado a 220V, un tanque con ácido clorhídrico, una escalera sin patas de goma a 4 metros de altura, el sol inclemente a 38°C.</p>
          </div>

          <div class="card-item border-yellow">
            <span class="card-tag tag-yellow">🎲 RIESGO (La Probabilidad x Consecuencia)</span>
            <h4>Combinación de frecuencia y severidad</h4>
            <p>Es la probabilidad de que ocurra un evento peligroso específico junto con la severidad o magnitud de las lesiones o daños que este pueda causar.</p>
            <p><strong>Ejemplo:</strong> Electrocución o choque eléctrico al tocar el cable pelado, quemadura química severa por salpicadura del ácido, fractura por caída de altura.</p>
          </div>
        </div>

        <h3>2. Cálculo del Riesgo: R = P × C (o P × S)</h3>
        <p>En el Análisis de Riesgo en el Trabajo (ART), la fórmula básica es:</p>
        <div class="formula-box">
          <code>RIESGO = PROBABILIDAD (Frecuencia de exposición) × SEVERIDAD (Gravedad de la consecuencia)</code>
        </div>
        <p>Una matriz de riesgos clasifica el resultado en:</p>
        <ul class="styled-list">
          <li><strong>Riesgo Crítico / No Tolerable (Rojo):</strong> La tarea está PROHIBIDA hasta que se implementen controles de ingeniería o aislamiento que reduzcan el riesgo.</li>
          <li><strong>Riesgo Medio / Tolerable con Controles (Amarillo):</strong> La tarea puede realizarse únicamente si el ART contempla supervisión continua y firmas autorizadas de gerencia.</li>
          <li><strong>Riesgo Bajo / Aceptable (Verde):</strong> La tarea se ejecuta con precauciones habituales y procedimientos operativos estándar.</li>
        </ul>
      `
    }
  ],

  casosComparativos: [
    {
      id: "caso-1",
      titulo: "Trabajo en Altura: Refinería vs. Hogar",
      categoria: "Riesgo de Caída a Distinto Nivel",
      icono: "🪜",
      laboral: {
        escenario: "Reemplazo de una luminaria a 8 metros en un rack de tuberías de refinería (Norma SY-S-04 y COVENIN 2116).",
        peligro: "Altura física superior a 1.80 metros, piso resbaladizo, viento y presencia de líneas con hidrocarburos.",
        riesgo: "Caída a distinto nivel con consecuencia fatal o politraumatismo severo.",
        controlesNormativos: [
          "Tramitación de Permiso de Trabajo en Frío y Certificado de Altura.",
          "Armado de andamio certificado según COVENIN 2116 con tarjeta verde inspeccionada por personal competente.",
          "Uso de arnés de cuerpo entero con doble cabo de vida y absorbedor de impacto.",
          "Punto de anclaje certificado capaz de resistir 5.000 lbf (22.2 kN).",
          "Línea de vida retráctil y delimitación del radio inferior con conos y cinta de peligro."
        ]
      },
      cotidiano: {
        escenario: "Cambiar un bombillo quemado en el techo de la sala sobre una mesa plástica con un banquito encima.",
        peligro: "Superficie inestable, base plástica no diseñada para carga humana vertical y altura de 2.80 metros.",
        riesgo: "Vuelco del banquito, caída de espaldas, fractura de cráneo o columna y electrocución si no se baja el breaker.",
        solucionCorrecta: [
          "Bajar la palanca del interruptor general (breaker) para eliminar la fuente eléctrica.",
          "Usar una escalera de tijera tipo tijera o pedestal en buen estado, con zapatas de goma antideslizantes.",
          "Apoyar la escalera en los 4 puntos nivelados y nunca subirse al último peldaño.",
          "Tener una persona de apoyo sosteniendo la base de la escalera."
        ]
      },
      moraleja: "En la casa como en la planta: ¡La gravedad no negocia con nadie! Si no hay base firme y control de energía, el resultado puede ser fatal."
    },
    {
      id: "caso-2",
      titulo: "Espacio Confinado: Tanque de Crudo vs. Tanque de Agua Residencial",
      categoria: "Atmósferas Peligrosas y Asfixia",
      icono: "🕳️",
      laboral: {
        escenario: "Inspección y limpieza interior de un tanque separador de crudo de 500 barriles (Norma SY-S-04 y COVENIN 3153).",
        peligro: "Atmósfera deficiente de oxígeno (<19.5%), presencia letal de H2S (ácido sulfhídrico), LEL > 0% e ingreso por boca de visita estrecha.",
        riesgo: "Asfixia inmediata, explosión por atmósfera inflamable o intoxicación por gas tóxico en menos de 60 segundos.",
        controlesNormativos: [
          "Permiso de Trabajo en Caliente/Frío + Certificado de Entrada a Espacio Confinado.",
          "Aislamiento positivo mediante cegado (disco ciego) de todas las tuberías de entrada y salida (LOTO).",
          "Lavado, desgasificación y ventilación forzada continua con extractor neumático.",
          "Monitoreo continuo de gases de 4 vías (O2, LEL, CO, H2S).",
          "Vigía externo en la boca de visita con sistema de comunicación y equipo de rescate trípode listo."
        ]
      },
      cotidiano: {
        escenario: "Una persona se mete dentro del tanque de agua subterráneo de la casa para limpiarlo usando cloro puro concentrado con la tapa casi cerrada.",
        peligro: "Desprendimiento masivo de gas cloro irritante en espacio sin ventilación natural y tapa cerrada.",
        riesgo: "Edema pulmonar químico, desmayo por falta de oxígeno, ahogamiento o traumatismo craneal al caer al fondo.",
        solucionCorrecta: [
          "Abrir por completo la tapa del tanque subterráneo y permitir ventilación cruzada varias horas antes.",
          "Utilizar un ventilador para inyectar aire fresco.",
          "Nunca ingresar solo: debe haber un familiar afuera con comunicación visual continua.",
          "Diluir el hipoclorito de sodio en agua en las proporciones recomendadas (máximo 1 parte por 10) y usar mascarilla con cartuchos para vapores químicos y guantes de nitrilo."
        ]
      },
      moraleja: "El cloro de limpiar tanques en casa mata exactamente igual que los químicos de refinería si se encierra en un espacio sin oxígeno."
    },
    {
      id: "caso-3",
      titulo: "Riesgo Químico: Ácido en Laboratorio vs. Mezcla de Limpieza Doméstica",
      categoria: "Reactividad Química Incompatible",
      icono: "🧪",
      laboral: {
        escenario: "Preparación de soluciones ácidas industriales con ácido sulfúrico concentrado al 98%.",
        peligro: "Reacción exotérmica violenta al contacto indebido con agua, vapores corrosivos.",
        riesgo: "Quemaduras químicas de 3er grado, ceguera por salpicadura y destrucción del tejido cutáneo.",
        controlesNormativos: [
          "Regla mnemotécnica estricta: 'Nunca le des de beber agua al ácido, agrega el ácido al agua lentamente'.",
          "Campana de extracción de gases certificada.",
          "Uso de careta facial de policarbonato, delantal de neopreno y guantes largos de butilo.",
          "Estación de ducha lavaojos probada a menos de 10 segundos de recorrido."
        ]
      },
      cotidiano: {
        escenario: "Mezclar cloro comercial (hipoclorito de sodio) con ácido muriático (ácido clorhídrico) o vinagre en el inodoro para 'desmanchar más rápido'.",
        peligro: "Reacción química que libera gas cloro (Cl2) y cloraminas altamente tóxicas.",
        riesgo: "Espasmo bronquial, tos incontrolable, quemadura de vías respiratorias, asfixia aguda e intoxicación grave en el baño.",
        solucionCorrecta: [
          "NUNCA combinar productos de limpieza: el cloro solo se mezcla con agua limpia fría.",
          "Mantener la ventana del baño y la puerta abiertas durante el aseo.",
          "Leer las etiquetas del fabricante donde expresamente prohíben mezclas químicas caseras.",
          "Enjuagar con abundante agua antes de aplicar un producto distinto."
        ]
      },
      moraleja: "Mezclar cloro con ácido muriático crea gas mostaza o gas cloro, las mismas armas químicas de la Primera Guerra Mundial. ¡Química básica para salvar vidas!"
    },
    {
      id: "caso-4",
      titulo: "Energía Eléctrica: Mantenimiento 480V con LOTO vs. Reparar Enchufe en Casa",
      categoria: "Bloqueo de Energía y Choque Eléctrico",
      icono: "⚡",
      laboral: {
        escenario: "Cambio de contactor en tablero de fuerza industrial de 480 voltios trifásico (Norma SY-S-04).",
        peligro: "Presencia de energía eléctrica remanente, riesgo de relámpago de arco (Arc Flash).",
        riesgo: "Fibrilación ventricular fatal, quemaduras por arco a 19.000°C e impacto de onda expansiva.",
        controlesNormativos: [
          "Permiso de trabajo eléctrico + Protocolo LOTO (Bloqueo y Etiquetado).",
          "Desconexión del interruptor principal, candado rojo del electricista y tarjeta identificada.",
          "Comprobación de Ausencia de Tensión con multímetro calibrado (Test - Verificar - Test).",
          "Puesta a tierra temporal de las fases.",
          "Uso de traje y careta anti-arco eléctrico clasificado según NFPA 70E y guantes dieléctricos Clase 00."
        ]
      },
      cotidiano: {
        escenario: "Desarmar un tomacorriente en la cocina con un destornillador común sin apagar la llave térmica del tablero principal.",
        peligro: "Línea viva de 110V/220V expuesta y herramienta sin aislamiento dieléctrico certificado.",
        riesgo: "Descarga eléctrica que atraviesa el cuerpo hacia el piso húmedo, tetanización muscular e incendio.",
        solucionCorrecta: [
          "Bajar el interruptor termomagnético correspondiente en el tablero de la casa y verificar con un buscapolo que no haya corriente.",
          "Avisar a toda la familia que no toquen el tablero (etiquetado casero).",
          "Usar herramientas con mango aislado de 1.000 voltios.",
          "Trabajar con calzado con suela de goma seca y manos completamente secas."
        ]
      },
      moraleja: "El protocolo LOTO en la industria equivale a bajar el breaker y pegar una cinta adhesiva que diga 'NO SUBIR, REPARANDO' en casa."
    }
  ],

  faqs: [
    {
      pregunta: "¿Cuál es la diferencia exacta entre la norma SY-S-04 y la YR-S-17?",
      respuesta: "La norma **SY-S-04** (o SI-S-04) es el estándar rector para la **autorización y gestión de Permisos de Trabajo** (en frío, caliente y certificados de apoyo). Establece los requisitos legales y operacionales que deben cumplir las instalaciones y contratistas para permitir que una obra inicie. Por su parte, la **YR-S-17** (o IR-S-17) es la metodología técnica para elaborar el **Análisis de Riesgos en el Trabajo (ART)**, es decir, el desglose paso a paso de la actividad para identificar peligros y fijar controles específicos. En la práctica venezolana, el ART (YR-S-17) es el anexo técnico obligatorio para poder emitir el Permiso de Trabajo (SY-S-04)."
    },
    {
      pregunta: "¿Quién tiene la autoridad de suspender un trabajo si detecta peligro inminente?",
      respuesta: "Según el **Artículo 53 de la LOPCYMAT** y las normas **SY-S-04 y YR-S-17**, **CUALQUIER TRABAJADOR** tiene el derecho legal y la obligación ética de suspender o negarse a realizar un trabajo si observa una condición de peligro inminente que atente contra su vida o la de sus compañeros, sin sufrir represalias ni descuentos salariales. Asimismo, los Delegados de Prevención, Inspectores SIAHO y Custodios de la Instalación tienen potestad inmediata de detener las labores."
    },
    {
      pregunta: "¿Por qué el Equipo de Protección Personal (EPP) es la última barrera de control?",
      respuesta: "Porque el EPP **NO elimina el peligro ni reduce el riesgo**, únicamente crea una barrera física entre el peligro y el cuerpo del trabajador. Si el EPP falla, está defectuoso, se rompe o se usa de manera incorrecta, el trabajador recibe el 100% de la energía destructiva del peligro. Por mandato de la LOPCYMAT y la norma técnica internacional, siempre se debe priorizar la Eliminación, Sustitución y Controles de Ingeniería antes de recurrir al EPP."
    },
    {
      pregunta: "¿Cuánto tiempo de vigencia tiene un Permiso de Trabajo según SY-S-04?",
      respuesta: "Un Permiso de Trabajo ordinario tiene una validez máxima correspondiente al **turno de trabajo diario del emisor y receptor (usualmente 8 a 12 horas)**. Si el turno culmina o cambia el supervisor o custodio, el permiso debe ser revalidado o emitirse uno nuevo previa inspección del sitio. Si las condiciones meteorológicas u operativas cambian bruscamente (ej: lluvia fuerte, escape de gas no previsto), el permiso queda automáticamente suspendido."
    },
    {
      pregunta: "¿Cuáles son los parámetros seguros de la atmósfera para ingresar a un espacio confinado?",
      respuesta: "Para autorizar el ingreso mediante el Certificado de Espacios Confinados (anexo a SY-S-04 y COVENIN 3153): \n1. **Oxígeno (O2):** Entre 19.5% y 21.4% en volumen. Menos de 19.5% produce asfixia rápida; más de 23.5% enriquece la atmósfera y crea riesgo violento de combustión espontánea.\n2. **Gases Combustibles / Explosivos (LEL):** Debe ser estrictamente **0% LEL** (Límite Inferior de Explosividad) para trabajos en caliente y nunca superar el 10% para ingreso momentáneo.\n3. **Monóxido de Carbono (CO):** Menor a 25 ppm (o según límite umbral TLV).\n4. **Ácido Sulfhídrico (H2S):** Menor a 10 ppm (en Venezuela el límite de acción preventivo suele fijarse en 5 ppm o 0 ppm en petroleras)."
    },
    {
      pregunta: "¿Qué es el Comité de Seguridad y Salud Laboral (CSSL) y cómo se compone?",
      respuesta: "Según los **Artículos 46 al 50 de la LOPCYMAT y la Norma COVENIN 2270**, el CSSL es un órgano paritario y colegiado destinado a la consulta regular y periódica de las políticas de prevención de accidentes. Se conforma por un número idéntico de **Delegados de Prevención** (electos democráticamente por los trabajadores) y **Representantes del Patrono** (designados por la empresa). Deben reunirse al menos una vez al mes y registrar sus actas ante el INPSASEL."
    }
  ],

  glosario: [
    { termino: "ART (Análisis de Riesgos en el Trabajo)", definicion: "Metodología sistemática normada por IR-S-17 para fragmentar una tarea en pasos ordenados, identificar peligros y fijar barreras de control antes de ejecutar." },
    { termino: "Acto Inseguro (Acto Subestándar)", definicion: "Toda acción humana que desobedece un procedimiento, norma o buena práctica de seguridad, incrementando la probabilidad de un accidente." },
    { termino: "Condición Insegura (Condición Subestándar)", definicion: "Cualquier estado físico, mecánico o ambiental del entorno laboral que no cumple con los estándares mínimos de seguridad y representa peligro." },
    { termino: "INPSASEL", definicion: "Instituto Nacional de Prevención, Salud y Seguridad Laborales de Venezuela. Órgano fiscalizador y rector en materia de salud ocupacional." },
    { termino: "LOPCYMAT", definicion: "Ley Orgánica de Prevención, Condiciones y Medio Ambiente de Trabajo. Ley madre venezolana para la protección integral de la clase trabajadora." },
    { termino: "LOTO (Lock Out / Tag Out)", definicion: "Bloqueo mecánico y etiquetado visible de interruptores, válvulas y fuentes de energía para impedir su reactivación accidental durante mantenimientos." },
    { termino: "Permiso en Caliente", definicion: "Autorización escrita bajo norma SY-S-04 para trabajos que producen llamas abiertas, chispas o calor capaz de inflamar atmósferas combustibles." },
    { termino: "Permiso en Frío", definicion: "Autorización escrita bajo norma SY-S-04 para actividades mecánicas, civiles o instrumentales que no generan fuentes térmicas de ignición." },
    { termino: "Vigía de Fuego", definicion: "Persona entrenada y designada para observar de forma continua los trabajos en caliente, equipada con extintor y atenta a cualquier chispa o conato." }
  ],

  // BANCO DE PREGUNTAS EXHAUSTIVO PARA EL EXAMEN ANTI-TRAMPA
  preguntasExamen: [
    {
      id: 1,
      modulo: "modulo-yr-s17",
      tema: "Metodología ART (YR-S-17)",
      pregunta: "¿Cuál es el primer paso obligatorio para elaborar un Análisis de Riesgos en el Trabajo (ART) según la norma técnica YR-S-17?",
      opciones: [
        "Seleccionar inmediatamente los Equipos de Protección Personal (EPP).",
        "Dividir y desglosar la tarea cronológicamente en pasos lógicos y secuenciales.",
        "Medir la concentración de oxígeno con el detector de gases portátil.",
        "Solicitar la firma final del Gerente General de la empresa contratista."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Ysabel Carolina, seleccionar el EPP es la ÚLTIMA etapa de la jerarquía de controles, no el primer paso. No puedes elegir un equipo de protección si antes no sabes qué actividad harás ni qué peligros existen.",
        2: "La medición de gases es un control específico para espacios confinados o áreas clasificadas, no el primer paso de estructuración metodológica del ART.",
        3: "La firma de la gerencia se realiza una vez que el documento está completamente redactado, evaluado y revisado; nunca antes de concebir el análisis."
      },
      explicacionCorrecta: "¡Excelente Ysabel Carolina! Según la norma YR-S-17 / IR-S-17, el primer paso indiscutible del ART es el **desglose cronológico de la tarea en pasos ordenados**. Sin este desglose, es imposible mapear los peligros específicos de cada subactividad."
    },
    {
      id: 2,
      modulo: "modulo-sy-s04",
      tema: "Permisos de Trabajo (SY-S-04)",
      pregunta: "Bajo la norma SY-S-04, ¿cuál de las siguientes actividades exige obligatoriamente un 'Permiso de Trabajo en Caliente'?",
      opciones: [
        "Ajuste manual de pernos en una brida de agua potable despresurizada.",
        "Corte de tubería metálica utilizando un disco abrasivo (esmeril / amoladora).",
        "Pintura con brocha y brocal en la fachada administrativa de la sede.",
        "Inspección visual con linterna intrínsecamente segura dentro de un almacén."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Ajustar pernos con llave de mano en agua despresurizada no genera chispas ni fuentes de ignición térmica; califica para permiso en frío o trabajo rutinario.",
        2: "Pintar con brocha manual no genera calor ni ignición abierta, por lo que requeriría permiso en frío y control de vapores, no permiso en caliente.",
        3: "La inspección visual con linterna a prueba de explosión no constituye fuente de ignición."
      },
      explicacionCorrecta: "¡Muy bien Ysabel Carolina! El uso de esmeril o amoladora genera **llamas y chispas de fricción de alta temperatura** que pueden detonar polvos o gases inflamables. Por ende, la norma SY-S-04 exige **Permiso en Caliente con prueba de gas al 0% LEL y vigía de fuego presente**."
    },
    {
      id: 3,
      modulo: "modulo-marco-legal",
      tema: "LOPCYMAT y Derechos",
      pregunta: "¿Qué derecho asiste a un trabajador según el Artículo 53 de la LOPCYMAT si descubre un peligro inminente para su vida?",
      opciones: [
        "Esperar a que termine el turno para formular la denuncia por escrito ante la inspectoría.",
        "Paralizar de inmediato la tarea y rehusarse a laborar sin temor a sanción ni despido.",
        "Continuar trabajando pero solicitando un bono salarial adicional por riesgo extremo.",
        "Prestar sus equipos de protección a su compañero para que él termine la actividad peligrosa."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Esperar a terminar el turno ante un peligro inminente puede costarle la vida al trabajador. El peligro inminente requiere acción inmediata de salvaguarda.",
        2: "La ley venezolana prohíbe taxativamente la monetización del riesgo laboral. La vida y la integridad física no se compran con bonos compensatorios.",
        3: "El EPP es de asignación personal e intransferible, y transferir una tarea de peligro mortal a un compañero viola la ética y la LOPCYMAT."
      },
      explicacionCorrecta: "¡Correcto Ysabel Carolina! El **Artículo 53 de la LOPCYMAT** consagra el principio de auto-protección: el trabajador puede negarse a laborar e interrumpir su faena cuando racionalmente considere que existe un peligro inminente para su salud o vida."
    },
    {
      id: 4,
      modulo: "modulo-sy-s04",
      tema: "Espacios Confinados (SY-S-04)",
      pregunta: "En una medición atmosférica previa a la entrada a un espacio confinado según norma venezolana, ¿cuál es el rango admisible de Oxígeno (O₂)?",
      opciones: [
        "Entre 12.0% y 15.0% de volumen.",
        "Entre 19.5% y 21.4% de volumen.",
        "Cualquier valor superior al 28.0% de volumen.",
        "Exactamente 50% de oxígeno enriquecido."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Un nivel de oxígeno entre 12% y 15% genera mareos inmediatos, pérdida de conocimiento y muerte por hipoxia en pocos minutos.",
        2: "Valores por encima de 23.5% enriquecen la atmósfera de forma crítica, haciendo que cualquier ropa o grasa arda espontáneamente con violencia explosiva.",
        3: "El 50% de oxígeno causaría hiperoxia tóxica y un peligro descomunal de incendio inmediato."
      },
      explicacionCorrecta: "¡Extraordinario Ysabel Carolina! El rango legal y seguro establecido en las normas técnicas (SY-S-04, COVENIN 3153 y estándares internacionales) es de **19.5% a 21.4% de O₂**. Valores fuera de este umbral prohíben la entrada del personal."
    },
    {
      id: 5,
      modulo: "modulo-yr-s17",
      tema: "Jerarquía de Controles",
      pregunta: "Dentro de la Jerarquía de Controles estipulada en la LOPCYMAT y la norma YR-S-17, ¿cuál es el nivel más efectivo de control?",
      opciones: [
        "Equipos de Protección Personal (Casco, Guantes, Botas).",
        "Controles Administrativos (Charlas de 5 minutos y señalización).",
        "Eliminación física del peligro en su origen.",
        "Controles de ingeniería mediante alarmas sonoras."
      ],
      correcta: 2,
      retroalimentacionIncorrecta: {
        0: "Los EPP se ubican en el escalón más bajo de efectividad (última barrera). Dependen del comportamiento humano y si fallan, ocurre el accidente.",
        1: "Los controles administrativos ayudan a organizar el trabajo, pero el peligro sigue existiendo en el ambiente.",
        3: "Los controles de ingeniería son muy efectivos aislando el peligro, pero la eliminación física es la que erradica el peligro por completo."
      },
      explicacionCorrecta: "¡Preciso Ysabel Carolina! La **Eliminación del peligro** es la cúspide de la pirámide de controles. Al suprimir la fuente peligrosa (por ejemplo, automatizar un proceso o eliminar un químico tóxico), el riesgo desaparece de raíz."
    },
    {
      id: 6,
      modulo: "modulo-matriz-riesgo",
      tema: "Conceptos Fundamentales",
      pregunta: "¿Cuál de las siguientes afirmaciones describe de manera exacta un 'PELIGRO'?",
      opciones: [
        "La probabilidad estadística de que una persona sufra un traumatismo en un año.",
        "Una fuente, situación o acto con potencial intrínseco de causar daño o lesión.",
        "El costo financiero que paga el seguro luego de ocurrido un siniestro industrial.",
        "El certificado médico emitido por el médico ocupacional tras un examen pre-empleo."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "La probabilidad combinada con la severidad define al RIESGO, no al peligro.",
        2: "El costo financiero es una consecuencia económica o pérdida posterior, no la definición técnica de peligro.",
        3: "El certificado de aptitud médica es un requisito de salud ocupacional."
      },
      explicacionCorrecta: "¡Brillante Ysabel Carolina! El **Peligro** es la característica o condición intrínseca (el químico corrosivo, la altura, el cable eléctrico, la máquina en movimiento) que tiene la capacidad innata de producir un daño."
    },
    {
      id: 7,
      modulo: "modulo-sy-s04",
      tema: "Protocolo LOTO",
      pregunta: "¿Qué significa el procedimiento LOTO aplicado en trabajos de mantenimiento eléctrico/mecánico según la norma SY-S-04?",
      opciones: [
        "Lavar y Ordenar Tareas Operacionales antes de retirarse.",
        "Bloqueo y Etiquetado (Lock Out / Tag Out) de fuentes de energía con candados y tarjetas personales.",
        "Límite Operativo de Tolerancia de Oxígeno en calderas de vapor.",
        "Listado Oficial de Trabajadores Ocupados en obras civiles."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "El orden y la limpieza son vitales (método de las 5S), pero no es el significado ni la finalidad del protocolo LOTO.",
        2: "LOTO no es una sigla para límites de oxígeno; se refiere al aislamiento físico de energía cero.",
        3: "LOTO es un procedimiento de aislamiento de energías peligrosas, no una nómina de personal."
      },
      explicacionCorrecta: "¡Así se responde Ysabel Carolina! **LOTO (Lockout / Tagout)** es el procedimiento mandatario donde cada técnico coloca su propio candado y tarjeta personal en interruptores o válvulas para certificar el estado de energía cero."
    },
    {
      id: 8,
      modulo: "modulo-marco-legal",
      tema: "Accidentes Laborales e INPSASEL",
      pregunta: "Según la LOPCYMAT y la NT-01-2008, ¿en qué plazo debe informarse inmediatamente la ocurrencia de un accidente de trabajo a INPSASEL?",
      opciones: [
        "Dentro de los primeros 60 minutos (1 hora) posteriores a su ocurrencia vía telemática/fax.",
        "Al finalizar el mes hábil en el informe administrativo de contabilidad.",
        "En un plazo improrrogable de 15 días continuos.",
        "Solo si el trabajador accidentado decide demandar formalmente ante los tribunales laborales."
      ],
      correcta: 0,
      retroalimentacionIncorrecta: {
        1: "Esperar al final de mes acarrea multas severas de hasta 100 UT por trabajador y sanciones penales por ocultamiento de accidente.",
        2: "15 días es extemporáneo. La formalización del informe detallado se realiza dentro de las 24 horas siguientes, pero la notificación inicial es inmediata.",
        3: "Todo accidente de trabajo debe notificarse con carácter de obligatoriedad pública, independientemente de cualquier litigio judicial."
      },
      explicacionCorrecta: "¡Excelente conocimiento normativo Ysabel Carolina! La LOPCYMAT y su Reglamento estipulan que el patrono debe reportar el accidente **dentro de los primeros 60 minutos** de ocurrido para activar la investigación oficial."
    },
    {
      id: 9,
      modulo: "modulo-yr-s17",
      tema: "Divulgación y Campo",
      pregunta: "Durante la ejecución de un trabajo amparado por un ART (norma YR-S-17), si se incorpora un nuevo trabajador a media jornada, ¿qué se debe hacer?",
      opciones: [
        "Dejarlo trabajar de inmediato y pedirle que firme la planilla al final del día si no ocurre ningún accidente.",
        "Detener brevemente su labor, divulgarle el ART en el sitio, asegurarse de que comprenda los peligros y registrar su firma antes de empezar.",
        "Prohibirle totalmente el ingreso a la planta durante toda la semana por no haber llegado temprano.",
        "Indicarle que solo observe a sus compañeros sin prestarle ninguna herramienta."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Ysabel Carolina, permitir que alguien trabaje sin conocer los riesgos es causal de accidente grave y viola el Art. 53 de LOPCYMAT. Firmar al final no previene el daño.",
        2: "El trabajador sí puede incorporarse a sus labores siempre y cuando reciba la inducción y divulgación correspondiente del ART.",
        3: "No se trata de marginarlo, sino de integrarlo formal y responsablemente bajo el procedimiento de trabajo seguro."
      },
      explicacionCorrecta: "¡Impecable Ysabel Carolina! Ningún trabajador puede incorporarse a una tarea sin haber recibido la **inducción específica del ART** para esa tarea puntual y haber estampado su firma que certifica su comprensión."
    },
    {
      id: 10,
      modulo: "modulo-sy-s04",
      tema: "Inspecciones de Seguridad (SY-S-04)",
      pregunta: "Si durante un trabajo en caliente con permiso vigente bajo norma SY-S-04 se desata un aguacero repentino con viento fuerte, ¿cuál es la acción debida?",
      opciones: [
        "Acelerar la soldadura para terminar antes de que el agua moje por completo el transformador.",
        "Suspender inmediatamente la actividad, desconectar equipos de ignición y reevaluar las condiciones.",
        "Tapar al soldador con un cartón o plástico común y permitirle seguir soldando.",
        "Pedir al vigía de fuego que se retire a resguardarse mientras el soldador continúa solo."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Acelerar el trabajo bajo la lluvia genera riesgo altísimo de electrocución con el portaelectrodos y choque térmico violento.",
        2: "El cartón o plástico convencional puede inflamarse o no aislar el peligro de conductividad eléctrica del agua.",
        3: "Si el vigía de fuego se retira, el trabajo en caliente pierde su condición de validez normativa y debe detenerse de inmediato."
      },
      explicacionCorrecta: "¡Totalmente acertada Ysabel Carolina! Cualquier cambio meteorológico o ambiental sustancial **invalida temporalmente las condiciones del permiso de trabajo**. La labor se suspende de inmediato hasta que se restaure la seguridad."
    },
    {
      id: 11,
      modulo: "modulo-matriz-riesgo",
      tema: "Matriz RAM de Riesgos",
      pregunta: "¿Qué significa que un riesgo se ubique en la zona 'ROJA' de la Matriz de Riesgo Institucional?",
      opciones: [
        "Que el riesgo es aceptable y la cuadrilla puede laborar sin supervisión.",
        "Que el riesgo es INACEPTABLE / CRÍTICO y la actividad no puede iniciarse hasta implantar controles efectivos.",
        "Que solo se requiere que los trabajadores utilicen doble par de guantes de carnaza.",
        "Que la tarea solo se puede hacer en horario nocturno para que nadie la vea."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "La zona roja representa la máxima severidad y probabilidad de daño; jamás es un riesgo aceptable.",
        2: "Duplicar los guantes no mitiga un riesgo crítico multidimensional de alta energía.",
        3: "El horario nocturno suele incrementar los peligros de visibilidad y fatiga; no soluciona el riesgo intrínseco."
      },
      explicacionCorrecta: "¡Muy bien Ysabel Carolina! En cualquier matriz de riesgos (5x5, RAM o cuantitativa), la zona roja dictamina que el trabajo **ESTÁ TERMINANTEMENTE DETENIDO O PROHIBIDO** hasta aplicar barreras de ingeniería o rediseño que bajen el nivel a un umbral tolerable."
    },
    {
      id: 12,
      modulo: "modulo-marco-legal",
      tema: "COVENIN 187 - Código de Colores",
      pregunta: "Según la norma técnica venezolana COVENIN 187, ¿qué significado tiene el color AMARILLO en la señalización de seguridad?",
      opciones: [
        "Parada de emergencia, prohibición y ubicación de equipos contra incendio.",
        "Precaución, advertencia de riesgo físico o peligro de tropiezos y choques.",
        "Obligatoriedad de uso de equipo de protección personal específico.",
        "Condición segura, primeros auxilios y rutas de evacuación rápida."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "El color para parada de emergencia y combate de incendios es el ROJO.",
        2: "El color que denota obligatoriedad (por ejemplo, 'Uso obligatorio de casco') es el AZUL.",
        3: "El color para salidas de emergencia y puestos de primeros auxilios es el VERDE."
      },
      explicacionCorrecta: "¡Exacto Ysabel Carolina! De acuerdo a la norma COVENIN 187: Rojo = Prohibición/Fuego; **Amarillo = Precaución / Advertencia de Peligro**; Azul = Obligación; Verde = Seguridad / Rutas de Evacuación."
    },
    {
      id: 13,
      modulo: "modulo-sy-s04",
      tema: "Izamiento de Cargas",
      pregunta: "Bajo la norma técnica SY-S-04, ¿en qué condición un izamiento de carga se considera técnicamente 'CRÍTICO'?",
      opciones: [
        "Cuando la carga supera el 80% de la capacidad neta de la grúa o pasa por encima de líneas presurizadas.",
        "Siempre que la carga sea de color negro o pese más de 10 kilogramos.",
        "Únicamente si el operador de la grúa no ha almorzado.",
        "Solo cuando se realiza en días domingo o feriados."
      ],
      correcta: 0,
      retroalimentacionIncorrecta: {
        1: "El color de la carga no influye en el cálculo de ingeniería de izamiento, y 10 kg es carga manual ligera.",
        2: "La alimentación del operador atañe a pausas activas, pero el cálculo técnico de izamiento crítico es una variable física y operacional estricta.",
        3: "Los izamientos críticos se definen por la física del izamiento y la vulnerabilidad del entorno, no por el calendario civil."
      },
      explicacionCorrecta: "¡Excelente Ysabel Carolina! Un izamiento es crítico cuando excede el **80% de la tabla de carga de la grúa**, involucra dos o más grúas en tándem, sobrevuela instalaciones activas de hidrocarburos o se realiza en espacios con margen de maniobra reducido."
    },
    {
      id: 14,
      modulo: "modulo-yr-s17",
      tema: "Casos Cotidianos vs Laborales",
      pregunta: "En la vida cotidiana, mezclar cloro comercial con ácido muriático para lavar el baño representa un grave error por la generación de:",
      opciones: [
        "Gas argón inerte que aromatiza el ambiente.",
        "Gas cloro (Cl₂) altamente irritante y tóxico para los pulmones.",
        "Ozono puro beneficioso para las defensas del cuerpo.",
        "Dióxido de carbono inofensivo que solo produce burbujas."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "El argón es un gas noble inerte usado en soldadura TIG; la mezcla produce cloro gaseoso sumamente agresivo.",
        2: "No genera ozono; la reacción química entre hipoclorito y ácido clorhídrico libera gas cloro corrosivo.",
        3: "No es una efervescencia inocua; la inhalación produce espasmo de glotis, quemaduras pulmonares y asfixia inmediata."
      },
      explicacionCorrecta: "¡Tal cual Ysabel Carolina! Esta mezcla casera tan frecuente produce **gas cloro**, un agente químico sofocante que lesiona de inmediato las mucosas respiratorias. ¡La seguridad química empieza en nuestro propio hogar!"
    },
    {
      id: 15,
      modulo: "modulo-sy-s04",
      tema: "Excavaciones y Zanjas",
      pregunta: "A partir de qué profundidad una excavación o zanja requiere obligatoriamente entibado (apuntalamiento) o banqueo según las normas de seguridad venezolanas:",
      opciones: [
        "A partir de 0.20 metros (20 centímetros).",
        "A partir de 1.20 a 1.50 metros de profundidad.",
        "Solo si supera los 15 metros de profundidad.",
        "Nunca se requiere entibado en suelos venezolanos."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "A 20 cm es una zanja superficial sin riesgo de sepultamiento de una persona.",
        2: "Esperar a 15 metros sería letal: a partir de 1.20 metros el peso de la tierra puede aplastar el tórax de un trabajador e impedir su respiración.",
        3: "La norma venezolana e internacional exige estrictamente protección contra derrumbes en zanjas a partir de 1.20 m."
      },
      explicacionCorrecta: "¡Muy bien Ysabel Carolina! Según las normas de excavación (PDVSA y COVENIN 2245), las zanjas con profundidad igual o mayor a **1.20 metros** deben contar con talud adecuado, entibado de madera/metal o pantallas de protección para evitar sepultamientos."
    },
    {
      id: 16,
      modulo: "modulo-yr-s17",
      tema: "Inspección Pre-Uso de Herramientas",
      pregunta: "¿Por qué en el ART (YR-S-17) se prohíbe terminantemente el uso de 'herramientas de fabricación casera o hechizas'?",
      opciones: [
        "Porque carecen de pruebas de resistencia mecánica certificadas y fallan intempestivamente provocando lesiones graves.",
        "Porque no tienen el logotipo de la marca pintado con barniz brillante.",
        "Porque el sindicato exige comprar únicamente herramientas importadas de lujo.",
        "Porque hacen que la cuadrilla trabaje demasiado rápido."
      ],
      correcta: 0,
      retroalimentacionIncorrecta: {
        1: "No es una cuestión estética o de logotipo; se trata de integridad estructural y seguridad de vida.",
        2: "No obedece a caprichos comerciales, sino a estándares de control de calidad metalúrgica (ASTM / COVENIN).",
        3: "Las herramientas hechizas no aumentan la productividad, al contrario, provocan accidentes incapacitantes y retrasos operacionales."
      },
      explicacionCorrecta: "¡Totalmente acertada Ysabel Carolina! Las herramientas 'hechizas' (llaves soldadas, cinceles sin templar, extensiones improvisadas) sufren **rotura frágil súbita**, proyectando esquirlas metálicas de alta velocidad a los ojos y extremidades de los trabajadores."
    },
    {
      id: 17,
      modulo: "modulo-marco-legal",
      tema: "Delegados de Prevención",
      pregunta: "¿Cómo son elegidos los Delegados y Delegadas de Prevención según la LOPCYMAT?",
      opciones: [
        "Son designados a dedo por la gerencia de Recursos Humanos de la empresa.",
        "Son electos directamente por las y los trabajadores mediante sufragio universal, directo y secreto.",
        "Son asignados por sorteo público en la televisión nacional.",
        "Son contratados a través de una agencia de empleo externa temporal."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "El patrono no puede imponer a los delegados de prevención; el patrono solo designa a sus propios representantes en el comité paritario.",
        2: "No es una lotería; es un proceso electoral formal y democrático regulado por INPSASEL en el centro de trabajo.",
        3: "Deben ser trabajadores activos pertenecientes a la nómina del centro de trabajo."
      },
      explicacionCorrecta: "¡Así es Ysabel Carolina! Los Delegados de Prevención son electos de manera **democrática, directa y secreta por los propios trabajadores**, garantizando su autonomía e inamovilidad laboral durante su gestión gremial preventiva."
    },
    {
      id: 18,
      modulo: "modulo-matriz-riesgo",
      tema: "Matriz de Riesgo y Tolerabilidad",
      pregunta: "Si en un Análisis de Riesgos en el Trabajo la probabilidad de caída de altura es ALTA y la consecuencia es FATAL, ¿qué nivel de riesgo arroja la matriz?",
      opciones: [
        "Riesgo Menor o Despreciable.",
        "Riesgo Crítico / No Tolerable (Nivel Rojo).",
        "Riesgo Aceptable con música ambiental relajante.",
        "Riesgo Inexistente porque la persona tiene experiencia."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Una caída mortal jamás puede ser despreciable; es el extremo más alto de severidad humana.",
        2: "La música ambiental no modifica la física de una caída mortal a distinto nivel.",
        3: "La experiencia del trabajador no anula las leyes de la física ni los peligros graves no controlados."
      },
      explicacionCorrecta: "¡Brillante deducción Ysabel Carolina! La combinación de **Alta Probabilidad y Consecuencia Fatal** se ubica en el cuadrante de **Riesgo Crítico / Rojo**, exigiendo la suspensión total de la labor hasta diseñar controles físicos duros."
    },
    {
      id: 19,
      modulo: "modulo-sy-s04",
      tema: "Vigía de Fuego",
      pregunta: "¿Cuál es la función obligatoria del 'Vigía de Fuego' al concluir un trabajo en caliente bajo norma SY-S-04?",
      opciones: [
        "Irse a descansar inmediatamente apenas se apaga la máquina de soldar.",
        "Permanecer en el sitio inspeccionando durante al menos 30 minutos continuos para verificar que no queden rescoldos ni conatos de ignición latentes.",
        "Encender una fogata controlada para verificar la dirección del viento.",
        "Entregar el extintor al primer transeúnte que pase por la calle."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Retirarse inmediatamente es la causa principal de incendios diferidos en plantas industriales, cuando una chispa escondida enciende material combustible horas después.",
        2: "Encender fuego en un área industrial está estrictamente prohibido y causaría una emergencia mayor.",
        3: "El equipo contra incendio debe permanecer operativo y custodiado por personal calificado."
      },
      explicacionCorrecta: "¡Impresionante agudeza Ysabel Carolina! La norma técnica SY-S-04 y la NFPA 51B exigen que el vigía de fuego permanezca **al menos 30 minutos después de concluido el trabajo en caliente** para constatar la ausencia de brasas o chispas con combustión latente."
    },
    {
      id: 20,
      modulo: "modulo-marco-legal",
      tema: "Programa de Seguridad y Salud en el Trabajo",
      pregunta: "Bajo la Norma Técnica NT-01-2008, ¿cada cuánto tiempo debe someterse a revisión periódica el Programa de Seguridad y Salud en el Trabajo (PSST)?",
      opciones: [
        "Nunca, una vez redactado es eterno y no se cambia.",
        "Al menos una vez al año (anualmente) o cada vez que ocurran modificaciones sustanciales en los procesos de trabajo.",
        "Cada 25 años coincidiendo con las bodas de plata de la empresa.",
        "Únicamente cuando ocurra una fatalidad en la empresa."
      ],
      correcta: 1,
      retroalimentacionIncorrecta: {
        0: "Los procesos, tecnologías y sustancias químicas cambian constantemente; un programa estático es un programa inútil.",
        2: "25 años es absurdo en materia de prevención donde las normas evolucionan continuamente.",
        3: "La prevención busca evitar la fatalidad, no esperar a que alguien muera para actualizar un plan."
      },
      explicacionCorrecta: "¡Perfecto Ysabel Carolina! La Norma Técnica NT-01-2008 exige que el PSST sea evaluado y actualizado **al menos una vez al año** con la participación activa del Comité de Seguridad y Salud Laboral y los trabajadores."
    }
  ]
};

// Exponer globalmente
window.SIY_DATA = SIY_DATA;
