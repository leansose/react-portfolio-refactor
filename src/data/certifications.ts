import { normalizeText } from '../utils/text';

export interface Certification {
  period: string;
  datetime: string;
  description: string;
  school: string;
}

export interface CertificationGroup {
  id: string;
  category: string;
  items: Certification[];
}

export const CERTIFICATION_GROUPS: CertificationGroup[] = [
  {
    id: 'cert-frontend',
    category: 'Frontend Development',
    items: [
      {
        period: 'Sep 2026 - Present',
        datetime: '2026-09',
        description: normalizeText(`Front-End Web Development with HTML, CSS, and
          JavaScript`),
        school: 'Bytes4Future',
      },
    ],
  },
  {
    id: 'cert-test-automation',
    category: 'Test Automation',
    items: [
      {
        period: 'Aug 2026',
        datetime: '2026-08',
        description: 'BDD with Cucumber (JavaScript)',
        school: 'Cucumber School',
      },
      {
        period: 'May 2026',
        datetime: '2026-05',
        description: 'Cypress, Web Automation Testing',
        school: 'Bondar Academy',
      },
      {
        period: 'Jul 2025',
        datetime: '2025-07',
        description: normalizeText(`Robot Framework with Python - Selenium/API
          Automation
          Testing`),
        school: 'Udemy',
      },
    ],
  },
  {
    id: 'cert-qa-testing',
    category: 'QA & Software Testing',
    items: [
      {
        period: 'Apr 2026',
        datetime: '2026-04',
        description: 'Software Testing, Jira/Agile',
        school: 'Rahul Shetty Academy',
      },
      {
        period: 'Sep 2025',
        datetime: '2025-09',
        description: normalizeText(`Registered Scrum Basics, Agile Education by
          Scrum
          Inc.™`),
        school: 'Agile Education by Scrum Inc.™',
      },
      {
        period: 'Sep 2025',
        datetime: '2025-09',
        description: 'Python for Testing 101 (PT101)',
        school: 'OpenEDG Python Institute',
      },
      {
        period: 'Apr 2025',
        datetime: '2025-04',
        description: 'Software Testing Bootcamp',
        school: 'Udemy',
      },
    ],
  },
];
