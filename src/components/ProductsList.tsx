import { List, ListRowRenderer } from "react-virtualized";
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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={products[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5} // quantos itens pra cima e pra baixo eu quero que ele pré carregue
        rowCount={products.length} // quantidade total da lista
        rowRenderer={rowRenderer} // função que vai renderizar os elementos
      />
    </div>
  );
}
