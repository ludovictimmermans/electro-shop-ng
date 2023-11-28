import {SearchCriteria} from "./searchCriteria.model";

export interface Filter{
  searchCriteriaList: SearchCriteria[];
  dataOption:string;
}
