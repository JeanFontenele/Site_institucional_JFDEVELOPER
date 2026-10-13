'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Cpu, Bot, Sparkles, CheckCircle2, Code2, Zap } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section 
        id="inicio" 
        className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#010C2B]"
      >
        {/* Ambient Glows inspired by JFDeveloper Logo */}
        <div className="absolute top-0 left-0 w-[35rem] h-[35rem] bg-[#0068F5]/20 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#10C4FC]/15 rounded-full blur-[130px] pointer-events-none transform translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[45rem] h-[25rem] bg-[#0032A7]/10 rounded-full blur-[140px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

        {/* Subtle Tech Grid / Circuit overlay */}
        <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#011959]/80 border border-[#0068F5]/40 text-[#10C4FC] text-xs font-semibold tracking-wider uppercase shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#10C4FC] animate-pulse" />
                <span>TECNOLOGIA • DESENVOLVIMENTO • IA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-[1.12] tracking-tight">
                Soluções digitais para{' '}
                <span className="bg-gradient-to-r from-[#10C4FC] via-[#0068F5] to-[#F1F5F9] bg-clip-text text-transparent">
                  transformar ideias
                </span>{' '}
                em tecnologia.
              </h1>

              {/* Subtitle */}
              <p className="text-[#A7B2C5] text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Desenvolvemos sites, sistemas e soluções digitais sob medida para empresas que desejam melhorar seus processos, presença digital e resultados.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#172554] bg-[#01113E] hover:bg-[#011959] hover:border-[#0068F5]/60 text-[#F1F5F9] text-sm font-semibold transition-all duration-300 shadow-md group"
                >
                  <Cpu className="w-4 h-4 text-[#10C4FC] group-hover:rotate-12 transition-transform" />
                  <span>Conheça nossos serviços</span>
                </Link>

                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0068F5] to-[#0032A7] hover:from-[#10C4FC] hover:to-[#0068F5] text-white text-sm font-semibold transition-all duration-300 shadow-lg shadow-[#0068F5]/30 hover:shadow-[#10C4FC]/30 group cursor-pointer"
                >
                  <span>Fale conosco</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-[#172554]/60 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                    100%
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A7B2C5]">Sob medida</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-[#10C4FC] font-[family-name:var(--font-heading)]">
                    Modern
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A7B2C5]">Stack &amp; IA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                    Ágil
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#A7B2C5]">Direto com cliente</span>
                </div>
              </div>
            </div>

            {/* Right Tech Visual Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Tech Visual Frame */}
              <div className="relative w-full max-w-md lg:max-w-none">
                
                {/* Outer Glassmorphic Card Container */}
                <div className="relative rounded-2xl bg-[#01113E]/90 border border-[#172554] p-5 sm:p-6 shadow-2xl shadow-[#0068F5]/15 backdrop-blur-xl">
                  
                  {/* Top Bar of Code IDE */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#172554]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EF4444]/90" />
                      <div className="w-3 h-3 rounded-full bg-[#F59E0B]/90" />
                      <div className="w-3 h-3 rounded-full bg-[#10B981]/90" />
                      <span className="ml-2 text-xs font-mono text-[#A7B2C5]/80">jfdeveloper-engine.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#011959] text-[10px] font-mono text-[#10C4FC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10C4FC] animate-ping" />
                      SYSTEM ONLINE
                    </div>
                  </div>

                  {/* Code Editor Preview */}
                  <div className="pt-4 font-mono text-xs sm:text-sm space-y-2 text-[#A7B2C5]">
                    <p className="text-[#A7B2C5]/60">// Solução arquitetada sob medida</p>
                    <p>
                      <span className="text-[#0068F5]">const</span>{' '}
                      <span className="text-[#10C4FC]">solution</span> ={' '}
                      <span className="text-[#0068F5]">new</span>{' '}
                      <span className="text-[#F1F5F9]">JFDeveloperApp</span>({'{'}
                    </p>
                    <p className="pl-4">
                      clientFocus:{' '}
                      <span className="text-[#10C4FC]">&apos;Personalizado&apos;</span>,
                    </p>
                    <p className="pl-4">
                      architecture:{' '}
                      <span className="text-[#10C4FC]">&apos;Next.js + AI Core&apos;</span>,
                    </p>
                    <p className="pl-4">
                      automation:{' '}
                      <span className="text-[#10B981]">true</span>,
                    </p>
                    <p className="pl-4">
                      status:{' '}
                      <span className="text-[#10C4FC]">&apos;Deploy pronto para escala&apos;</span>
                    </p>
                    <p>{'}'});</p>
                    <p className="text-[#10C4FC] pt-1">
                      await solution.accelerateBusiness();
                    </p>
                  </div>

                  {/* Live Mini Stats Module */}
                  <div className="mt-5 pt-4 border-t border-[#172554] grid grid-cols-2 gap-3">
                    <div className="p-2.5 rounded-xl bg-[#010C2B] border border-[#172554]/80 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0068F5]/20 text-[#10C4FC]">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#A7B2C5]">Camada de IA</div>
                        <div className="text-xs font-bold text-[#F1F5F9]">Ativa &amp; Treinada</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#010C2B] border border-[#172554]/80 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0032A7]/30 text-[#10C4FC]">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-[#A7B2C5]">Automação</div>
                        <div className="text-xs font-bold text-[#F1F5F9]">Zero Ruídos</div>
                      </div>
                    </div>
                  </div>

                  {/* Circuit Traces Vector on Right Corner */}
                  <svg 
                    className="absolute -bottom-6 -right-6 w-32 h-32 opacity-40 pointer-events-none text-[#10C4FC]" 
                    viewBox="0 0 100 100" 
                    fill="none"
                  >
                    <path d="M10 90 L50 90 L70 50 L90 50" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    <circle cx="90" cy="50" r="3" fill="currentColor" />
                    <circle cx="10" cy="90" r="3" fill="currentColor" />
                  </svg>
                </div>

                {/* Floating Tech Badge 1 */}
                <div className="absolute -top-4 -left-4 sm:-left-6 p-3 rounded-xl bg-[#011959]/95 border border-[#10C4FC]/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs text-[#F1F5F9] animate-pulse">
                  <Sparkles className="w-4 h-4 text-[#10C4FC]" />
                  <span className="font-semibold">Soluções Sob Medida</span>
                </div>

                {/* Floating Tech Badge 2 */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 p-3 rounded-xl bg-[#011959]/95 border border-[#0068F5]/50 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs text-[#F1F5F9]">
                  <CheckCircle2 className="w-4 h-4 text-[#10C4FC]" />
                  <span className="font-semibold">Performance &amp; Segurança</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact modal trigger */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

