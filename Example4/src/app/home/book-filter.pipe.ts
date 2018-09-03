import { PipeTransform, Pipe } from "@angular/core";
import { IBook } from "./IBook";

@Pipe({
  name: "bookFilter"
})
export class BookFilterPipe implements PipeTransform {
  transform(value: IBook[], titleSearch: string, authorSearch: string, yearSearch: number, idSearch) {
    let filters: string[] = [];
    let titleFilter: string = titleSearch ? titleSearch.toLocaleLowerCase() : null;
    let authorFilter: string = authorSearch ? authorSearch.toLocaleLowerCase() : null;
    let yearFilter: string = yearSearch ? yearSearch.toString() :  null;
    let idFilter: string = idSearch ? idSearch.toString() :  null;

    if(titleFilter) {
      value = value.filter((book: IBook) => book.title.toLocaleLowerCase().indexOf(titleFilter) != -1)
    }

    if(authorFilter) {
      value = value.filter((book: IBook) => book.author.toLocaleLowerCase().indexOf(authorFilter) != -1)
    }

    if(yearFilter) {
      value = value.filter((book: IBook) => book.year.toString().indexOf(yearFilter) != -1);
    }

    if(idFilter) { 
      value = value.filter((book: IBook) => book.id.toString().indexOf(idFilter) != -1);
    }

    return value;
  }
}
