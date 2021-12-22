import { ProductItem } from "./ProductItem";

interface ProductsListProps {
  products: Array<{
    id: number;
    price: number;
    title: string;
  }>;
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
}
