export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  count: number;
  description: string;
}

export interface IInitialState {
  products: IProduct[];
}
