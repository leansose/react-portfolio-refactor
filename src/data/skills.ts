import type { SvgIconProps } from '@mui/material';
import Autorenew from '@mui/icons-material/Autorenew';
import Assignment from '@mui/icons-material/Assignment';
import Code from '@mui/icons-material/Code';
import ElectricalServices from '@mui/icons-material/ElectricalServices';
import Groups from '@mui/icons-material/Groups';
import Laptop from '@mui/icons-material/Laptop';
import Settings from '@mui/icons-material/Settings';
import Science from '@mui/icons-material/Science';
import type { ComponentType } from 'react';

export interface SkillGroup {
  icon: ComponentType<SvgIconProps>;
  title: string;
  unit: string;
  items: string[];
}

/* The groups used to carry an emoji each. A colour emoji is drawn by whichever
   font the visitor's system happens to pick, so the same row looked different on
   every machine and a screen reader announced the glyph's Unicode name —
   "person juggling, male" — instead of staying out of the way. These are the
   nearest Material marks, and two of them part company with the emoji they
   replace: Programming and Web Development both showed a laptop, which read as
   a duplicate rather than as two groups. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Science,
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
    icon: Settings,
    title: 'Automation',
    unit: 'tools',
    items: ['Playwright', 'Selenium WebDriver', 'Selenium IDE', 'Robot Framework', 'Cypress'],
  },
  {
    icon: ElectricalServices,
    title: 'API & Performance',
    unit: 'tools',
    items: ['Postman', 'JMeter'],
  },
  {
    icon: Assignment,
    title: 'Test Management',
    unit: 'tools',
    items: ['Jira', 'Xray', 'Bugzilla', 'Zephyr', 'Trello'],
  },
  {
    icon: Code,
    title: 'Programming & Databases',
    unit: 'technologies',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    icon: Laptop,
    title: 'Web Development',
    unit: 'tools',
    items: ['HTML', 'CSS', 'Tailwind'],
  },
  {
    icon: Autorenew,
    title: 'Methodologies',
    unit: 'areas',
    items: ['Agile', 'Scrum', 'Kanban', 'SDLC', 'STLC', 'CI/CD', 'GitHub'],
  },
  {
    icon: Groups,
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
