export class Result<T>{
   public infoMessages: string[];
   public errors: any;
   public value: T
   public isValid: boolean;
}