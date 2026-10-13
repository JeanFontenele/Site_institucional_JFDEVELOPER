'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Eye, X } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/data/siteData';
import ContactModal from '@/components/ContactModal';
import CTA from '@/components/CTA';

export default function ProjetosPage() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

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
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cases &amp; Demonstrações</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
            Nossos Projetos &amp; Portfólio
          </h1>

          <p className="text-lg text-[#A7B2C5] leading-relaxed">
            Uma seleção de aplicações web, sistemas de gestão, e-commerces e módulos de inteligência artificial projetados pela JFDeveloper.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos os Projetos' },
            { id: 'sistemas', label: 'Sistemas & CRM' },
            { id: 'web', label: 'Web & E-Commerce' },
            { id: 'ia-automacao', label: 'IA & Automação' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#0068F5] text-white shadow-md'
                  : 'bg-[#01113E] text-[#A7B2C5] hover:text-white border border-[#172554]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#01113E] border border-[#172554] hover:border-[#10C4FC]/50 overflow-hidden shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-[#010C2B] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01113E] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#010C2B]/80 backdrop-blur-md border border-[#172554]">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#A7B2C5] leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 rounded bg-[#011959] border border-[#172554] text-[#A7B2C5]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#172554] flex items-center justify-between">
                  <span className="text-xs text-[#10C4FC] font-semibold">{project.metrics}</span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F5F9] hover:text-[#10C4FC] cursor-pointer"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010C2B]/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#01113E] border border-[#172554] rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-4">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#010C2B] text-[#A7B2C5] hover:text-white border border-[#172554]"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-[#10C4FC] uppercase">{selectedProject.categoryLabel}</span>
            <h2 className="text-2xl font-bold text-[#F1F5F9]">{selectedProject.title}</h2>
            <p className="text-sm text-[#A7B2C5]">{selectedProject.fullDescription}</p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setContactModalOpen(true);
                }}
                className="w-full py-3 bg-[#0068F5] hover:bg-[#10C4FC] hover:text-[#010C2B] text-white font-semibold text-sm rounded-xl transition-all"
              >
                Solicitar projeto semelhante
              </button>
            </div>
          </div>
        </div>
      )}

      <CTA />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}

