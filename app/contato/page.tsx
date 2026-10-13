'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle2, Mail, Phone, MapPin, Clock, Sparkles, MessageSquare } from 'lucide-react';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'web',
    budget: 'a-definir',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <div className="pt-28 pb-20 bg-[#010C2B] min-h-screen">
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

        {/* Section Heading */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contato &amp; Proposta Comercial</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Vamos iniciar o seu projeto hoje mesmo?
          </h1>

          <p className="text-lg text-[#A7B2C5] leading-relaxed">
            Preencha os campos abaixo ou entre em contato pelos nossos canais diretos. Analisamos sua demanda com sigilo e preparamos um escopo técnico transparente.
          </p>
        </div>

        {/* Form and Info Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Box */}
          <div className="lg:col-span-7 rounded-3xl bg-[#01113E] border border-[#172554] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#0068F5]/15 rounded-full blur-3xl pointer-events-none" />

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#0068F5]/20 border border-[#10C4FC] text-[#10C4FC] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                  Mensagem recebida com sucesso!
                </h3>
                <p className="text-sm text-[#A7B2C5] max-w-md mx-auto leading-relaxed">
                  Agradecemos seu interesse. Nossa liderança técnica analisará suas informações e entrará em contato em até 24 horas úteis.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-[#0068F5] text-white text-sm font-semibold rounded-xl mt-4 cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#A7B2C5] uppercase tracking-wider mb-2">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Ferreira"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:border-[#10C4FC] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A7B2C5] uppercase tracking-wider mb-2">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="joao@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:border-[#10C4FC] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#A7B2C5] uppercase tracking-wider mb-2">
                      WhatsApp ou Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:border-[#10C4FC] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A7B2C5] uppercase tracking-wider mb-2">
                      Qual serviço procura?
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:border-[#10C4FC] focus:outline-none transition-colors"
                    >
                      <option value="web">Desenvolvimento Web &amp; Landing Page</option>
                      <option value="sistemas">Sistemas Web &amp; Aplicações SaaS</option>
                      <option value="automacao">Automação de Processos &amp; Rotinas</option>
                      <option value="ia">Inteligência Artificial &amp; Chatbots</option>
                      <option value="apis">APIs, Gateways e Integrações</option>
                      <option value="manutencao">Manutenção e Otimização de Sistemas</option>
                      <option value="outro">Outro Tipo de Projeto</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A7B2C5] uppercase tracking-wider mb-2">
                    Descreva sua necessidade ou objetivo *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte sobre sua empresa, o problema que precisa resolver ou a ideia que deseja construir..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:border-[#10C4FC] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#0068F5] to-[#10C4FC] hover:from-[#10C4FC] hover:to-[#0068F5] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0068F5]/30 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processando solicitação...</span>
                  ) : (
                    <>
                      <span>Enviar e Solicitar Orçamento</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & WhatsApp Direct */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#01113E] border border-[#172554] space-y-6">
              <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                Canais de Atendimento
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#011959] border border-[#172554] flex items-center justify-center text-[#10C4FC] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A7B2C5]">E-mail Oficial</span>
                    <a href="mailto:contato@jfdeveloper.com.br" className="text-[#F1F5F9] hover:text-[#10C4FC] font-medium">
                      contato@jfdeveloper.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#011959] border border-[#172554] flex items-center justify-center text-[#10C4FC] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A7B2C5]">WhatsApp Direto</span>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-[#F1F5F9] hover:text-[#10C4FC] font-medium">
                      +55 (11) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#011959] border border-[#172554] flex items-center justify-center text-[#10C4FC] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A7B2C5]">Tempo de Resposta</span>
                    <span className="text-[#F1F5F9] font-medium">
                      Em média até 24 horas úteis
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#011959] border border-[#172554] flex items-center justify-center text-[#10C4FC] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-[#A7B2C5]">Atuação</span>
                    <span className="text-[#F1F5F9] font-medium">
                      Projetos remotos para empresas de todo o Brasil
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-[#172554]">
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20com%20a%20JFDeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#10C4FC]/15 hover:bg-[#10C4FC]/25 border border-[#10C4FC]/40 text-[#10C4FC] font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar agora no WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

