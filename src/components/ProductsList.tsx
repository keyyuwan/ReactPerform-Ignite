import { ProductItem } from "./ProductItem";

interface ProductsListProps {
  totalPrice: number;
  products: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function ProductsList({
  totalPrice,
  products,
  onAddToWishList,
}: ProductsListProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToWishList={onAddToWishList}
        />
      ))}
    </div>
  );
}
