// Models
import { Author } from 'app/shared/models';

export interface AuthorsResponse {
  count: number;
  authors: Author[];
}
