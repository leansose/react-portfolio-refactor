import { normalizeText } from '../utils/text';

export interface EducationCourse {
  period: string;
  datetime: string;
  school: string;
  acronym: string;
  title: string;
  field: string;
  status: string;
  focus: string[];
  description: string;
}

export const EDUCATION_COURSE: EducationCourse = {
  period: '2005 — 2012',
  datetime: '2005/2012',
  school: 'Faculty of Engineering, University of Porto',
  acronym: 'FEUP',
  title: "Master's Coursework",
  field: 'Electrical and Computer Engineering',
  status: '(degree not completed)',
  focus: ['Communication Technologies', 'Industrial Management'],
  description: normalizeText(`Coursework towards telecommunications, computer
    systems and engineering principles, developing strong analytical
    and technical foundations relevant to software testing,
    quality assurance and programming practices. Thesis and 5 subjects pending.`),
};
