'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Layers, Sparkles, CheckCircle2, X, ArrowRight, Eye } from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '@/data/siteData';
import ContactModal from '@/components/ContactModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const filteredProjects = activeFilter === 'todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <>
      <section id="projetos" className="relative py-20 lg:py-28 bg-[#010C2B] overflow-hidden">
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#0068F5]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#10C4FC]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#011959] border border-[#172554] text-[#10C4FC] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfólio em Destaque</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F1F5F9] font-[family-name:var(--font-heading)] leading-tight">
              Projetos desenvolvidos
            </h2>
            <p className="text-[#A7B2C5] text-base sm:text-lg leading-relaxed">
              Conheça algumas das arquiteturas e aplicações concebidas pela JFDeveloper. Projetos criados com foco em interface refinada, desempenho veloz e retorno de negócios.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'todos', label: 'Todos os Projetos' },
              { id: 'sistemas', label: 'Sistemas & CRM' },
              { id: 'web', label: 'Web & E-Commerce' },
              { id: 'ia-automacao', label: 'IA & Automação' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#0068F5] text-white shadow-md shadow-[#0068F5]/30'
                    : 'bg-[#01113E] text-[#A7B2C5] hover:text-[#F1F5F9] hover:bg-[#011959] border border-[#172554]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project: ProjectItem) => (
              <div
                key={project.id}
                className="group relative flex flex-col rounded-2xl bg-[#01113E] border border-[#172554] hover:border-[#10C4FC]/50 transition-all duration-300 overflow-hidden shadow-xl shadow-[#010C2B]/60 glow-card"
              >
                {/* Mockup / Image Container */}
                <div className="relative aspect-[16/10] w-full bg-[#010C2B] overflow-hidden border-b border-[#172554]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01113E] via-transparent to-transparent opacity-80" />

                  {/* Badge Category */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold text-[#F1F5F9] px-3 py-1 rounded-full bg-[#010C2B]/85 backdrop-blur-md border border-[#172554]">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Quick view button on overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#010C2B]/40 backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0068F5] hover:bg-[#10C4FC] hover:text-[#010C2B] text-white text-xs font-semibold shadow-lg transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Ver detalhes do projeto</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)] mb-2 group-hover:text-[#10C4FC] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#A7B2C5] text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#011959] border border-[#172554] text-[#A7B2C5]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#172554] flex items-center justify-between">
                    <span className="text-xs text-[#10C4FC] font-medium">
                      {project.metrics}
                    </span>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F1F5F9] group-hover:text-[#10C4FC] transition-colors cursor-pointer"
                    >
                      <span>Ver projeto</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subpage Link */}
          <div className="mt-14 text-center">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#01113E] border border-[#172554] hover:border-[#0068F5] text-sm font-semibold text-[#F1F5F9] hover:text-[#10C4FC] transition-all"
            >
              <span>Acessar página completa de cases e portfólio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#010C2B]/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#01113E] border border-[#172554] rounded-2xl overflow-hidden shadow-2xl">
            {/* Header / Image banner */}
            <div className="relative aspect-[16/9] w-full bg-[#010C2B]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#010C2B]/80 text-[#A7B2C5] hover:text-white border border-[#172554] transition-colors"
                aria-label="Fechar detalhes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#10C4FC]">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs text-[#A7B2C5] font-mono bg-[#010C2B] px-2.5 py-1 rounded border border-[#172554]">
                  {selectedProject.metrics}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#F1F5F9] font-[family-name:var(--font-heading)]">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-[#A7B2C5] leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              <div>
                <span className="block text-xs font-mono text-[#F1F5F9] mb-2 uppercase tracking-wider">
                  Stack Tecnológica Utilizada:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-[#011959] border border-[#172554] text-xs font-mono text-[#10C4FC]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setContactModalOpen(true);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#0068F5] hover:bg-[#10C4FC] hover:text-[#010C2B] text-white text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer"
                >
                  Quero um projeto semelhante para minha empresa
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-[#010C2B] border border-[#172554] text-[#A7B2C5] hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}

