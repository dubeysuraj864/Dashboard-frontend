import { useState } from "react";

function AddProducts() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [error, setError] = useState(false)

  const addProductData = async (e) => {
    e.preventDefault();
    if(!name || !image || !price || !rating || !category || !brand){
      setError(true);
      return false;
    }
  
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    console.warn(userId);
   
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
      name,
        image,
        price,
        rating,
        category,
        brand,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    document.getElementsByTagName("input").value= "";
  };

  return (
    <>
      <div className="AddProducts text-center">
        <h1 className="text-4xl font-bold mt-20 mb-4 text-white">
          Add Product
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
            {
              error && !name ? <span className="text-red-500">Enter valid name!</span>
              : null
            }
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
              {
              error && !image ? <span className="text-red-500">Enter valid Image URL!</span>
              : null
            }
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
              {
              error && !price ? <span className="text-red-500">Enter valid price!</span>
              : null
            }
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
              {
              error && !rating ? <span className="text-red-500">Enter valid rating!</span>
              : null
            }
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
              {
              error && !category ? <span className="text-red-500">Enter valid category!</span>
              : null
            }
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
              {
              error && !brand ? <span className="text-red-500">Enter valid brand!</span>
              : null
            }
          </div>
          <button
            onClick={addProductData}
            className="bg-blue-600 text-white px-4 py-2 my-4 rounded-xl"
          >
           Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProducts;
