import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateProducts() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/products/${params.id}`);
    result = await result.json();
    console.warn(result, "result")
    setName(result.name);
    setImage(result.image);
    setPrice(result.price);
    setRating(result.rating);
    setCategory(result.category);
    setBrand(result.brand);
  };

  const updateProductDetails = async (e)=> {
    e.preventDefault();
    console.warn(name, image, price, rating, category, brand);
    let result = await fetch(`http://localhost:5000/products/${params.id}`,{
      method: "PUT",
      body: JSON.stringify({name, image, price, rating, category, brand}),
      headers:{
        "Content-Type":"Application/json"
      }

    });
    result = await result.json();
    if(result){
      navigate("/");
    }

  }

  return (
    <>
      <div className="AddProducts text-center">
        <h1 className="text-4xl font-bold mt-20 mb-4 text-white">
          Update Product
        </h1>
        <form>
          <div className="bg-white  p-2 my-3 rounded-xl flex items-center ">
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="url"
              placeholder="Image url"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <input
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="number"
              placeholder="Price"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <input
              value={rating}
              onChange={(e) => {
                setRating(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="number"
              placeholder="Rating"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="text"
              placeholder="Category"
            />
          </div>
          <div className="bg-white p-2 my-3 rounded-xl flex items-center ">
            <input
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
              }}
              className="px-4 text-black outline-none border-none"
              type="text"
              placeholder="Brand"
            />
          </div>
          <button
            onClick={updateProductDetails}
            className="bg-blue-600 text-white px-4 py-2 my-4 rounded-xl"
          >
            Update Product
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateProducts;
