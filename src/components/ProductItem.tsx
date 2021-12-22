import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
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
