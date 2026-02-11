import { Creator } from "../../core/creator";
import { filterWrapperParams, normalParams, favParams } from "./filter-params";

export class FilterView {
  constructor() {
    this.filterWrapper = new Creator(filterWrapperParams).getTag();
    this.normal = new Creator(normalParams).getTag();
    this.fav = new Creator(favParams).getTag();
    this.filterWrapper.append(this.normal, this.fav);
  }
}
