import { FormEvent, useState, useCallback } from "react";
import { ProductsList } from "./components/ProductsList";

interface Products {
  totalPrice: number;
  data: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
}

function App() {
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState<Products>({
    totalPrice: 0,
    data: [],
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const res = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await res.json();

    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formatted.format(product.price),
      };
    });

    const totalPrice = data.reduce((acc: number, product: any) => {
      return acc + product.price;
    }, 0);

    setProducts({ totalPrice, data: products });
  }

  const addToWishList = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <h1>Search products</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ProductsList
        totalPrice={products.totalPrice}
        products={products.data}
        onAddToWishList={addToWishList}
      />
    </div>
  );
}

export default App;
