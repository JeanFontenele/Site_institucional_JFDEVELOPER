import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ShieldCheck, Target, Users, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Sobre Nós | JFDeveloper',
  description: 'Conheça a JFDeveloper, nossa história, metodologia e compromisso com soluções sob medida em desenvolvimento de software, automação e inteligência artificial.',
};

export default function SobrePage() {
  return (
    <div className="pt-28 pb-16 bg-[#010C2B] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#A7B2C5] hover:text-[#10C4FC] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>

        {/* Hero of Subpage */}
        <div className="max-w-4xl space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Institucional &amp; Propósito</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Tecnologia moderna construída de perto para o seu negócio.
          </h1>

          <p className="text-lg text-[#A7B2C5] leading-relaxed">
            A JFDeveloper é uma empresa de tecnologia focada em criar soluções sob medida que simplificam rotinas, geram vendas e automatizam processos repetitivos. Sem processos engessados ou distanciamento: trabalhamos lado a lado com nossos clientes.
          </p>
        </div>

        {/* Pillars Detail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          <div className="p-8 rounded-2xl bg-[#01113E] border border-[#172554] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0068F5]/20 text-[#10C4FC] flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
              Parceria Transparente
            </h3>
            <p className="text-sm text-[#A7B2C5] leading-relaxed">
              Tratamos o seu projeto como se fosse o nosso próprio. Alinhamentos diretos, sem intermediários comerciais, garantindo que o escopo seja cumprido com rigor.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#01113E] border border-[#172554] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0068F5]/20 text-[#10C4FC] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
              Foco no Problema Real
            </h3>
            <p className="text-sm text-[#A7B2C5] leading-relaxed">
              Não empurramos soluções genéricas que você não precisa. Cada linha de código ou modelo de inteligência artificial é direcionado para resolver gargalos concretos.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#01113E] border border-[#172554] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0068F5]/20 text-[#10C4FC] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
              Velocidade &amp; Estabilidade
            </h3>
            <p className="text-sm text-[#A7B2C5] leading-relaxed">
              Utilizamos frameworks modernos como Next.js, React e Docker para entregar produtos rápidos de carregar, altamente seguros e fáceis de manter.
            </p>
          </div>

        </div>

        {/* Commitment Statement */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#011959]/60 border border-[#172554] mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-6">
            Por que escolher a JFDeveloper para seu projeto?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Comunicação diária via WhatsApp e alinhamentos rápidos',
              'Projetos 100% autorais e código de posse exclusiva do cliente',
              'Documentação clara e arquitetura preparada para novas integrações',
              'Segurança cibernética e boas práticas de proteção de dados',
              'Suporte preventivo contínuo após o lançamento',
              'Treinamento prático para sua equipe operar as ferramentas'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-sm text-[#F1F5F9]">
                <CheckCircle2 className="w-4 h-4 text-[#10C4FC] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTA />
    </div>
  );
}

