import { Author } from './author.model';
import { SubjectID } from './subjectID.model';
import { IssnType } from './issnType.model';

export interface IssuedDate {
  'date-parts': number[];
}

export enum ResourceConditions {
  Accepted = 'ACCEPTED',
  InProgress = 'IN_PROCESS',
  Denied = 'DENIED',
  Sent = 'SENT'
}

export interface Data {
  author?: Author[];
  title?: string;
  language?: string;
  issued?: IssuedDate;
  type?: string;
  subject?: string;
  subjectid?: SubjectID[];
  abstract?: string;
  issn?: string[];
  issnType?: IssnType[];
  publisher?: string;
  doi?: string;
  page?: string;
  volumen?: number;
  containerTitle?: string;
}

export interface Bitstream {
  id?: string;
  name?: string;
  extension?: string;
}

export interface Resource {
  id?: number;
  data?: Data;
  condition?: ResourceConditions;
  bitstreams?: Bitstream[];
}
