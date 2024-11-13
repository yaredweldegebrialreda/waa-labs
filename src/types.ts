export interface Post {
  title: string;
  author: string;
  id?: number;
  comment: string[];
  content: string;
}

export interface Comment {
  name: string;
  id: number;
}
