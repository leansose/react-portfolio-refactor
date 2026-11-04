export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  datetime?: string;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'betatesing-freelance',
    role: 'Freelance Software Tester',
    company: 'BetaTesing',
    location: 'Remote',
    period: 'Feb 2026 - Present',
    datetime: '2026-02/',
  },
  {
    id: 'nos-backoffice',
    role: 'BackOffice Agent - Operations Support',
    company: 'NOS Comunicações SA',
    location: 'Remote',
    period: 'Jul 2022 - May 2025',
    datetime: '2022-07/2025-05',
  },
  {
    id: 'nos-team-leader',
    role: 'Team Leader - Sales Team',
    company: 'NOS Comunicações SA',
    location: 'Porto, Campanhã - On-site/Remote',
    period: 'Out 2016 - Apr 2019 | Sep 2020 - Jun 2021',
    datetime: '2016-10/2019-04, 2020-09/2021-06',
  },
  {
    id: 'nos-customer-sales',
    role: 'Customer Sales Agent',
    company: 'NOS Comunicações SA',
    location: 'Porto, Campanhã - On-site/Remote',
    period: 'Sep 2013 - Jun 2022',
    datetime: '2013-09/2022-06',
  },
];
