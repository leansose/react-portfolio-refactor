import { splitLines } from '../utils/text';

export interface Project {
  type: string;
  title: string;
  keywords: string[];
  description: string[];
  technologies: string[];
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    type: 'Manual Testing',
    title: 'SauceDemo E-commerce Website',
    keywords: ['Test Design', 'Bug Reporting', 'Jira Workflow'],
    description: splitLines(`Designed and executed 16 manual test cases covering
      login, cart and checkout flows using BDD (Gherkin),
      managing the full test workflow in Jira. Reported a
      bug with detailed reproduction steps. Extended with
      Selenium and Python automation for core flows.`),
    technologies: ['Jira', 'Excel', 'Selenium', 'Python'],
    repoUrl: 'https://github.com/leansose/manual-qa-saucedemo-project',
  },
  {
    type: 'Automation',
    title: 'Playwright UI Automation Framework',
    keywords: ['Test Automation', 'POM', 'TypeScript'],
    description: splitLines(`Built a Playwright/TypeScript UI automation framework
      covering 20+ end-to-end test scenarios, including
      authentication, products, cart, checkout and payment.
      Applied Page Object Model (POM), reusable fixtures,
      dynamic test data with Faker, and Git/GitHub for
      version control.`),
    technologies: ['Jira', 'GitHub', 'Playwright', 'TypeScript', 'Faker'],
    repoUrl: 'https://github.com/leansose/playwright-automation-exercise',
  },
  {
    type: 'API Testing',
    title: 'DummyJSON API',
    keywords: ['Postman', 'Collections', 'Test Scripts'],
    description: splitLines(`Built a Postman collection covering 5 modules
      (Users, Auth, Cart, Products, Edge Cases), including
      negative tests. Implemented environment variables
      (base URL, endpoints) for parameterization and
      scalability. Validated status codes and JSON
      responses across multiple scenarios.`),
    technologies: ['Postman', 'JSON', 'JavaScript'],
    repoUrl: 'https://github.com/leansose/api-testing-portfolio',
  },
  {
    type: 'AI Testing',
    title: 'AI Testing Lab',
    keywords: ['AI-assisted Testing', 'LLMs', 'QA Review'],
    description: splitLines(`Exploring the use of AI and LLMs to support and
      improve software testing activities. The lab
      documents AI-generated test ideas, exploratory
      testing findings, and human QA review.

      Work in progress.`),
    technologies: ['LLMs', 'Playwright MCP', 'VS Code', 'GitHub'],
    repoUrl: 'https://github.com/leansose/ai-driven-testing-lab',
  },
  {
    type: 'Frontend Development',
    title: 'Portfolio',
    keywords: ['HTML', 'CSS', 'Responsive Design'],
    description: splitLines(`A personal portfolio website developed as the final
      project of the Bytes4Future PowerUp frontend course.
      The project presents my background, technical skills,
      musical experience, and testing projects, with a focus
      on clean structure, responsive layouts, and
      interactive UI elements.

      Work in progress.`),
    technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'VS Code'],
    repoUrl: 'https://github.com/leansose/bytes4future-front-end',
  },
  {
    type: 'Python Project',
    title: 'Rock Paper Scissors',
    keywords: ['Python', 'OOP', 'Game Development'],
    description: splitLines(`A simple, interactive Rock, Paper, Scissors game developed in Python using
      object-oriented programming.
      The rules are stored in a JSON file, allowing for easy modification and future
      expansion.`),
    technologies: ['Python', 'JSON', 'GitHub', 'PyCharm'],
    repoUrl: 'https://github.com/leansose/RockPaperScissors',
  },
];
