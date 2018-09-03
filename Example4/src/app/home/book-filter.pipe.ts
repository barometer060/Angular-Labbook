import { PipeTransform, Pipe } from "@angular/core";
import { IBook } from "./IBook";

@Pipe({
  name: "bookFilter"
})
export class BookFilterPipe implements PipeTransform {
  transform(value: IBook[], args: string) {
    let filter: string = args ? args.toLocaleLowerCase() : null;

    return filter
      ? value.filter(
          (book: IBook) =>
            book.title.toLocaleLowerCase().indexOf(filter) != -1
        )
      : value;
  }
}
