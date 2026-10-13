export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'sistemas' | 'web' | 'ia-automacao';
  categoryLabel: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  metrics?: string;
  demoUrl?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  segment: string;
  testimonial: string;
  isPlaceholder: boolean;
  rating: number;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'desenvolvimento-web',
    title: 'Desenvolvimento Web',
    description: 'Criação de websites institucionais, landing pages de alta conversão e portais corporativos modernos, ultra-rápidos e totalmente responsivos.',
    iconName: 'Globe',
    features: ['Design responsivo e mobile-first', 'SEO técnico e alta performance', 'Next.js, React e TypeScript'],
    tag: 'Web & Presença'
  },
  {
    id: 'sistemas-aplicacoes',
    title: 'Sistemas e Aplicações',
    description: 'Desenvolvimento de plataformas web sob medida, SaaS, painéis administrativos e sistemas de gestão desenhados exatamente para sua rotina de negócios.',
    iconName: 'Layers',
    features: ['Arquitetura escalável e segura', 'Painéis administrativos intuitivos', 'Gestão de permissões e relatórios'],
    tag: 'Sistemas Sob Medida'
  },
  {
    id: 'automacao',
    title: 'Automação de Processos',
    description: 'Elimine tarefas manuais repetitivas com fluxos de automação inteligentes que integram ferramentas, sincronizam dados e reduzem custos operacionais.',
    iconName: 'Zap',
    features: ['Integração contínua entre softwares', 'Disparos automáticos e webhooks', 'Economia comprovada de tempo'],
    tag: 'Produtividade'
  },
  {
    id: 'inteligencia-artificial',
    title: 'Inteligência Artificial',
    description: 'Implementação prática de IA no seu negócio: agentes inteligentes, integração com LLMs, análise de dados e assistentes automatizados para atendimento.',
    iconName: 'Bot',
    features: ['Agentes autônomos e chatbots inteligentes', 'Processamento de linguagem natural (NLP)', 'Análise preditiva e automação cognitiva'],
    tag: 'Inovação & IA'
  },
  {
    id: 'apis-integracoes',
    title: 'APIs e Integrações',
    description: 'Conectamos seus sistemas a meios de pagamento, CRMs, ERPs, mensageria e serviços de terceiros através de APIs REST e GraphQL robustas e documentadas.',
    iconName: 'Network',
    features: ['Gateways de pagamento seguros', 'Sincronização de dados em tempo real', 'Webhooks e endpoints otimizados'],
    tag: 'Conectividade'
  },
  {
    id: 'manutencao-evolucao',
    title: 'Manutenção e Evolução',
    description: 'Suporte técnico contínuo, refatoração de código, melhorias de velocidade, atualizações de segurança e evolução contínua para sua aplicação nunca parar.',
    iconName: 'Cpu',
    features: ['Monitoramento e correção preventiva', 'Auditoria de segurança e performance', 'Evolução ágil de novas funcionalidades'],
    tag: 'Suporte Contínuo'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'nexus-crm',
    title: 'Nexus CRM Empresarial',
    category: 'sistemas',
    categoryLabel: 'Sistema Web & Gestão',
    description: 'Plataforma completa de gestão de relacionamento com clientes, funil de vendas automatizado e relatórios dinâmicos de faturamento.',
    fullDescription: 'Desenvolvido para centralizar o pipeline de vendas de equipes B2B com pontuação preditiva de leads, automação de e-mails e métricas em tempo real.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    image: '/projects/nexus-crm.svg',
    metrics: '+45% em velocidade de atendimento',
    demoUrl: '#'
  },
  {
    id: 'aura-ecommerce',
    title: 'Aura E-Commerce Pro',
    category: 'web',
    categoryLabel: 'E-commerce & Vendas',
    description: 'Loja virtual de alta performance com catálogo inteligente, cálculo de frete dinâmico e checkout transparente em menos de 1 segundo.',
    fullDescription: 'Experiência de compra moderna focada em conversão móvel, com integração direta a múltiplos meios de pagamento e gestão de estoque em tempo real.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    image: '/projects/aura-ecommerce.svg',
    metrics: 'Carregamento em 0.6s / 99.9% uptime',
    demoUrl: '#'
  },
  {
    id: 'inovatech-institucional',
    title: 'InovaTech Soluções',
    category: 'web',
    categoryLabel: 'Site Institucional',
    description: 'Portal institucional corporativo para empresa de tecnologia e cloud computing, com arquitetura moderna e design dark tech refinado.',
    fullDescription: 'Desenvolvimento voltado para posicionamento de autoridade, apresentação de cases de sucesso corporativos e geração de leads qualificados.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/inovatech.svg',
    metrics: 'Nota 98+ no Google PageSpeed',
    demoUrl: '#'
  },
  {
    id: 'datapulse-ai',
    title: 'DataPulse AI Analytics',
    category: 'ia-automacao',
    categoryLabel: 'Inteligência Artificial & Dados',
    description: 'Dashboard analítico com modelos de inteligência artificial para previsão de demanda, detecção de anomalias e automações operacionais.',
    fullDescription: 'Aplicação web avançada que processa grandes volumes de eventos em tempo real, gerando insights visuais e disparando rotinas automáticas de decisão.',
    technologies: ['Python / Node.js', 'React', 'Docker', 'APIs REST', 'PostgreSQL'],
    image: '/projects/datapulse.svg',
    metrics: 'Processamento de 4M+ eventos/dia',
    demoUrl: '#'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Entendimento',
    description: 'Mergulhamos no seu modelo de negócio, identificando objetivos estratégicos, necessidades reais e os gargalos a serem solucionados.',
    highlight: 'Diagnóstico estratégico sem jargões desnecessários.'
  },
  {
    step: '02',
    title: 'Planejamento',
    description: 'Definimos a arquitetura técnica, wireframes, escolha das melhores ferramentas, cronograma claro e orçamento detalhado.',
    highlight: 'Escopo transparente e planejamento de entregas.'
  },
  {
    step: '03',
    title: 'Desenvolvimento',
    description: 'Construção da solução utilizando tecnologias modernas, padrões de código limpo, componentização e reuniões de alinhamento frequentes.',
    highlight: 'Código robusto, modular e documentado.'
  },
  {
    step: '04',
    title: 'Testes',
    description: 'Validação rigorosa de responsividade, segurança de ponta, compatibilidade entre dispositivos, performance e experiência do usuário.',
    highlight: 'Garantia de qualidade antes de qualquer lançamento.'
  },
  {
    step: '05',
    title: 'Entrega',
    description: 'Publicação em ambiente de produção seguro, treinamento para sua equipe utilizar o sistema e entrega de acessos e documentação completa.',
    highlight: 'Transição suave com zero dor de cabeça.'
  },
  {
    step: '06',
    title: 'Suporte e Evolução',
    description: 'Acompanhamento pós-lançamento, monitoramento preventivo e suporte contínuo para adicionar novos recursos conforme seu negócio expande.',
    highlight: 'Parceria de longo prazo para seu crescimento contínuo.'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'depoimento-1',
    clientName: 'Carlos Mendonça',
    role: 'Diretor Operacional',
    company: 'Logística & Distribuição',
    segment: 'Setor de Transporte',
    testimonial: 'A solução desenvolvida pela JFDeveloper transformou nossos processos manuais em um sistema ágil e integrado. O atendimento próximo e a agilidade nas respostas fizeram toda a diferença.',
    isPlaceholder: true,
    rating: 5
  },
  {
    id: 'depoimento-2',
    clientName: 'Mariana Alencar',
    role: 'Fundadora & CEO',
    company: 'Studio Digital',
    segment: 'Varejo & Serviços',
    testimonial: 'Estávamos procurando uma equipe técnica que entendesse o que precisávamos sem burocracia excessiva. A entrega foi pontual, com design impecável e alta velocidade.',
    isPlaceholder: true,
    rating: 5
  },
  {
    id: 'depoimento-3',
    clientName: 'Eduardo Silveira',
    role: 'Gerente de Tecnologia',
    company: 'Fintech Parceira',
    segment: 'Serviços Financeiros',
    testimonial: 'A integração de APIs e automações implementadas garantiu estabilidade e segurança para nosso fluxo diário. Profissionalismo e domínio técnico do início ao fim.',
    isPlaceholder: true,
    rating: 5
  }
];

export const TECH_STACK_ITEMS = [
  { name: 'JavaScript', category: 'Linguagem', desc: 'Dinamismo e versatilidade' },
  { name: 'Node.js', category: 'Backend', desc: 'Servidores assíncronos e escaláveis' },
  { name: 'React', category: 'Frontend', desc: 'Interfaces reativas e fluidas' },
  { name: 'PHP', category: 'Backend', desc: 'Aplicações web consolidadas' },
  { name: 'PostgreSQL', category: 'Banco de Dados', desc: 'Dados relacionais de alta confiabilidade' },
  { name: 'MySQL', category: 'Banco de Dados', desc: 'Agilidade e robustez estrutural' },
  { name: 'Docker', category: 'DevOps', desc: 'Containers leves e deploys isolados' },
  { name: 'APIs REST & GraphQL', category: 'Integração', desc: 'Conectividade e microsserviços' },
  { name: 'Inteligência Artificial', category: 'Inovação', desc: 'Modelos LLM e automação cognitiva' },
  { name: 'Automação & Webhooks', category: 'Processos', desc: 'Fluxos de dados sem intervenção manual' }
];

