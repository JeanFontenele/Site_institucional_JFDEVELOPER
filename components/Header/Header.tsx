'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import ContactModal from '@/components/ContactModal';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '/#inicio' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Contato', href: '/#contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Impedir a rolagem do fundo quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#010C2B]/90 backdrop-blur-md border-b border-[#172554] shadow-lg shadow-[#010C2B]/50 py-3.5'
            : 'bg-[#010C2B]/60 backdrop-blur-sm border-b border-[#172554]/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10C4FC] rounded-lg"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-[#01113E] border border-[#172554] flex items-center justify-center transition-transform group-hover:scale-105 group-hover:border-[#10C4FC]/50 shadow-md">
              <Image
                src="/logo/Logo_JFDEVELOPER.png"
                alt="Logo JFDeveloper"
                width={44}
                height={44}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                  JF<span className="text-[#0068F5] group-hover:text-[#10C4FC] transition-colors">DEVELOPER</span>
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#A7B2C5] font-medium hidden sm:block">
                Tecnologia &amp; Inteligência Artificial
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isSubpage = pathname === item.href.replace('/#', '/');
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSubpage
                      ? 'text-[#10C4FC] bg-[#011959]'
                      : 'text-[#A7B2C5] hover:text-[#F1F5F9] hover:bg-[#011959]/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="relative group overflow-hidden px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white transition-all duration-300 shadow-md shadow-[#0068F5]/25 hover:shadow-lg hover:shadow-[#10C4FC]/25 cursor-pointer"
            >
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0068F5] via-[#0055cc] to-[#0032A7] group-hover:from-[#10C4FC] group-hover:to-[#0068F5] transition-all duration-300" />
              {/* Inner subtle glow */}
              <div className="relative flex items-center gap-2">
                <span>Solicitar orçamento</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0068F5] text-white"
            >
              Orçamento
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#A7B2C5] hover:text-[#F1F5F9] hover:bg-[#011959] border border-[#172554] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#010C2B]/98 backdrop-blur-xl border-t border-[#172554] p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#10C4FC] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Navegação Principal</span>
              </p>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-[#F1F5F9] hover:bg-[#011959] border border-transparent hover:border-[#172554] transition-all"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#10C4FC]" />
                </Link>
              ))}

              <div className="pt-4 border-t border-[#172554]/60 mt-4 space-y-2">
                <p className="text-xs text-[#A7B2C5] px-2">Subpáginas Detalhadas:</p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link href="/sobre" onClick={handleNavClick} className="p-2.5 rounded-lg bg-[#01113E] text-[#A7B2C5] hover:text-[#10C4FC]">
                    → Sobre Nós
                  </Link>
                  <Link href="/servicos" onClick={handleNavClick} className="p-2.5 rounded-lg bg-[#01113E] text-[#A7B2C5] hover:text-[#10C4FC]">
                    → Nossos Serviços
                  </Link>
                  <Link href="/projetos" onClick={handleNavClick} className="p-2.5 rounded-lg bg-[#01113E] text-[#A7B2C5] hover:text-[#10C4FC]">
                    → Portfólio
                  </Link>
                  <Link href="/contato" onClick={handleNavClick} className="p-2.5 rounded-lg bg-[#01113E] text-[#A7B2C5] hover:text-[#10C4FC]">
                    → Falar Direto
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#172554]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0068F5] to-[#10C4FC] text-white font-semibold text-sm shadow-lg shadow-[#0068F5]/30 cursor-pointer"
              >
                <span>Solicitar orçamento sem compromisso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Quote / Contact Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

