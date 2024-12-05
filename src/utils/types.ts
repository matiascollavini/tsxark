export type Products = {
  id: number;
  title: string;
  description: string;
  image: { src: string };
  category: string;
  categoryToShow: string;
  price: number;
  quantity?: number;
}