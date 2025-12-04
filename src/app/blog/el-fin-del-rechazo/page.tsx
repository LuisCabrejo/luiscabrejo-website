/**
 * Copyright © 2025 luiscabrejo.com
 * Todos los derechos reservados.
 *
 * Artículo Pilar: El Fin del Rechazo
 * Propósito: Posicionar a Luis Cabrejo como autoridad en Network Marketing + IA
 * Fecha: Diciembre 2025
 */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Cpu, Users, Globe, X, BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
    {children}
  </h2>
);

const PainPoint = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-3 bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
        <div className="text-red-400">{icon}</div>
        <p className="text-slate-300">{text}</p>
    </div>
);

const SolutionPoint = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-start gap-4 py-3">
        <div className="mt-1 text-green-400 bg-green-900/30 p-2 rounded-full">
            {icon}
        </div>
        <p className="text-lg text-slate-300">{text}</p>
    </div>
);

export default function FinDelRechazoPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://luiscabrejo.com/blog/el-fin-del-rechazo"
    },
    "headline": "El Fin del Rechazo: Cómo la IA está Creando la Primera Generación de Networkers Millonarios sin Perseguir a Nadie",
    "description": "Descubre el sistema de Network Marketing con IA que automatiza el 80% del trabajo, elimina el rechazo y te permite construir un activo real sin perseguir a nadie.",
    "image": "https://luiscabrejo.com/og-image-fin-del-rechazo.png",
    "author": {
      "@type": "Person",
      "name": "Luis Cabrejo",
      "url": "https://luiscabrejo.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Luis Cabrejo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://luiscabrejo.com/logo.png"
      }
    },
    "datePublished": "2025-12-03T00:00:00.000Z",
    "dateModified": "2025-12-03T00:00:00.000Z"
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <style jsx global>{`
        .text-gradient-gold {
          background: linear-gradient(135deg, #FBBF24 0%, #D97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .luis-cabrejo-cta {
          background: linear-gradient(135deg, #1E40AF 0%, #7C3AED 100%);
          border-radius: 12px;
          padding: 16px 32px;
          font-weight: 700;
          color: white;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(30, 64, 175, 0.4);
        }
        .luis-cabrejo-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(30, 64, 175, 0.5);
        }
        .article-card {
            background: linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(124, 58, 237, 0.2);
            border-radius: 16px;
        }
      `}</style>

      <Navigation onContactClick={() => {}} />

      <main className="relative z-10 pt-28 pb-20 px-4 lg:px-8">
        <article className="max-w-4xl mx-auto">

          {/* Encabezado del Artículo */}
          <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-blue-400 font-semibold mb-2">Evolución del Network Marketing</p>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                El Fin del Rechazo: Cómo la IA está Creando la Primera Generación de <span className="text-gradient-gold">Networkers Millonarios</span> sin Perseguir a Nadie
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Descubre el sistema que automatiza el 80% del trabajo, permitiéndote construir un activo real mientras duermes.
              </p>
            </motion.div>
          </header>

          {/* Sección 1: Introducción (El Dolor) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <SectionTitle>La Verdad Incómoda: El 95% Fracasa por una Razón</SectionTitle>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              La industria del Network Marketing nos vendió un sueño de libertad financiera, pero nos entregó un manual de instrucciones obsoleto. La "lista caliente", las llamadas en frío, las reuniones caseras... tácticas de 1980 que en 2025 solo generan ansiedad, rechazo y agotamiento.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Si alguna vez has sentido ese nudo en el estómago antes de "prospectar" a un amigo, o la frustración de un equipo que no duplica, no estás solo. El problema no eres tú. Es el método.
            </p>
            <div className="article-card p-6 space-y-4">
                <PainPoint icon={<X size={20}/>} text="Miedo paralizante al 'qué dirán' y al rechazo." />
                <PainPoint icon={<X size={20}/>} text="Agotamiento por perseguir prospectos que no están interesados." />
                <PainPoint icon={<X size={20}/>} text="Frustración por un equipo que no crece ni se duplica." />
            </div>
          </motion.section>

          {/* Sección 2: El Punto de Inflexión (La Revelación) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <SectionTitle>El Secreto no es el Esfuerzo, es el <span className="text-gradient-gold">Sistema</span></SectionTitle>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Jeff Bezos no se hizo millonario vendiendo libros uno a uno. Construyó Amazon, un **sistema** donde millones de transacciones ocurren cada segundo, con o sin su presencia.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Los networkers más exitosos no son los que más "trabajan duro", son los que más se apalancan. Hoy, el mayor apalancamiento de la historia no es un producto milagroso ni un plan de compensación. Es la **Inteligencia Artificial**.
            </p>
            <div className="article-card p-8 text-center">
                <p className="text-2xl text-white italic leading-relaxed">
                    "Dejamos de ser vendedores puerta a puerta para convertirnos en arquitectos de sistemas de distribución masiva."
                </p>
            </div>
          </motion.section>

          {/* Sección 3: La Ventaja Tecnológica (La Solución) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <SectionTitle>Network Marketing con IA: Tu Socio Digital 24/7</SectionTitle>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Imagina un socio que nunca duerme, nunca se cansa y nunca se queja. Un experto que presenta el negocio, responde objeciones y filtra a los curiosos por ti, para que tú solo hables con personas genuinamente interesadas y listas para empezar.
            </p>
            <p className="text-lg text-white font-bold leading-relaxed mb-8">
              Ese socio existe. Se llama NEXUS.
            </p>
            <div className="article-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">NEXUS no es un 'chatbot', es tu Director de Operaciones:</h3>
                <div className="space-y-4">
                    <SolutionPoint
                        icon={<BrainCircuit size={24}/>}
                        text="Educa 24/7: Presenta el modelo de negocio y los productos con precisión perfecta, liberándote de las presentaciones repetitivas."
                    />
                    <SolutionPoint
                        icon={<Zap size={24}/>}
                        text="Filtra y Cualifica: Separa a los 'curiosos' de los 'comprometidos', para que tu tiempo solo lo inviertas en conversaciones de alto valor."
                    />
                    <SolutionPoint
                        icon={<Cpu size={24}/>}
                        text="Provee Inteligencia: Te entrega un resumen de cada prospecto (sus dudas, su perfil, su nivel de interés) antes de que hables con él."
                    />
                </div>
            </div>
          </motion.section>

          {/* Sección 4: La Tríada de Poder (El Cómo) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <SectionTitle>La Tríada de Poder: El Modelo de Negocio Anti-Fallas</SectionTitle>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              La tecnología por sí sola no es suficiente. Nuestro éxito se basa en la integración de tres gigantes que trabajan para ti, eliminando los puntos de fricción donde el 95% de los networkers fracasan.
            </p>
            <div className="space-y-6">
                <div className="article-card p-6 flex items-center gap-6">
                    <div className="flex-shrink-0 text-blue-400"><Users size={40} /></div>
                    <div>
                        <h3 className="text-xl font-bold text-white">1. TÚ (La Visión)</h3>
                        <p className="text-slate-400">Tu rol ya no es vender, es conectar. Usas las herramientas para atraer y dejas que el sistema eduque. Aportas la estrategia y la conexión humana.</p>
                    </div>
                </div>
                <div className="article-card p-6 flex items-center gap-6">
                    <div className="flex-shrink-0 text-purple-400"><Cpu size={40} /></div>
                    <div>
                        <h3 className="text-xl font-bold text-white">2. CreaTuActivo (La Ejecución IA)</h3>
                        <p className="text-slate-400">Nuestra plataforma tecnológica exclusiva. NEXUS y las herramientas de automatización hacen el trabajo pesado, técnico y repetitivo por ti.</p>
                    </div>
                </div>
                <div className="article-card p-6 flex items-center gap-6">
                    <div className="flex-shrink-0 text-green-400"><Globe size={40} /></div>
                    <div>
                        <h3 className="text-xl font-bold text-white">3. Gano Excel (La Logística)</h3>
                        <p className="text-slate-400">El gigante corporativo que pone el producto (con patente mundial), las oficinas, la logística de envíos y el capital. Cero riesgo para ti.</p>
                    </div>
                </div>
            </div>
          </motion.section>

          {/* Sección 5: Llamada a la Acción (El Siguiente Paso) */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center bg-slate-800/50 p-8 lg:p-12 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Estás listo para dejar de ser vendedor y convertirte en <span className="text-gradient-gold">Arquitecto de Sistemas</span>?
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Si eres un profesional o networker que valora la estrategia sobre el esfuerzo bruto, y la tecnología sobre las tácticas obsoletas, es momento de conversar.
            </p>
            <Link href="/fundadores" className="luis-cabrejo-cta inline-flex items-center gap-3">
              Conocer el Sistema de Fundadores <ArrowRight size={20} />
            </Link>
            <p className="text-sm text-slate-500 mt-4">
              (Acceso exclusivo para profesionales que buscan un modelo probado y tecnológico)
            </p>
          </motion.section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
