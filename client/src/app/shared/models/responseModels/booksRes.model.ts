// Models
import { Book } from 'app/shared/models';

export interface BooksResponse {
  count: number;
  books: Book[];
}
