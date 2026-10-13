import React from 'react';
import Link from 'next/link';
import { UserCheck, Sliders, Cpu, ArrowRight, Shield, Rocket, Check } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: UserCheck,
      title: 'Atendimento Personalizado',
      description: 'Você conversa diretamente com quem pensa e constrói a sua solução. Sem intermediários, com transparência total e foco no seu objetivo.',
      badge: 'Contato Direto'
    },
    {
      icon: Sliders,
      title: 'Soluções Sob Medida',
      description: 'Não acreditamos em fórmulas prontas. Cada sistema, site ou automação é arquitetado para os fluxos específicos e necessidades da sua empresa.',
      badge: 'Exclusividade'
    },
    {
      icon: Cpu,
      title: 'Tecnologias Modernas',
      description: 'Desenvolvimento ágil com as ferramentas mais sólidas e atuais do mercado, garantindo velocidade extrema, segurança e facilidade para evoluir.',
      badge: 'Alta Performance'
    }
  ];

  return (
    <section id="sobre" className="relative py-20 lg:py-28 bg-[#01113E] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0068F5]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10C4FC]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <span>Sobre a JFDeveloper</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Tecnologia construída para resolver problemas reais.
          </h2>
          <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
            A JFDeveloper nasceu com o propósito de aproximar empresas do que há de mais moderno em software, automação e inteligência artificial. Somos uma equipe enxuta, técnica e dinâmica, focada em entregar resultados concretos com agilidade e compromisso.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {highlights.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-8 rounded-2xl bg-[#011959]/90 border border-[#172554] hover:border-[#10C4FC]/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#010C2B]/40 glow-card"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#010C2B] border border-[#172554] flex items-center justify-center text-[#10C4FC] group-hover:bg-[#0068F5] group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#10C4FC]/80 px-2.5 py-1 rounded-full bg-[#010C2B] border border-[#172554]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-3 group-hover:text-[#10C4FC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#A7B2C5] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Approach Banner (Not a giant cold corporation, but agile & close partner) */}
        <div className="rounded-2xl bg-[#010C2B] border border-[#172554] p-8 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#10C4FC] uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                <span>Nossa Filosofia de Trabalho</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                Sem burocracia desnecessária. Foco na entrega e no valor do seu projeto.
              </h3>
              <p className="text-[#A7B2C5] text-sm sm:text-base leading-relaxed">
                Diferente de grandes consultorias com processos lentos e custos exorbitantes, na JFDeveloper atuamos com comunicação clara, prototipagem rápida e desenvolvimento iterativo. Você acompanha a evolução em tempo real e conta com suporte direto a qualquer momento.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F1F5F9]">
                  <div className="w-5 h-5 rounded-full bg-[#0068F5]/20 text-[#10C4FC] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Código limpo, documentado e transferível</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#F1F5F9]">
                  <div className="w-5 h-5 rounded-full bg-[#0068F5]/20 text-[#10C4FC] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Arquitetura pronta para crescer junto com seu negócio</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end">
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#011959] hover:bg-[#0068F5] border border-[#172554] text-[#F1F5F9] text-xs sm:text-sm font-semibold transition-all group"
              >
                <span>Saiba mais sobre a empresa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0068F5] hover:bg-[#10C4FC] hover:text-[#010C2B] text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Iniciar uma conversa</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

