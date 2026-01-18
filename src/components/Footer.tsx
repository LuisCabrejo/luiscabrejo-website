/**
 * Copyright © 2026 LuisCabrejo.com
 * Personal Brand Site - Luis Cabrejo
 *
 * THE ARCHITECT'S SUITE - Bimetallic System v3.0
 * Gold (#C5A059): CTAs, achievements, key highlights
 * Titanium (#94A3B8): Structural elements, navigation, muted text
 */

export default function Footer() {
  return (
    <footer className="bg-[#0F1115] text-[#E5E5E5] py-8 sm:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#C5A059] to-[#D4AF37] bg-clip-text text-transparent mb-4">
              Luis Cabrejo
            </div>
            <p className="text-[#64748B] text-xs sm:text-sm">
              CreaTuActivo.com - Arquitecto de Ecosistemas Digitales. Construyendo sistemas que trabajan por ti desde 2013.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-[#E5E5E5]">Ecosistema</h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <div>
                <a href="https://luiscabrejo.com" className="hover:text-[#C5A059] transition-colors">
                  luiscabrejo.com
                </a>
              </div>
              <div>
                <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  app.creatuactivo.com
                </a>
              </div>
              <div>
                <a href="https://creatuactivo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  CreaTuActivo.com
                </a>
              </div>
              <div>
                <a href="https://ganocafe.online" target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">
                  ganocafe.online - Tienda Productos Gano Excel
                </a>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-[#E5E5E5]">Conecta</h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#64748B]">
              <div>
                <a href="mailto:luiscabrejo@creatuactivo.com" className="hover:text-[#C5A059] transition-colors">
                  Email
                </a>
              </div>
              <div>
                <a href="https://linkedin.com/in/luiscabrejo" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="https://instagram.com/luiscabrejo" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Instagram
                </a>
              </div>
              <div>
                <a href="https://app.creatuactivo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Comunidad
                </a>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 text-[#E5E5E5]">Paises Activos</h4>
            <div className="text-xs text-[#64748B] leading-relaxed">
              Mexico, Guatemala, El Salvador, Costa Rica, Honduras, Panama, Colombia,
              Venezuela, Brasil, Ecuador, Peru, Bolivia, Chile, Argentina, Uruguay, Estados Unidos
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-[#64748B] text-xs sm:text-sm">
          <p>&copy; 2026 Luis Cabrejo - CreaTuActivo.com | Transformando vidas en toda America con tecnologia e inteligencia artificial.</p>
        </div>
      </div>
    </footer>
  );
}
