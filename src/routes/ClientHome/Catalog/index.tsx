import "./styles.css";
import ButtonNextPage from "../../../components/ButtonNextPage";
import CatalogCard from "../../../components/CatalogCard";
import SearchBar from "../../../components/SearchBar";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

export default function Catalog() {
  
    const [products, setProducts] = useState<ProductDTO[]>([]);
  
    const [productName, setProductName] = useState("");

  useEffect(() => {
    productService.findPageRequest(0, productName)
    .then(response => {
      setProducts(response.data.content);
    });

  }, [productName]);

  function handleSearch(searchText: string) {
    setProductName(searchText)
  }

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleSearch} />

        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>

        <ButtonNextPage />
      </section>
    </main>
  );
}
