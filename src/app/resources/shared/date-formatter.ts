import { IssuedDate } from "../model/resource.model";

export function formatDisplayDate(date: IssuedDate) {
  if (date) {
    const year = date["date-parts"][0];
    const month = date["date-parts"][1];
    const day = date["date-parts"][2];
    return new Date(year, month, day);
  }
}
