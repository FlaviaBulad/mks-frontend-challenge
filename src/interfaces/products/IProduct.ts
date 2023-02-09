export interface IProduct {
  id: number;
  name: string;
  description: string;
  photo: string;
  price: string;
}

export interface ICartProduct extends IProduct {
  amount: number;
}
