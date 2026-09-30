export const company = {
  name: 'DEYI Consultants',
  phone: '(949) 656-6134',
  phoneHref: 'tel:+19496566134',
  email: 'info@deyiconsultants.com',
  address: '3943 Irvine Blvd #765, Irvine, CA 92602',
};

export const services = [
  {
    id: 'residential', title: 'Residential Structures', icon: 'home',
    short: 'Structural engineering for new homes, additions, and remodels.',
    description: 'From a new residence to changes within an existing home, we develop structural solutions around your project’s requirements and existing conditions.',
    details: ['Structural plans and calculations', 'Framing and foundation design', 'Structural support for additions and remodels'],
  },
  {
    id: 'commercial', title: 'Commercial Structures', icon: 'building',
    short: 'Structural design and evaluation for commercial projects.',
    description: 'We help owners and project teams address the structural requirements of commercial buildings, including new construction and modifications to existing structures.',
    details: ['Structural systems and connections', 'Evaluation of proposed structural modifications', 'Coordination with the project team'],
  },
  {
    id: 'outdoor', title: 'Outdoor Structures', icon: 'layers',
    short: 'Engineering for retaining walls, pergolas, and playground structures.',
    description: 'We focus on the structural elements that support outdoor spaces, with engineering tailored to the structure, site conditions, and project scope.',
    details: ['Retaining wall structural design', 'Pergola and outdoor structure supports', 'Playground structural engineering'],
  },
  {
    id: 'evaluation', title: 'Structural Evaluations', icon: 'search',
    short: 'Assessments of existing structures, including post-fire conditions.',
    description: 'We assess structural conditions and help you understand the next steps. The evaluation scope and any additional investigation are established for each project.',
    details: ['Site observations and structural assessment', 'Post-fire structural evaluations', 'Findings and structural repair recommendations'],
  },
  {
    id: 'permit', title: 'Permit Application Assistance', icon: 'file',
    short: 'Help with structural submittals and plan-check responses.',
    description: 'We can help you navigate the permit application process for the structural scope of your project, from preparing engineering documents to responding to structural plan-check comments.',
    details: ['Structural submittal preparation', 'Permit application assistance', 'Structural plan-check responses and revisions'],
  },
  {
    id: 'construction', title: 'Construction-Phase Support', icon: 'hardhat',
    short: 'Structural guidance as your project moves from plans to the field.',
    description: 'We support the structural scope during construction through coordination, responses to field questions, and site observations as agreed in your proposal.',
    details: ['Responses to structural field questions', 'Review of structural submittals', 'Site observations within the agreed scope'],
  },
] as const;

export const steps = [
  { title: 'Tell Us About Your Project', description: 'Start with a free 15–30 minute phone consultation. Share your project location, goals, and any existing plans or photos.', label: 'Consultation' },
  { title: 'Define The Structural Scope', description: 'We review the available information and discuss the engineering scope, required inputs, fees, and anticipated schedule.', label: 'Scope & Proposal' },
  { title: 'Develop The Engineering', description: 'We prepare the structural plans, calculations, or evaluation identified in your proposal and coordinate with your project team.', label: 'Structural Engineering' },
  { title: 'Support The Permit Process', description: 'When included in the scope, we assist with the permit application and address structural plan-check comments. Review timing and approval are determined by the local authority.', label: 'Permit Assistance' },
  { title: 'Stay Connected During Construction', description: 'We help resolve structural questions and provide the construction-phase support outlined in your agreement.', label: 'Construction Support' },
];

export const faqs = [
  { question: 'What Kinds Of Services Does DEYI Provide?', answer: 'We provide structural engineering and related services for residential, commercial, and outdoor structures, along with structural evaluations, permit application assistance, and construction-phase structural support.' },
  { question: 'Can You Help With A Permit Application?', answer: 'Yes. We can assist with permit applications for the structural scope, prepare structural engineering documents, and respond to structural plan-check comments. The local permitting authority determines approval and review timing.' },
  { question: 'What Should I Have Ready For Our First Call?', answer: 'Your project address or city, a short description of the proposed work, and your target schedule are a good starting point. Let us know if you have existing plans, site photos, or plan-check comments available.' },
  { question: 'How Much Will The Engineering Cost?', answer: 'Fees depend on the project scope, complexity, existing conditions, and required deliverables. The initial phone consultation is free, and we discuss the proposed scope and fee before starting engineering work.' },
];
