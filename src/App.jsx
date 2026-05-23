import React, { useState, useRef } from 'react';

function App() {
  const [pasoActivo, setPasoActivo] = useState(1);
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  const [feedback, setFeedback] = useState("");

  const geniallyRef = useRef(null);
  const irAGenially = () => geniallyRef.current?.scrollIntoView({ behavior: 'smooth' });

  const pasosData = {
    1: { tit: "1. Identificación del Problema", desc: "Determinamos que el principal problema en el Valle de Cocora es el impacto antrópico descontrolado. Específicamente, identificamos tres focos críticos: la destrucción de plántulas de Palma de Cera por la ganadería extensiva, la contaminación hídrica del Río Quindío por el turismo masivo y la pérdida del hábitat del Loro Orejiamarillo por la deforestación ilegal." },
    2: { tit: "2. Investigación y Recopilación", desc: "Investigamos datos biológicos y ambientales de la región. Recopilamos información sobre el ciclo de vida de la Ceroxylon quindiuense (Palma de Cera), el estado de peligro crítico del Loro Orejiamarillo y el nuevo código de colores para la separación de residuos en Colombia. También estudiamos cómo la gamificación en Genially ayuda a retener información en la comunidad." },
    3: { tit: "3. Búsqueda de Alternativas", desc: "Planteamos diferentes opciones para concientizar sobre el problema: hacer un ensayo escrito, diseñar una infografía estática o programar un simulador de juego interactivo con dilemas reales. Evaluamos que el software interactivo era la mejor alternativa de ingeniería para generar un impacto real y dinámico en los usuarios." },
    4: { tit: "4. Selección de la Solución Óptima", desc: "Elegimos desarrollar el videojuego educativo 'Misión Cocora' dividiéndolo en misiones específicas basadas en retos reales. Seleccionamos Genially como plataforma tecnológica por su capacidad para integrar múltiples herramientas multimedia de forma ágil (sistemas de arrastrar y soltar, identificación por ondas de audio, y lógica de toma de decisiones bajo restricciones ambientales)." },
    5: { tit: "5. Diseño y Modelado", desc: "Diseñamos un mapa de navegación interactivo que simula los sectores afectados del Valle. Estructuramos el flujo lógico de las misiones: la Misión 1 modela el dilema ganadero y los sistemas silvopastoriles mediante opción múltiple; la Misión 2 implementa un sensor de monitoreo acústico; la Misión 3 simula una estación tecnológica de clasificación de 12 residuos hídricos; y la Misión 4 evalúa la simbiosis biológica con verdadero o falso." },
    6: { tit: "6. Pruebas y Corrección", desc: "Sometimos el simulador a pruebas de usuario en un entorno de pruebas real con diferentes personas (incluyendo compañeros de equipo y familiares). Evaluamos la jugabilidad, el tiempo de respuesta de los botones y la claridad de las instrucciones. Gracias a esto, detectamos errores en la lógica de las opciones e hicimos los ajustes técnicos pertinentes antes del despliegue final." },
    7: { tit: "7. Distribución y Entrega", desc: "Es la fase actual en la que nos encontramos. Desplegamos el software integrando el código dinámico (iFrame) de Genially dentro de este sitio web. De esta manera, entregamos una plataforma pública y accesible para que la comunidad académica de la Universidad del Quindío y los ciudadanos puedan evaluar el proyecto y aprender a mitigar el impacto ambiental en nuestro departamento." }
  };

  const quizIngenieria = [
    { pregunta: "En la fase de Identificación del Problema (Paso 1), ¿cuál de estos NO es uno de los tres focos críticos detectados?", opciones: ["Contaminación hídrica del Río Quindío", "Extinción masiva de colibríes", "Deforestación ilegal del hábitat del Loro"], correcta: 1, explicacion: "Correcto. Los focos reales fueron ganadería, contaminación del río y pérdida de hábitat por deforestación." },
    { pregunta: "¿Por qué el equipo de ingeniería eligió un software interactivo sobre un ensayo o infografía (Paso 3)?", opciones: ["Porque era la opción más barata", "Por su capacidad de generar un impacto real y dinámico en los usuarios", "Porque no sabían escribir ensayos"], correcta: 1, explicacion: "¡Exacto! El software permite mayor interactividad y retención de información." },
    { pregunta: "¿Qué ventaja técnica principal motivó la selección de Genially (Paso 4)?", opciones: ["Su capacidad para integrar ondas de audio y lógica de decisiones", "Que es una red social", "Que permite imprimir el juego en papel"], correcta: 0, explicacion: "Genially permitió integrar herramientas multimedia complejas de forma ágil para la ingeniería de sistemas." },
    { pregunta: "En el Paso 6 (Pruebas), ¿cuál fue el objetivo principal de evaluar el juego con familiares y compañeros?", opciones: ["Para que vieran que ya terminaron", "Detectar errores en la lógica de las opciones e instrucciones", "Comprobar si el juego era divertido"], correcta: 1, explicacion: "Las pruebas de ingeniería sirven para corregir fallos lógicos y de experiencia de usuario antes del despliegue final." },
    { pregunta: "Según el Paso 7 (Distribución), ¿cuál es el propósito de integrar el iFrame en un sitio web?", opciones: ["Ocultar el código fuente", "Permitir que la comunidad y ciudadanos evalúen y aprendan del proyecto", "Que el juego cargue más rápido"], correcta: 1, explicacion: "La distribución final busca el acceso público para transferir el conocimiento a la comunidad académica." }
  ];

  const handleRespuesta = (idx) => {
    if (idx === quizIngenieria[preguntaActual].correcta) {
      setScore(score + 1);
      setFeedback("✅ " + quizIngenieria[preguntaActual].explicacion);
    } else {
      setFeedback("❌ Respuesta incorrecta. Revisa los pasos del método arriba.");
    }
    setTimeout(() => {
      if (preguntaActual < quizIngenieria.length - 1) {
        setPreguntaActual(preguntaActual + 1);
        setFeedback("");
      } else {
        setQuizFinalizado(true);
      }
    }, 2500);
  };

  return (
    <div style={{ fontFamily: '"Segoe UI", Roboto, sans-serif', backgroundColor: '#14241b', backgroundImage: 'linear-gradient(to bottom, #14241b, #1e392a, #284c38)', color: '#ffffff', margin: 0, minHeight: '100vh', paddingBottom: '60px', scrollBehavior: 'smooth' }}>
      
      <button onClick={irAGenially} style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, backgroundColor: 'rgba(217, 119, 6, 0.85)', color: 'white', border: '1px solid rgba(255,255,255,0.25)', padding: '15px 25px', borderRadius: '50px', fontSize: '1rem', fontWeight: 'bold', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', cursor: 'pointer', backdropFilter: 'blur(10px)', transition: '0.3s' }}>
         Jugar Misión Cocora
      </button>

      <header style={{ background: 'linear-gradient(135deg, #1a3322 0%, #2e5a44 100%)', padding: '80px 20px 140px 20px', textAlign: 'center', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <h1 style={{ fontSize: '3.8rem', margin: 0, letterSpacing: '3px', textTransform: 'uppercase', fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Misión Cocora</h1>
        <div style={{ width: '120px', height: '4px', backgroundColor: '#86efac', margin: '20px auto' }}></div>
        <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto', opacity: 0.9, fontStyle: 'italic' }}>Ingeniería de Sistemas y Computación aplicada a la conservación ambiental.</p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '-60px auto 0 auto', padding: '0 20px' }}>
        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', backdropFilter: 'blur(12px)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', marginBottom: '40px' }}>
          <h2 style={{ color: '#86efac', marginTop: 0, fontSize: '1.8rem' }}>¿Qué es Misión Cocora?</h2>
          <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#e0e0e0', textAlign: 'justify', margin: 0 }}>
            Misión Cocora es un proyecto interactivo desarrollado por estudiantes de Ingeniería de Sistemas y Computación de la Universidad del Quindío. Nuestro objetivo es aplicar metodologías de ingeniería ambiental para mitigar el impacto antrópico que amenaza a la Palma de Cera y al Loro Orejiamarillo.
          </p>
        </section>

        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(12px)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', color: '#86efac', marginBottom: '15px' }}>Aplicación del Método del Ingeniero</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <button key={num} onClick={() => setPasoActivo(num)} style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', backgroundColor: pasoActivo === num ? '#86efac' : 'rgba(255,255,255,0.08)', color: pasoActivo === num ? '#14241b' : '#ffffff', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer', transition: '0.3s' }}>
                {num}
              </button>
            ))}
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '30px', borderRadius: '12px', borderLeft: '5px solid #86efac', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ margin: '0 0 12px 0', color: '#86efac', fontSize: '1.3rem' }}>{pasosData[pasoActivo].tit}</h3>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#e0e0e0', textAlign: 'justify', fontSize: '1.05rem' }}>{pasosData[pasoActivo].desc}</p>
          </div>
        </section>

        {/* EVIDENCIAS DE RECOPILACIÓN CON FUENTES */}
        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(12px)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '40px' }}>
          <h2 style={{ color: '#86efac', marginTop: 0, fontSize: '1.6rem', textAlign: 'center' }}>Datos Estadísticos de Recopilación (Evidencias)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #ef4444', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#ef4444', fontSize: '1.1rem' }}>Tasa de Regeneración Crítica</h4>
                <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6' }}>Menos del <b>1%</b> de las plántulas logran prosperar por la ganadería extensiva.</p>
              </div>
              <div style={{ marginTop: 'auto', backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: '6px', borderRadius: '6px', fontSize: '0.8rem', color: '#fca5a5' }}>
                📍 <b>Fuente:</b> Instituto Humboldt
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #3b82f6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#3b82f6', fontSize: '1.1rem' }}>Dependencia del Hábitat</h4>
                <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6' }}>El Loro Orejiamarillo depende en un <b>100%</b> de las palmas adultas para anidar.</p>
              </div>
              <div style={{ marginTop: 'auto', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '6px', borderRadius: '6px', fontSize: '0.8rem', color: '#93c5fd' }}>
                📍 <b>Fuente:</b> Fundación ProAves
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #10b981', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ margin: '0 0 8px 0', color: '#10b981', fontSize: '1.1rem' }}>Saturación Hídrica</h4>
                <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: '#ccc', lineHeight: '1.6' }}>El turismo masivo triplica residuos en los caudales del Río Quindío.</p>
              </div>
              <div style={{ marginTop: 'auto', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '6px', borderRadius: '6px', fontSize: '0.8rem', color: '#6ee7b7' }}>
                📍 <b>Fuente:</b> CRQ Quindío
              </div>
            </div>
          </div>
        </section>

        {/* QUIZ DE METODOLOGÍA */}
        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.12)', marginBottom: '40px' }}>
          <h2 style={{ textAlign: 'center', color: '#86efac', marginTop: 0 }}>Diagnóstico de ingeniería para la Preservación Ecosistémica.</h2>
          {preguntaActual === null && !quizFinalizado ? (
            <div style={{ textAlign: 'center' }}>
              <button onClick={() => setPreguntaActual(0)} style={{ padding: '15px 40px', backgroundColor: '#86efac', color: '#14241b', border: 'none', borderRadius: '30px', cursor: 'pointer', fontWeight: 'bold' }}>Comenzar diagnóstico</button>
            </div>
          ) : quizFinalizado ? (
            <div style={{ textAlign: 'center' }}>
              <h3>¡Evaluación Completada! Puntaje: {score} / 5</h3>
              <button onClick={() => { setPreguntaActual(null); setQuizFinalizado(false); setScore(0); }} style={{ background: 'none', border: '2px solid #86efac', color: '#86efac', padding: '10px 25px', borderRadius: '20px', cursor: 'pointer' }}>Reiniciar</button>
            </div>
          ) : (
            <div>
              <p style={{ fontWeight: 'bold', color: '#86efac' }}>Pregunta {preguntaActual + 1}: {quizIngenieria[preguntaActual].pregunta}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quizIngenieria[preguntaActual].opciones.map((opt, i) => (
                  <button key={i} onClick={() => handleRespuesta(i)} style={{ padding: '10px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '5px' }}>{opt}</button>
                ))}
              </div>
              {feedback && <p style={{ textAlign: 'center', marginTop: '15px' }}>{feedback}</p>}
            </div>
          )}
        </section>

        <section ref={geniallyRef} style={{ margin: '40px 0' }}>
          <h2 style={{ textAlign: 'center', color: '#86efac' }}>Videojuego Principal: Misión Cocora</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.15)' }}>
            <iframe src="https://view.genially.com/6a0cc172df56a7111f19972e" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} allowFullScreen />
          </div>
        </section>

        {/* REFLEXIÓN Y BIBLIOGRAFÍA */}
        <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.07)', padding: '30px', borderRadius: '16px', marginBottom: '40px' }}>
          <h2 style={{ color: '#86efac' }}>Reflexión Grupal</h2>
          <p>La aplicación estructurada del Método del Ingeniero nos demostró que la ingeniería de Sistemas y Computación va mucho más allá de la simple escritura aislada de lineas de código. Nos enseñó a dimensionar problemas ambientales complejos, investigar variables de ecosistemas frágiles bajo rigor bibliográfico y evaluar alternativas técnicas de forma analítica. Al consolidar ´Misión Cocora´, aprendimos que la gamificación interactiva actúa como un puente tecnológico capaz de concientizar a nuestra comunidad y transferir conocimientos críticos para salvaguardar el patrimonio natural del Quindío.</p>
        </section>

        <section style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '30px', borderRadius: '16px' }}>
          <h3 style={{ color: '#86efac' }}> Referencias Consultadas</h3>
          <ul style={{ color: '#ccc' }}>
            <li><b>Corporación Autónoma Regional del Quindío (CRQ). (2020). Plan de acción cuatrienal 2020-2023: Protegiendo el patrimonio ambiental y más cerca al ciudadano</b> <i> https://www.circasia-quindio.gov.co/Transparencia/BancoDocumentos/PLAN%20ACCION%20CRQ%202020-2023.pdf</i>.</li>
            
            <li><b>Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. (s.f.). Ceroxylon quindiuense. Catálogo de la biodiversidad.</b> <i>https://catalogo.biodiversidad.co/file/5661e5d36752b5394179b666/summary</i>.</li>
           
            <li><b>Fundación ProAves. (s.f.). Conservación del Loro Orejiamarillo. </b> <i>https://proaves.org/blog/conservacion-loro/</i>.</li>
           
            <li><b>Ministerio de Ambiente y Desarrollo Sostenible. (2022). Guía nacional para la adecuada separación de residuos sólidos. </b> <i>https://www.minambiente.gov.co/wp-content/uploads/2022/12/Guia_Residuos-Solidos_Digital.pdf</i>.</li>
          </ul>
        </section>
      </main>

      <footer style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', padding: '60px 20px', textAlign: 'center', marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: '#86efac', fontWeight: 'bold' }}>Universidad del Quindío</p>
        <p>Universidad del Quindío
           Facultad de Ingeniería — Programa de Ingeniería de Sistemas y Computación
           Asignatura: Introducción a la Ingeniería | Primer Semestre</p>
        <div style={{ margin: '20px auto' }}>
          <p>Desarrollado por:</p>
          <p>• Eileen Alexandra Orozco Gómez</p>
          <p>• Jerónimo Gutiérrez Orozco</p>
        </div>
        <p style={{ opacity: 0.5 }}>Armenia, Quindío - 2026</p>
      </footer>
    </div>
  );
}
export default App;