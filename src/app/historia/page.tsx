'use client';

import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import ContactModal from '@/components/ContactModal';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HistoriaPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navigation onContactClick={() => setContactModalOpen(true)} />

      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 sm:mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6">
              Mi Historia:
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block mt-2">
                De la Quiebra a 4 Millones
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Esta es la historia real de cómo pasé de vestir mal y vivir en estrato cero a construir un activo empresarial que opera en 16 países de América.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline - COMPLETELY REDESIGNED FOR MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* MOBILE TIMELINE (visible on mobile only) */}
          <div className="block lg:hidden space-y-12">

            {/* 2013 - El Fondo */}
            <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 p-2 rounded-full mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-red-400 font-semibold text-sm">2013 - El Fondo</span>
              </div>
              <h3 className="text-xl font-bold mb-4">La Quiebra Total</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Vivía en estrato cero en Villavicencio. Vestía mal, tenía problemas dentales, no usaba fragancia ni crema de peinar. No tenía vehículo ni recursos.
              </p>
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-800/30">
                <h4 className="font-semibold text-red-300 mb-2 text-sm">Lecciones del Fondo:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• La resiliencia se forja en la adversidad</li>
                  <li>• Las personas siguen la autenticidad, no la apariencia</li>
                  <li>• Los recursos externos no definen el potencial interno</li>
                </ul>
              </div>
              <div className="text-xs text-gray-400 italic mt-4">
                "A veces me pregunto cómo la gente me seguía en esas condiciones..."
              </div>
            </div>

            {/* 2014-2016 - Los Primeros Pasos */}
            <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-orange-500 p-2 rounded-full mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="text-orange-400 font-semibold text-sm">2014-2016 - La Construcción</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Diamante en 30 Meses</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Trabajando "con las uñas", sin recursos, pero con sistema y determinación. En 2.5 años alcancé el rango de Diamante en Gano Excel.
              </p>
              <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-800/30">
                <h4 className="font-semibold text-orange-300 mb-2 text-sm">Factores de Éxito:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• 2 horas diarias promedio de trabajo enfocado</li>
                  <li>• Sistema + persistencia + evolución</li>
                  <li>• Trabajo en equipo y bendición de Dios</li>
                  <li>• Sin oficina de Gano Excel en Villavicencio</li>
                </ul>
              </div>
              <div className="text-xs text-gray-400 italic mt-4">
                "Trabajábamos 2 horas diarias promedio. Era suficiente con el sistema correcto."
              </div>
            </div>

            {/* 2017-2020 - El Poder de la Familia */}
            <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-pink-500 p-2 rounded-full mr-3">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-pink-400 font-semibold text-sm">2017-2020 - Power Couple</span>
              </div>
              <h3 className="text-xl font-bold mb-4">La Fuerza de la Unión</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Mi esposa también alcanza el rango Diamante. Construimos un legado familiar empresarial. 25 años de matrimonio sólido como base del éxito.
              </p>
              <div className="bg-pink-900/20 rounded-lg p-4 border border-pink-800/30">
                <h4 className="font-semibold text-pink-300 mb-2 text-sm">Logros Familiares:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• Esposa también Diamante (duplicación comprobada)</li>
                  <li>• Hija desarrollando exitosamente el negocio</li>
                  <li>• Red creciendo en Colombia y región</li>
                  <li>• Viajes internacionales (7+ países, Asia corporativa)</li>
                </ul>
              </div>
              <div className="text-xs text-gray-400 italic mt-4">
                "Un power couple empresarial: dos diamantes, una visión, una familia."
              </div>
            </div>

            {/* 2020-2022 - La Transformación Digital */}
            <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-2 rounded-full mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-blue-400 font-semibold text-sm">2020-2022 - Revolución Digital</span>
              </div>
              <h3 className="text-xl font-bold mb-4">El Despertar Tecnológico</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                La pandemia activó mi visión digital. Lancé <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ganocafe.online</a>, fortaleció conocimientos tecnológicos. Lo que no hicimos en 9 años, lo hicimos en 2 gracias al trabajo digital.
              </p>
              <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                <h4 className="font-semibold text-blue-300 mb-2 text-sm">Aprendizajes Pandemia:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• "La pandemia fue una bendición para mí"</li>
                  <li>• Comportamiento del mercado hacia digital</li>
                  <li>• Oportunidades de nuevos millonarios</li>
                  <li>• Nacimiento de <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ganocafe.online</a></li>
                </ul>
              </div>
              <div className="text-xs text-gray-400 italic mt-4">
                "Le decía a mi esposa: te aseguro que nacerán nuevos millonarios."
              </div>
            </div>

            {/* 2023-2024 - El Arquitecto */}
            <div className="relative bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="bg-purple-500 p-2 rounded-full mr-3">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-400 font-semibold text-sm">2023-2024 - El Arquitecto</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Nacimiento del Ecosistema</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                5 años estudiando, desarrollando herramientas. WordPress, Next.js, IA, automatización. Creación de <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">CreaTuActivo.com</a> y todo el ecosistema digital.
              </p>
              <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-800/30">
                <h4 className="font-semibold text-purple-300 mb-2 text-sm">Stack Tecnológico:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• WordPress, Flatsome, Visual Studio Code</li>
                  <li>• SEO, GitHub, Vercel, Next.js</li>
                  <li>• Google Ads, estrategias de conversión</li>
                  <li>• Integración de IA para optimización</li>
                </ul>
              </div>
              <div className="text-xs text-gray-400 italic mt-4">
                "Soy obstinado. No te imaginas las horas dedicadas, días completos estudiando."
              </div>
            </div>

            {/* 2025 - La Visión 4M */}
            <div className="relative bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full mr-3">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-green-400 font-semibold text-sm">2025 - La Visión 4M</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Arquitecto de Ecosistemas Digitales</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                Hoy tengo las herramientas, la experiencia y la visión para impactar 4 millones de vidas. Red de consumidores en todo América. El legado apenas comienza.
              </p>
              <div className="bg-green-900/20 rounded-lg p-4 border border-green-800/30">
                <h4 className="font-semibold text-green-300 mb-2 text-sm">El Ecosistema Completo:</h4>
                <ul className="text-xs text-gray-300 space-y-1">
                  <li>• <a href="https://luiscabrejo.com" className="text-green-400 hover:underline">luiscabrejo.com</a> - Marca personal</li>
                  <li>• <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">CreaTuActivo.com</a> - Plataforma empresarial</li>
                  <li>• <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">App CreaTuActivo</a> - Herramientas y automatización</li>
                  <li>• <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">ganocafe.online</a> - E-commerce funcional</li>
                </ul>
              </div>
              <div className="text-sm text-green-300 font-medium mt-4">
                "No busco protagonismo - busco transformar 4 millones de vidas."
              </div>
            </div>

          </div>

          {/* DESKTOP TIMELINE (hidden on mobile) */}
          <div className="hidden lg:block relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {/* Timeline Items */}
            <div className="space-y-24">

              {/* 2013 - El Fondo */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center justify-end mb-4">
                      <Calendar className="w-5 h-5 text-red-400 mr-2" />
                      <span className="text-red-400 font-semibold">2013 - El Fondo</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">La Quiebra Total</h3>
                    <p className="text-gray-300 mb-4">
                      Vivía en estrato cero en Villavicencio. Vestía mal, tenía problemas dentales, no usaba fragancia ni crema de peinar. No tenía vehículo ni recursos.
                    </p>
                    <div className="text-sm text-gray-400">
                      "A veces me pregunto cómo la gente me seguía en esas condiciones..."
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12">
                  <div className="bg-red-900/20 rounded-2xl p-6 border border-red-800/30">
                    <h4 className="font-semibold text-red-300 mb-2">Lecciones del Fondo:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• La resiliencia se forja en la adversidad</li>
                      <li>• Las personas siguen la autenticidad, no la apariencia</li>
                      <li>• Los recursos externos no definen el potencial interno</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2014-2016 - Los Primeros Pasos */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="bg-orange-900/20 rounded-2xl p-6 border border-orange-800/30">
                    <h4 className="font-semibold text-orange-300 mb-2">Factores de Éxito:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 2 horas diarias promedio de trabajo enfocado</li>
                      <li>• Sistema + persistencia + evolución</li>
                      <li>• Trabajo en equipo y bendición de Dios</li>
                      <li>• Sin oficina de Gano Excel en Villavicencio</li>
                    </ul>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12 text-left">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center mb-4">
                      <Calendar className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-orange-400 font-semibold">2014-2016 - La Construcción</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Diamante en 30 Meses</h3>
                    <p className="text-gray-300 mb-4">
                      Trabajando "con las uñas", sin recursos, pero con sistema y determinación. En 2.5 años alcancé el rango de Diamante en Gano Excel.
                    </p>
                    <div className="text-sm text-gray-400">
                      "Trabajábamos 2 horas diarias promedio. Era suficiente con el sistema correcto."
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue with rest of timeline items - all following same pattern */}
              {/* 2017-2020 - Power Couple */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center justify-end mb-4">
                      <Heart className="w-5 h-5 text-pink-400 mr-2" />
                      <span className="text-pink-400 font-semibold">2017-2020 - Power Couple</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">La Fuerza de la Unión</h3>
                    <p className="text-gray-300 mb-4">
                      Mi esposa también alcanza el rango Diamante. Construimos un legado familiar empresarial. 25 años de matrimonio sólido como base del éxito.
                    </p>
                    <div className="text-sm text-gray-400">
                      "Un power couple empresarial: dos diamantes, una visión, una familia."
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12">
                  <div className="bg-pink-900/20 rounded-2xl p-6 border border-pink-800/30">
                    <h4 className="font-semibold text-pink-300 mb-2">Logros Familiares:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Esposa también Diamante (duplicación comprobada)</li>
                      <li>• Hija desarrollando exitosamente el negocio</li>
                      <li>• Red creciendo en Colombia y región</li>
                      <li>• Viajes internacionales (7+ países, Asia corporativa)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2020-2022 - Digital Revolution */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="bg-blue-900/20 rounded-2xl p-6 border border-blue-800/30">
                    <h4 className="font-semibold text-blue-300 mb-2">Aprendizajes Pandemia:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• "La pandemia fue una bendición para mí"</li>
                      <li>• Comportamiento del mercado hacia digital</li>
                      <li>• Oportunidades de nuevos millonarios</li>
                      <li>• Nacimiento de <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ganocafe.online</a></li>
                    </ul>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12 text-left">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center mb-4">
                      <Zap className="w-5 h-5 text-blue-400 mr-2" />
                      <span className="text-blue-400 font-semibold">2020-2022 - Revolución Digital</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">El Despertar Tecnológico</h3>
                    <p className="text-gray-300 mb-4">
                      La pandemia activó mi visión digital. Lancé <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ganocafe.online</a>, fortaleció conocimientos tecnológicos. Lo que no hicimos en 9 años, lo hicimos en 2 gracias al trabajo digital.
                    </p>
                    <div className="text-sm text-gray-400">
                      "Le decía a mi esposa: te aseguro que nacerán nuevos millonarios."
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023-2024 - El Arquitecto */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                    <div className="flex items-center justify-end mb-4">
                      <Target className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="text-purple-400 font-semibold">2023-2024 - El Arquitecto</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Nacimiento del Ecosistema</h3>
                    <p className="text-gray-300 mb-4">
                      5 años estudiando, desarrollando herramientas. WordPress, Next.js, IA, automatización. Creación de <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">CreaTuActivo.com</a> y todo el ecosistema digital.
                    </p>
                    <div className="text-sm text-gray-400">
                      "Soy obstinado. No te imaginas las horas dedicadas, días completos estudiando."
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12">
                  <div className="bg-purple-900/20 rounded-2xl p-6 border border-purple-800/30">
                    <h4 className="font-semibold text-purple-300 mb-2">Stack Tecnológico:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• WordPress, Flatsome, Visual Studio Code</li>
                      <li>• SEO, GitHub, Vercel, Next.js</li>
                      <li>• Google Ads, estrategias de conversión</li>
                      <li>• Integración de IA para optimización</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2025 - La Visión 4M */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12">
                  <div className="bg-green-900/20 rounded-2xl p-6 border border-green-800/30">
                    <h4 className="font-semibold text-green-300 mb-2">El Ecosistema Completo:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• <a href="https://luiscabrejo.com" className="text-green-400 hover:underline">luiscabrejo.com</a> - Marca personal</li>
                      <li>• <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">CreaTuActivo.com</a> - Plataforma empresarial</li>
                      <li>• <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">App CreaTuActivo</a> - Herramientas y automatización</li>
                      <li>• <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">ganocafe.online</a> - E-commerce funcional</li>
                    </ul>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-slate-900"></div>

                <div className="w-1/2 pl-12 text-left">
                  <div className="bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-2xl p-8 border border-green-500/30">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">2025 - La Visión 4M</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Arquitecto de Ecosistemas Digitales</h3>
                    <p className="text-gray-300 mb-4">
                      Hoy tengo las herramientas, la experiencia y la visión para impactar 4 millones de vidas. Red de consumidores en todo América. El legado apenas comienza.
                    </p>
                    <div className="text-sm text-green-300 font-medium">
                      "No busco protagonismo - busco transformar 4 millones de vidas."
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Personal Philosophy - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Mi Filosofía Personal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400">Lealtad Inquebrantable</h3>
              <p className="text-sm sm:text-base text-gray-300">"A muerte por los míos. La lealtad es la base de todo ecosistema empresarial exitoso."</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-purple-400">Mentalidad Resiliente</h3>
              <p className="text-sm sm:text-base text-gray-300">"Nunca me rindo. Cada obstáculo es una oportunidad de crecer y evolucionar."</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-400">Protector Natural</h3>
              <p className="text-sm sm:text-base text-gray-300">"Orientado a ayudar padres de familia. El éxito sin familia no es éxito."</p>
            </div>

            <div className="bg-black/30 rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-400">Humor Inteligente</h3>
              <p className="text-sm sm:text-base text-gray-300">"Se me da fácil hacer reír a las personas. La conexión humana es clave."</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/50 to-gray-900/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">¿Qué Aprendiste de Mi Historia?</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-8 max-w-2xl mx-auto">
              Si mi historia te resuena, si ves que es posible transformar la adversidad en oportunidad,
              si entiendes que el éxito real se construye en familia y con propósito...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ecosistema" className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all">
                Conoce Mi Ecosistema
              </Link>
              <Link href="/vision" className="border border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Ve la Visión 4 Millones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Final - IMPROVED MOBILE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-blue-500/20">
            <div className="text-4xl sm:text-6xl text-blue-400 mb-6">"</div>
            <blockquote className="text-lg sm:text-2xl text-gray-200 font-medium mb-6 italic leading-relaxed">
              Si vestía mal, tenía problemas dentales y vivía en estrato cero, pero aún así las personas me seguían...
              imagina lo que podemos lograr ahora con herramientas de clase mundial.
            </blockquote>
            <div className="text-blue-400 font-semibold">— Luis Cabrejo</div>
            <div className="text-gray-400 text-sm">Arquitecto de Ecosistemas Digitales</div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        formType="historia"
      />
    </div>
  );
}
