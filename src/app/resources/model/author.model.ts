import { Affiliation } from "./affiliation.model";

export interface Author {
  family?: string;
  given?: string;
  uri?: string;
  affiliation?: Affiliation[];
}
