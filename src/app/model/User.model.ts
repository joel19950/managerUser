import { Phone } from "./Phone.model";

export interface User{

  id:number,
  name:string,
  surname:string,
  city:string,
  sexe:string,
  phone:Phone,
  email:string,
  quantity:number,
  date_write:string,
  date_sale:Date,
  participation_code:string


}
