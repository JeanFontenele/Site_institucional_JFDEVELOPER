'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, MessageSquare, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contato" className="relative py-20 lg:py-28 bg-[#010C2B] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0032A7]/10 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main High-Conversion Gradient Card */}
          <div className="relative rounded-3xl overflow-hidden border border-[#0068F5]/40 bg-gradient-to-br from-[#0032A7] via-[#01113E] to-[#010C2B] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#0068F5]/20">
            
            {/* Ambient glows inside card */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#10C4FC]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0068F5]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#010C2B]/80 border border-[#10C4FC]/40 text-[#10C4FC] text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primeiro Passo Sem Compromisso</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
                Tem uma ideia? Vamos transformá-la em tecnologia.
              </h2>

              {/* Text */}
              <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Conte-nos sobre seu projeto e descubra como podemos desenvolver uma solução para sua necessidade.
              </p>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0068F5] via-[#0055cc] to-[#10C4FC] text-white font-bold text-base shadow-xl shadow-[#0068F5]/40 hover:shadow-[#10C4FC]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <Link
                  href="/contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#010C2B]/80 hover:bg-[#011959] border border-[#172554] text-[#F1F5F9] font-semibold text-sm transition-all"
                >
                  <span>Ver formulário completo</span>
                </Link>
              </div>

              {/* Trust badges below button */}
              <div className="pt-8 border-t border-[#172554]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#A7B2C5]">
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#10C4FC]" />
                  <span>Retorno ágil em até 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10C4FC]" />
                  <span>Orçamento detalhado e transparente</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#10C4FC]" />
                  <span>Canal direto via WhatsApp</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Quote modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

