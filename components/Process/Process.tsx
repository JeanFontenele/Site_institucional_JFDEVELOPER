import React from 'react';
import { 
  Lightbulb, 
  Compass, 
  Code2, 
  CheckSquare2, 
  Rocket, 
  Headphones, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from '@/data/siteData';

const stepIcons = [
  Lightbulb,
  Compass,
  Code2,
  CheckSquare2,
  Rocket,
  Headphones
];

export default function Process() {
  return (
    <section id="processo" className="relative py-20 lg:py-28 bg-[#01113E] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 w-[40rem] h-[20rem] bg-[#0068F5]/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#10C4FC]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Metodologia Transparente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Como transformamos sua ideia em solução
          </h2>
          <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
            Do primeiro alinhamento até o suporte pós-lançamento: um ciclo estruturado, sem surpresas e com previsibilidade total para o seu projeto.
          </p>
        </div>

        {/* Timeline Grid with Blue Connecting Lines */}
        <div className="relative">
          
          {/* Desktop Horizontal Blue Connecting Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#0032A7] via-[#10C4FC] to-[#0068F5] -translate-y-1/2 z-0 opacity-40" />

          {/* 6 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((item: ProcessStep, index: number) => {
              const Icon = stepIcons[index] || Code2;

              return (
                <div
                  key={item.step}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-[#011959]/90 border border-[#172554] hover:border-[#10C4FC]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-[#010C2B]/40 glow-card flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl font-black font-mono text-[#10C4FC]">
                          {item.step}
                        </span>
                        <span className="w-6 h-0.5 bg-[#0068F5]" />
                      </div>

                      <div className="w-11 h-11 rounded-xl bg-[#010C2B] border border-[#172554] flex items-center justify-center text-[#10C4FC] group-hover:bg-[#0068F5] group-hover:text-white transition-colors duration-300 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-2 group-hover:text-[#10C4FC] transition-colors">
                      {item.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-[#A7B2C5] text-xs sm:text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight pill */}
                  <div className="pt-3 border-t border-[#172554]/70">
                    <p className="text-[11px] font-medium text-[#10C4FC]/90">
                      ✓ {item.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

