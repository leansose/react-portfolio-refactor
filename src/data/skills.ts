export interface SkillGroup {
  icon: string;
  title: string;
  unit: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: '🧪',
    title: 'Manual Testing',
    unit: 'skills',
    items: [
      'Test Case Design',
      'Bug Reporting',
      'Exploratory Testing',
      'Regression Testing',
      'Smoke Testing',
      'Sanity Testing',
      'UAT Support',
      'E2E Testing',
      'BDD / Gherkin',
    ],
  },
  {
    icon: '⚙️',
    title: 'Automation',
    unit: 'tools',
    items: ['Playwright', 'Selenium WebDriver', 'Selenium IDE', 'Robot Framework', 'Cypress'],
  },
  {
    icon: '🔌',
    title: 'API & Performance',
    unit: 'tools',
    items: ['Postman', 'JMeter'],
  },
  {
    icon: '📋',
    title: 'Test Management',
    unit: 'tools',
    items: ['Jira', 'Xray', 'Bugzilla', 'Zephyr', 'Trello'],
  },
  {
    icon: '💻',
    title: 'Programming & Databases',
    unit: 'technologies',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    icon: '💻',
    title: 'Web Development',
    unit: 'tools',
    items: ['HTML', 'CSS', 'Tailwind'],
  },
  {
    icon: '🔄',
    title: 'Methodologies',
    unit: 'areas',
    items: ['Agile', 'Scrum', 'Kanban', 'SDLC', 'STLC', 'CI/CD', 'GitHub'],
  },
  {
    icon: '🤹‍♂️',
    title: 'Soft Skills',
    unit: 'areas',
    items: [
      'Communication',
      'Teamwork',
      'Leadership',
      'Adaptability',
      'Problem Solving',
      'Critical Thinking',
      'Empathy',
      'Self-awareness',
      'Creativity',
      'Resilience',
      'Continuous Learning',
    ],
  },
];
