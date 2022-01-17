
export interface IShirts {
  id?: number;
  matiere?: string;
  couleur?: string;
  taille?: string;
  qualite?: string;
  quantiteStock?: number;
  prix?: string;
}

export class Shirts implements IShirts {
  constructor(
    public id?: number,
    public matiere?: string,
    public couleur?: string,
    public taille?: string,
    public qualite?: string,
    public quantiteStock?: number,
    public prix?: string
  ) {}
}
