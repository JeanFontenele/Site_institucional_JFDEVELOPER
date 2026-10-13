import React from 'react';
import Link from 'next/link';
import { Star, MessageSquareQuote, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA, TestimonialItem } from '@/data/siteData';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 lg:py-28 bg-[#010C2B] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0068F5]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#10C4FC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Satisfação &amp; Parcerias</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            O que nossos clientes dizem
          </h2>
          <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
            A satisfação e o sucesso de cada empresa parceira guiam nossa busca diária por qualidade técnica e entregas pontuais.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS_DATA.map((item: TestimonialItem) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#01113E] border border-[#172554] hover:border-[#10C4FC]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#010C2B]/40 glow-card"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#10C4FC] text-[#10C4FC]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#0068F5]/60 group-hover:text-[#10C4FC] transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-[#F1F5F9]/90 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{item.testimonial}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#172554] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#011959] border border-[#10C4FC]/30 flex items-center justify-center font-bold text-xs text-[#10C4FC]">
                    {item.clientName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F1F5F9]">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-[#A7B2C5]">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>

                {/* Placeholder disclaimer badge as requested */}
                {item.isPlaceholder && (
                  <span className="text-[9px] uppercase tracking-wider text-[#A7B2C5]/70 bg-[#010C2B] px-2 py-1 rounded border border-[#172554]">
                    Exemplo
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Transparency Note */}
        <div className="max-w-2xl mx-auto text-center p-4 rounded-xl bg-[#01113E]/60 border border-[#172554]/80 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#A7B2C5]">
          <span className="w-2 h-2 rounded-full bg-[#10C4FC]" />
          <span>
            Os depoimentos acima são placeholders ilustrativos editáveis para novos parceiros. 
          </span>
          <Link href="#contato" className="text-[#10C4FC] hover:underline font-medium inline-flex items-center gap-1">
            <span>Seja o próximo case</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </section>
  );
}

