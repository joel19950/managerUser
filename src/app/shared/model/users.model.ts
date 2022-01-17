import { SexeUsers } from "../../enumerations/sexe-users.model";
import { TypeUsers } from "../../enumerations/type-users.model";

export interface IUsers {
  id?: number;
  nom?: string;
  prenom?: string;
  ville?: string;
  sexe?: SexeUsers | null;
  phone_orange?: string;
  phone_mtn?: string;
  type_user?: TypeUsers | null;
  mail?: string;
  date_vente?: Date;
  code?: string;
  login?: string;
  password?: string;
  img_qrcodeContentType?: string | null;
  img_qrcode?: string | null;
}

export class Users implements IUsers {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public ville?: string,
    public sexe?: SexeUsers | null,
    public phone_orange?: string,
    public phone_mtn?: string,
    public type_user?: TypeUsers | null,
    public mail?: string,
    public date_vente?: Date,
    public code?: string,
    public login?: string,
    public password?: string,
    public img_qrcodeContentType?: string | null,
    public img_qrcode?: string | null
  ) {}
}
