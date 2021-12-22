import { FormEvent, useState } from "react";
import { ProductsList } from "./components/ProductsList";

function App() {
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const res = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await res.json();

    setProducts(data);
  }

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

      <ProductsList products={products} />
    </div>
  );
}

export default App;
