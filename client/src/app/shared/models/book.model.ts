// Models
import { Author } from 'app/shared/models';
// Enums
import { BookType } from 'app/shared/enums';

export interface Book {
  _id: string;
  name: string;
  description: string;
  authors: Author[];
  type: BookType;
  outOfLibrary: boolean;
}
