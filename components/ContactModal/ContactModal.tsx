'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService = '' }: ContactModalProps) {
  //constante de estado para o formulario com valores iniciais vazios.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: defaultService || 'web',
    budget: 'a-definir',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceType: defaultService }));
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio para o backend / endpoint da API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'web',
      budget: 'a-definir',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010C2B]/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-xl bg-[#01113E] border border-[#172554] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#0068F5]/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Neon Ambient Highlights */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#0068F5]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#10C4FC]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#A7B2C5] hover:text-[#F1F5F9] hover:bg-[#011959] rounded-lg transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#0068F5]/20 border border-[#10C4FC]/40 text-[#10C4FC] rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
              Mensagem enviada com sucesso!
            </h3>
            <p className="text-[#A7B2C5] text-sm max-w-md mx-auto leading-relaxed">
              Obrigado pelo contato! Nossa equipe técnica já recebeu seus dados e retornará com uma proposta personalizada em até 24 horas úteis.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#0068F5] hover:bg-[#0055cc] text-white font-medium rounded-xl transition-all shadow-lg shadow-[#0068F5]/25"
              >
                Concluir
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#10C4FC] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JFDeveloper • Solicitação de Proposta</span>
            </div>
            <h2 className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-2">
              Vamos construir sua ideia?
            </h2>
            <p className="text-xs sm:text-sm text-[#A7B2C5] mb-6">
              Preencha os dados abaixo. Entraremos em contato com um plano de ação e estimativa sob medida.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#A7B2C5] mb-1.5">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Silva"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm placeholder-[#A7B2C5]/50 focus:outline-none focus:border-[#10C4FC] focus:ring-1 focus:ring-[#10C4FC] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A7B2C5] mb-1.5">
                    Seu E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nome@email.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm placeholder-[#A7B2C5]/50 focus:outline-none focus:border-[#10C4FC] focus:ring-1 focus:ring-[#10C4FC] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#A7B2C5] mb-1.5">
                    WhatsApp ou Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm placeholder-[#A7B2C5]/50 focus:outline-none focus:border-[#10C4FC] focus:ring-1 focus:ring-[#10C4FC] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A7B2C5] mb-1.5">
                    Tipo de Solução
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm focus:outline-none focus:border-[#10C4FC] focus:ring-1 focus:ring-[#10C4FC] transition-colors"
                  >
                    <option value="web">Desenvolvimento Web</option>
                    <option value="sistemas">Sistemas &amp; Aplicações SaaS</option>
                    <option value="automacao">Automação de Processos</option>
                    <option value="ia">Inteligência Artificial &amp; Chatbots</option>
                    <option value="apis">APIs e Integrações</option>
                    <option value="manutencao">Manutenção e Evolução</option>
                    <option value="outro">Outro Projeto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#A7B2C5] mb-1.5">
                  Detalhes do Projeto ou Necessidade *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Descreva brevemente o que você precisa para seu negócio (ex: criar um sistema de clientes com agendamento e IA)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#F1F5F9] text-sm placeholder-[#A7B2C5]/50 focus:outline-none focus:border-[#10C4FC] focus:ring-1 focus:ring-[#10C4FC] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#0068F5] to-[#0032A7] hover:from-[#10C4FC] hover:to-[#0068F5] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#0068F5]/30 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Enviando proposta...
                    </span>
                  ) : (
                    <>
                      <span>Enviar Solicitação de Orçamento</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-[#A7B2C5]/70 text-center flex items-center justify-center gap-1">
                <AlertCircle className="w-3 h-3 text-[#10C4FC]" />
                Seus dados estão protegidos. Não enviamos spam.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

