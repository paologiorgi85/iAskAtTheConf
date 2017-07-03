export interface Message {
  $key?:string;
  message:string;
  author:string;
  email:string;
  answers?: Message[];
}

export interface Workshop {
  $key? : string;
  id? : string;
  title? : string;
  description? : string;
  questions? : Message[];
}
