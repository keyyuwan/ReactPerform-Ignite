import { memo, useState, lazy, Suspense } from "react";

const AddProductToWishlist = lazy(() => {
  return import("./AddProductToWishlist");
});
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
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <Suspense fallback={<span>Carregando...</span>}>
          <AddProductToWishlist
            onAddToWishList={() => onAddToWishList(product.id)}
            onRequestClose={() => setIsAddingToWishlist(false)}
          />
        </Suspense>
      )}
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
