import { PipeTransform, Pipe } from "@angular/core";
import { IBook } from "./IBook";

@Pipe({
  name: "bookFilter"
})
export class BookFilterPipe implements PipeTransform {
  transform(value: IBook[], titleSearch: string, authorSearch: string) {
    let filters: string[] = [];
    let titleFilter: string = titleSearch ? titleSearch.toLocaleLowerCase() : null;
    let authorFilter: string = authorSearch ? authorSearch.toLocaleLowerCase() : null;
    // let year: string  = yearSearch.toString();
    // let yearFilter: string = year ? year : null;

    if(titleFilter) {
      value = value.filter((book: IBook) => book.title.toLocaleLowerCase().indexOf(titleFilter) != -1)
    }

    if(authorFilter) {
      value = value.filter((book: IBook) => book.author.toLocaleLowerCase().indexOf(authorFilter) != -1)
    }

    // if(yearFilter){
    //   console.log(yearFilter);
    //   value = value.filter((book: IBook) => book.year.toString().toLocaleLowerCase().indexOf(yearFilter) != -1)
    //   console.log(yearFilter);
    // }

    return value;
  }
}
