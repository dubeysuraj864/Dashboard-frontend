import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.warn(products);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
      alert("record is deleted successfully");
    }
  };

  const searchHandle = async (event) => {
    console.log(event.target.value);
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <>
      <div className="products flex flex-col items-center justify-center">
        <div className="search  bg-white text-black flex items-center px-4">
          <span>
            <FaSearch />
          </span>
          <input
            onChange={searchHandle}
            type="text"
            className=" px-4 py-3 outline-none border-0"
            placeholder="Search..."
          />
        </div>
        { products.length>0 ? products.map((item) => {
          return (
            <>
              <div className="flex justify-between items-center">
                <Card
                  key={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  category={item.category}
                  brand={item.brand}
                />
                <div className="flex flex-col">
                  <button className="bg-green-600 text-white h-fit my-2  p-4">
                    <Link to={"/UpdateProducts/" + item._id}>Update</Link>
                  </button>
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="bg-red-500 text-white h-fit my-2 p-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        }

        
        
        ) : "NO RESULT FOUND"}
      </div>
    </>
  );
}

export default Products;
