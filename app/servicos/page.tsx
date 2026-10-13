'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Globe, Layers, Zap, Bot, Network, Cpu, Sparkles } from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '@/data/siteData';
import ContactModal from '@/components/ContactModal';
import CTA from '@/components/CTA';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Layers,
  Zap,
  Bot,
  Network,
  Cpu
};

export default function ServicosPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('web');

  const handleRequest = (serviceId: string) => {
    setSelectedService(serviceId);
    setModalOpen(true);
  };

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
            <span>Catálogo Completo de Soluções</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Nossos Serviços Digitais
          </h1>

          <p className="text-lg text-[#A7B2C5] leading-relaxed">
            Desenvolvimento de software de alta qualidade, desde sites institucionais até ecossistemas integrados com inteligência artificial e rotinas automáticas de alta escala.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const Icon = iconMap[service.iconName] || Globe;

            return (
              <div
                key={service.id}
                className="p-8 rounded-2xl bg-[#01113E] border border-[#172554] hover:border-[#10C4FC]/50 flex flex-col justify-between shadow-xl transition-all glow-card"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#011959] border border-[#172554] flex items-center justify-center text-[#10C4FC] mb-6">
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[11px] font-mono text-[#A7B2C5] uppercase tracking-wider block mb-2">
                    {service.tag}
                  </span>

                  <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#A7B2C5] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#172554] mb-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#F1F5F9]">
                        <CheckCircle2 className="w-4 h-4 text-[#10C4FC] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleRequest(service.id)}
                  className="w-full py-3 px-4 rounded-xl bg-[#011959] hover:bg-[#0068F5] border border-[#172554] text-xs font-semibold text-[#F1F5F9] flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Solicitar orçamento deste serviço</span>
                  <ArrowRight className="w-4 h-4 text-[#10C4FC]" />
                </button>
              </div>
            );
          })}
        </div>

      </div>

      <CTA />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}

