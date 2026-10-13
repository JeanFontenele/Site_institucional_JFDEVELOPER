'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, Layers, Zap, Bot, Network, Cpu, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/siteData';
import ContactModal from '@/components/ContactModal';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Zap,
  Bot,
  Network,
  Cpu
};

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('web');

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

  return (
    <>
      <section id="servicos" className="relative py-20 lg:py-28 bg-[#010C2B] overflow-hidden">
        {/* Subtle Ambient Background Light */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#0068F5]/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#10C4FC]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>O Que Desenvolvemos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
              Soluções digitais para o seu negócio
            </h2>
            <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
              Combinamos excelência técnica, design moderno e inteligência artificial para criar produtos digitais robustos, intuitivos e focados em gerar retorno financeiro e operacional.
            </p>
          </div>

          {/* 6 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_DATA.map((service: ServiceItem) => {
              const Icon = iconMap[service.iconName] || Globe;

              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl bg-[#011959]/75 border border-[#172554] hover:border-[#10C4FC]/50 hover:bg-[#011959] transition-all duration-300 hover:-translate-y-1.5 shadow-lg shadow-[#010C2B]/50 glow-card"
                >
                  <div>
                    {/* Icon & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-xl bg-[#01113E] border border-[#172554] flex items-center justify-center text-[#10C4FC] group-hover:bg-[#0068F5] group-hover:text-white transition-all duration-300 shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#A7B2C5] px-2.5 py-1 rounded-md bg-[#01113E] border border-[#172554]/80">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-3 group-hover:text-[#10C4FC] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#A7B2C5] text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature bullet list */}
                    <ul className="space-y-2 mb-6 border-t border-[#172554]/70 pt-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#F1F5F9]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10C4FC] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer action */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleSelectService(service.id)}
                      className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#01113E] hover:bg-[#0068F5] border border-[#172554] hover:border-transparent text-xs font-semibold text-[#F1F5F9] transition-all duration-200 group/btn cursor-pointer"
                    >
                      <span>Solicitar este serviço</span>
                      <ArrowRight className="w-4 h-4 text-[#10C4FC] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dedicated Subpage Link */}
          <div className="mt-14 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#01113E] border border-[#172554] hover:border-[#0068F5] text-sm font-semibold text-[#F1F5F9] hover:text-[#10C4FC] transition-all"
            >
              <span>Ver detalhes completos de nossa metodologia e tecnologias</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  );
}

