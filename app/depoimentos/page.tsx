import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Star, MessageSquareQuote, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS_DATA } from '@/data/siteData';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Depoimentos | JFDeveloper',
  description: 'Confira as avaliações e experiências de clientes parceiros da JFDeveloper em projetos de tecnologia.',
};

export default function DepoimentosPage() {
  return (
    <div className="pt-28 pb-16 bg-[#010C2B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A7B2C5] hover:text-[#10C4FC] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparência &amp; Qualidade</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Depoimentos &amp; Relacionamento
          </h1>

          <p className="text-lg text-[#A7B2C5] leading-relaxed">
            Valorizamos relacionamentos duradouros baseados em confiança mútua, escuta atenta e entregas de valor real.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#01113E] border border-[#172554] flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#10C4FC] text-[#10C4FC]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#0068F5]" />
                </div>

                <p className="text-[#F1F5F9] text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#172554] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#F1F5F9]">{item.clientName}</h4>
                  <p className="text-xs text-[#A7B2C5]">{item.role} • {item.company}</p>
                </div>
                {item.isPlaceholder && (
                  <span className="text-[9px] uppercase tracking-wider text-[#A7B2C5]/70 bg-[#010C2B] px-2 py-1 rounded border border-[#172554]">
                    Exemplo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Policy box */}
        <div className="p-6 rounded-2xl bg-[#011959]/50 border border-[#172554] mb-20 max-w-2xl mx-auto text-center space-y-2">
          <p className="text-xs text-[#A7B2C5]">
            Na JFDeveloper primamos pela autenticidade e transparência. Se você já é nosso cliente parceiro e deseja publicar seu depoimento, entre em contato direto conosco!
          </p>
        </div>

      </div>

      <CTA />
    </div>
  );
}

