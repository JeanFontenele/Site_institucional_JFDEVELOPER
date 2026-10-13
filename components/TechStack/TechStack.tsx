'use client';

import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Bot, 
  Zap, 
  Container, 
  Layers, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Network
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Banco de Dados' | 'Infra' | 'IA & Automação';
  role: string;
  benefits: string;
}

const TECH_NODES: TechNode[] = [
  {
    id: 'react-js',
    name: 'React & JavaScript',
    category: 'Frontend',
    role: 'Interfaces ultra-rápidas e reativas',
    benefits: 'Proporciona uma navegação fluida no estilo app, com alta taxa de conversão e fidelização de usuários.'
  },
  {
    id: 'node-php',
    name: 'Node.js & PHP',
    category: 'Backend',
    role: 'Regras de negócio e processamento ágil',
    benefits: 'Arquiteturas robustas capazes de processar milhares de requisições por segundo com estabilidade total.'
  },
  {
    id: 'sql-db',
    name: 'PostgreSQL & MySQL',
    category: 'Banco de Dados',
    role: 'Persistência segura e integridade de dados',
    benefits: 'Bancos relacionais consolidados mundialmente, garantindo confiabilidade absoluta de transações e relatórios.'
  },
  {
    id: 'docker',
    name: 'Docker & Containers',
    category: 'Infra',
    role: 'Deploys isolados e infraestrutura escalável',
    benefits: 'Garante que o sistema rode com perfeita equivalência em desenvolvimento, homologação e servidores em nuvem.'
  },
  {
    id: 'apis',
    name: 'APIs & Integrações',
    category: 'Backend',
    role: 'Conexão entre plataformas e gateways',
    benefits: 'Seu sistema conectado ao WhatsApp, meios de pagamento (Pix/Cartão), ERPs e ferramentas que sua empresa já usa.'
  },
  {
    id: 'ai-automation',
    name: 'IA & Automação Inteligente',
    category: 'IA & Automação',
    role: 'Tomada de decisão autônoma e bots cognitivos',
    benefits: 'Elimina gargalos humanos, reduz custos de atendimento e traz inteligência preditiva para suas decisões diárias.'
  }
];

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<TechNode>(TECH_NODES[5]);

  return (
    <section id="tecnologias" className="relative py-20 lg:py-28 bg-[#01113E] overflow-hidden">
      {/* Background radial flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0068F5]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#10C4FC]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Integrado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Diferenciais Tecnológicos &amp; Integração
          </h2>
          <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
            Muito mais do que ferramentas isoladas: criamos uma engenharia coesa onde código moderno, banco de dados seguro, automações e inteligência artificial operam em perfeita sintonia.
          </p>
        </div>

        {/* Visual Architecture Flow Diagram */}
        <div className="rounded-3xl bg-[#010C2B] border border-[#172554] p-6 sm:p-10 shadow-2xl relative mb-12">
          
          {/* Header of the Diagram */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-[#172554] gap-4">
            <div>
              <span className="text-xs font-mono text-[#10C4FC] uppercase tracking-wider block">Arquitetura Soluções JFDeveloper</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                Fluxo Contínuo de Dados e Decisão Inteligente
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#A7B2C5] bg-[#011959] px-3 py-1.5 rounded-lg border border-[#172554]">
              <span className="w-2 h-2 rounded-full bg-[#10C4FC] animate-pulse" />
              <span>Pipeline Conectado &amp; Escalável</span>
            </div>
          </div>

          {/* 4 Connected Layers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            
            {/* Layer 1: Client & Interface */}
            <div className="p-5 rounded-2xl bg-[#011959]/90 border border-[#172554] relative group hover:border-[#0068F5] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#10C4FC] bg-[#010C2B] px-2 py-0.5 rounded border border-[#172554]">
                  01. FRONTEND
                </span>
                <Code2 className="w-5 h-5 text-[#0068F5]" />
              </div>
              <h4 className="text-base font-bold text-[#F1F5F9] mb-1">Interface &amp; Web</h4>
              <p className="text-xs text-[#A7B2C5] mb-4">Experiência visual rica, interações instantâneas e responsividade absoluta.</p>
              
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#F1F5F9] mr-1.5 mb-1.5 border border-[#172554]">
                  JavaScript
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#10C4FC] mr-1.5 mb-1.5 border border-[#172554]">
                  React
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#A7B2C5] mr-1.5 mb-1.5 border border-[#172554]">
                  Next.js
                </span>
              </div>
            </div>

            {/* Layer 2: Connectivity & APIs */}
            <div className="p-5 rounded-2xl bg-[#011959]/90 border border-[#172554] relative group hover:border-[#0068F5] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#10C4FC] bg-[#010C2B] px-2 py-0.5 rounded border border-[#172554]">
                  02. CONEXÃO
                </span>
                <Network className="w-5 h-5 text-[#10C4FC]" />
              </div>
              <h4 className="text-base font-bold text-[#F1F5F9] mb-1">APIs &amp; Gateways</h4>
              <p className="text-xs text-[#A7B2C5] mb-4">Trafego criptografado, webhooks em tempo real e orquestração de serviços.</p>
              
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#F1F5F9] mr-1.5 mb-1.5 border border-[#172554]">
                  APIs REST
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#10C4FC] mr-1.5 mb-1.5 border border-[#172554]">
                  Webhooks
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#A7B2C5] mr-1.5 mb-1.5 border border-[#172554]">
                  Microsserviços
                </span>
              </div>
            </div>

            {/* Layer 3: Backend & Data */}
            <div className="p-5 rounded-2xl bg-[#011959]/90 border border-[#172554] relative group hover:border-[#0068F5] transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#10C4FC] bg-[#010C2B] px-2 py-0.5 rounded border border-[#172554]">
                  03. CORE &amp; DADOS
                </span>
                <Server className="w-5 h-5 text-[#0068F5]" />
              </div>
              <h4 className="text-base font-bold text-[#F1F5F9] mb-1">Backend &amp; Banco</h4>
              <p className="text-xs text-[#A7B2C5] mb-4">Servidores otimizados, persistência segura e isolamento em containers.</p>
              
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#F1F5F9] mr-1.5 mb-1.5 border border-[#172554]">
                  Node.js / PHP
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#10C4FC] mr-1.5 mb-1.5 border border-[#172554]">
                  PostgreSQL
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#A7B2C5] mr-1.5 mb-1.5 border border-[#172554]">
                  MySQL &amp; Docker
                </span>
              </div>
            </div>

            {/* Layer 4: AI & Automation Engine */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#0032A7]/40 to-[#011959] border border-[#10C4FC]/50 relative group hover:border-[#10C4FC] transition-all shadow-lg shadow-[#0068F5]/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#10C4FC] bg-[#010C2B] px-2 py-0.5 rounded border border-[#10C4FC]/40">
                  04. INTELIGÊNCIA
                </span>
                <Bot className="w-5 h-5 text-[#10C4FC]" />
              </div>
              <h4 className="text-base font-bold text-[#F1F5F9] mb-1">IA &amp; Automação</h4>
              <p className="text-xs text-[#A7B2C5] mb-4">Modelos cognitivos, automação de rotinas manuais e relatórios preditivos.</p>
              
              <div className="space-y-1.5">
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#10C4FC] font-semibold mr-1.5 mb-1.5 border border-[#10C4FC]/30">
                  Modelos de IA
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#F1F5F9] mr-1.5 mb-1.5 border border-[#172554]">
                  Bots Inteligentes
                </span>
                <span className="inline-block text-[11px] font-mono px-2 py-1 rounded bg-[#010C2B] text-[#A7B2C5] mr-1.5 mb-1.5 border border-[#172554]">
                  Workflows
                </span>
              </div>
            </div>

          </div>

          {/* Interactive Tech Explorer */}
          <div className="mt-8 pt-8 border-t border-[#172554] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Tech Selectors */}
            <div className="lg:col-span-7 flex flex-wrap gap-2">
              {TECH_NODES.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveTech(tech)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                    activeTech.id === tech.id
                      ? 'bg-[#0068F5] text-white font-semibold shadow-md shadow-[#0068F5]/30 border border-[#10C4FC]'
                      : 'bg-[#01113E] text-[#A7B2C5] hover:text-[#F1F5F9] hover:bg-[#011959] border border-[#172554]'
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>

            {/* Active Tech Description Box */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-[#01113E] border border-[#0068F5]/40 shadow-inner">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold text-[#10C4FC] uppercase tracking-wider">
                  {activeTech.category}
                </span>
                <span className="text-xs text-[#A7B2C5] font-mono">{activeTech.role}</span>
              </div>
              <h4 className="text-base font-bold text-[#F1F5F9] mb-2">{activeTech.name}</h4>
              <p className="text-xs text-[#A7B2C5] leading-relaxed">
                {activeTech.benefits}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

