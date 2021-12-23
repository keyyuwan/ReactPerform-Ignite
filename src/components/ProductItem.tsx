import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishList(product.id)}>
        Add to wish list
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    // retornar se as propriedades são as mesmas, ou não
    // pro memo ver se segue o fluxo de renderização, ou evita
    return Object.is(prevProps.product, nextProps.product);
  }
);

// shallow comparision
// {} === {} / false
// comparação referencial (ve se ocupa o mesmo lugar na memória)
