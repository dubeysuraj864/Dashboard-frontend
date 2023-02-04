import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";
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
    let result = await fetch(`http://localhost:5000/product/${id}`,{
      method: "Delete"
    });
    result = await result.json();
    if(result){
    
      getProducts();
      alert("record is deleted successfully")
    }
  };

  return (
    <>
      <div className="products">
        {products.map((item) => {
          return (
            <>
             <div className="flex justify-between items-center"   >
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
         <button      className="bg-green-600 text-white h-fit my-2  p-4"><Link to={"/UpdateProducts/"+item._id} >Update</Link></button>
         <button   onClick={()=> deleteProduct(item._id)}  className="bg-red-500 text-white h-fit my-2 p-4">Delete</button>
         </div>
             </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Products;
