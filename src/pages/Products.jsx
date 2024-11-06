import { AlertBar } from "@/components/AlertBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { MdFilterList } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FetchProducts from "@/constants/FetchProducts";
import { useState, useEffect } from "react";
import { FilterBox } from "@/components/FilterBox";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [error, setError] = useState(null);
  const [productTotal, setProductTotal] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const getProducts = async () => {
    const result = await FetchProducts();
    let filteredProduct = [];

    if (result) {
      if (selectedFilters.includes("all") || selectedFilters.length === 0) {
        filteredProduct = result;
      } else {
        filteredProduct = result.filter((product) => selectedFilters.includes(product.type));
      }

      setProductTotal(filteredProduct.length);

      const startIndex = (currentPage - 1) * productsPerPage;
      const paginatedProducts = filteredProduct.slice(startIndex, startIndex + productsPerPage);

      setProducts(paginatedProducts);
    } else {
      setError("Error fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, [selectedFilters, currentPage]);

  const filters = [{ name: "shirts" }, { name: "pants" }, { name: "shorts" }, { name: "shoes" }];

  const totalPages = Math.ceil(productTotal / productsPerPage);

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen w-full">
      <AlertBar />
      <Navigation />
      <div className="flex flex-col justify-center items-center w-full grow">
        <div className="flex flex-wrap justify-center max-w-[1300px] p-5">
          <div className="flex items-center justify-end md:justify-between w-full p-1">
            <h1 className="hidden md:flex text-base font-semibold uppercase">
              Results <span className="flex items-center text-sm mx-1">({productTotal})</span>
            </h1>
            <div className="flex flex-wrap gap-2">
              <button
                className={
                  (isFilterOpen ? "bg-black text-white" : "") +
                  " flex items-center border py-1 px-4 transition-all duration-200"
                }
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <MdFilterList className="w-4" />
                <span className="text-sm mx-2">Filters</span>
              </button>
              <Select>
                <SelectTrigger className="w-[100px] capitalize">
                  <SelectValue placeholder="Sort by:" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem className="text-sm" value="light">
                    Price
                  </SelectItem>
                  <SelectItem className="text-sm" value="dark">
                    Latest
                  </SelectItem>
                  <SelectItem className="text-sm" value="system">
                    Category
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isFilterOpen && (
            <FilterBox
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}

          <div className="flex flex-wrap justify-start w-full my-5 gap-5 min-h-[700px]">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                label={product.name}
                image={`/images/products/${product.images[0]}`}
                link={`/products/${product.id}`}
              />
            ))}
          </div>

          <div className="flex w-full justify-end">
            <div className="flex gap-2">
              <button
                className="transition duration-300 rounded border border-zinc-300 p-2 shadow hover:bg-black hover:text-white"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button
                className="transition duration-300 rounded border border-zinc-300 p-2 shadow hover:bg-black hover:text-white"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="self-center text-sm mx-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="transition duration-300 rounded border border-zinc-300 p-2 shadow hover:bg-black hover:text-white"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                className="transition duration-300 rounded border border-zinc-300 p-2 shadow hover:bg-black hover:text-white"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
