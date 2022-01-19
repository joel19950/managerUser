import { IUsers } from "../shared/model/users.model";
import { StatutAchats } from "../enumerations/statut-achat.model";

export interface IAchats {
  id?: number;
  quantite?: number;
  statut?: StatutAchats | null;
  mode_paiement?: string;
  users?: IUsers;
}

export class Achats implements IAchats {
  constructor(
    public id?: number,
    public quantite?: string,
    public statut?: StatutAchats | null,
    public mode_paiement?: string,
    public users?: IUsers
  ) {}
}
