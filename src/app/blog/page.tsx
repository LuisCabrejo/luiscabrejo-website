import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Blog Gano Excel - Artículos y Guías para Distribuidores',
  description: 'Artículos sobre Gano Excel, network marketing y tecnología. Testimonios reales, guías prácticas y estrategias de Luis Cabrejo, Diamante 11 años en 16 países.',
  alternates: {
    canonical: 'https://luiscabrejo.com/blog',
  },
};

interface ArticleCard {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
}

const articles: ArticleCard[] = [
  {
    slug: 'como-ser-distribuidor-gano-excel-colombia-2025',
    title: 'Cómo Ser Distribuidor Gano Excel Colombia 2025: Guía Completa',
    description: 'Guía paso a paso para convertirte en distribuidor Gano Excel en Colombia. Requisitos, costos, paquetes y proceso completo explicado por un Diamante de 11 años.',
    date: '24 Nov 2025',
    category: 'Guías',
    readTime: '12 min',
  },
  {
    slug: 'testimonio-11-anos-diamante-gano-excel-colombia',
    title: 'Testimonio: 11 Años como Diamante Gano Excel en 16 Países',
    description: 'Mi historia real desde la quiebra hasta construir un negocio en 16 países. Los fracasos, las lecciones y cómo la tecnología cambió todo.',
    date: '24 Nov 2025',
    category: 'Testimonios',
    readTime: '15 min',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      {/* Header */}
      <div className="relative overflow-hidden border-b border-slate-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Blog Gano Excel
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Network Marketing Real
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Artículos honestos sobre Gano Excel, network marketing y tecnología.
              <br />
              Por <strong className="text-purple-400">Luis Cabrejo</strong>, Diamante 11 años en 16 países.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 sm:p-8 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Category and Read Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-purple-400">
                  {article.category}
                </span>
                <span className="text-sm text-gray-400">{article.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {article.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {article.description}
              </p>

              {/* Date */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <span className="text-sm text-gray-400">{article.date}</span>
                <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Leer artículo →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State for Future Articles */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Más artículos próximamente. Mientras tanto:
          </p>
          <Link
            href="/fundadores"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full font-semibold text-white hover:shadow-xl transition-all"
          >
            Conoce el Programa Fundadores →
          </Link>
        </div>
      </div>
    </div>
  );
}
