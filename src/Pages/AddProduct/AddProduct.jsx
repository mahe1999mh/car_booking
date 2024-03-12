import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const navigate = useNavigate();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [formData,setForm] = useState({
    showroomprice:"",
    onroadprice:"",
    fueltype:""
  })

  const changeHandler = (e) =>{
    const {name,value} = e.target;
    setForm((prev)=> ({...prev,[name]:value}))  
  }



  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value); 
  };

  const brandAndCars = {
    Toyota: ["Sedan", "SUV", "Truck"],
    Ford: ["Sedan", "SUV", "Truck"],
    BMW: ["s1", "s2","s3","s7"],
    MercedesBenz: ["Sedan", "SUV"],
    Tesla: ["Electric"],
    Honda: ["Sedan", "SUV"],
  };


  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;


    const image = form.image.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;


    const addProduct = {
      image,
      name,
      rating,
      brandName,
      type,
      price,
      description,
    };

    localStorage.setItem("formData",JSON.stringify(formData))
    fetch("http://localhost:5000/brandsCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Thanks!",
          });
        }

        form.reset();
        navigate("/");
      });
  };

  return (
    <div>
      <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 shadow-xl rounded-xl p-3 mx-auto bg-gray-100 dark:bg-black">
        <div>
          {/* main div */}

          {/* <div>
            <h1 className="text-center text-4xl font-medium">Add Product</h1>
          </div> */}

          {/* form */}
          <div className="mt-10">
            <form onSubmit={handleAddProduct}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Image</label>
                  <input
                    type="text"
                    placeholder="Image url.."
                    name="image"
                    required
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />
                </div>

                <div className="form-control">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Brand Name</label>
                  <select
                    name="brandName"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px] dark:text-black"
                    onChange={handleBrandChange}
                  >
                    <option value="">Select a Brand</option>
                    {Object.keys(brandAndCars).map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label>
                    Types {selectedBrand && "of Cars for " + selectedBrand}
                  </label>
                  <select
                    name="type"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  >
                    <option value=""> Types of Cars for {selectedBrand}</option>

                    {selectedBrand &&
                      brandAndCars[selectedBrand].map((type) => (
                        <option key={type}>{type}</option>
                      ))}
                  </select>
                </div>
               
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Price</label>
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    required
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                  />
                </div>
                
                <div className="form-control">
                  <label>Short Description</label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    name="description"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Rating</label>
                  <input
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                  />
                </div>
                 
                <div className="form-control">
                  <label>Fuel Type</label>
                  <select name="fueltype"  className="input mt-2 w-full md:w-[390px] lg:w-[390px] dark:text-black" onChange={(e)=> changeHandler(e)} value={formData?.fueltype}>
                    <option value="">Select Fuel Type</option>  
                      <option value={"petrol"}>petrol</option>
                      <option value={"diesel"}>diesel</option>                                  
                  </select>
                </div>
              </div>
              
              {/* add button */}

              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>On road Price</label>
                  <input
                    type="text"
                    placeholder="On road Price"
                    name="onroadprice"
                    required
                    value={formData?.onroadprice}
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px]"
                    onChange={(e)=> changeHandler(e)} 
                  />
                </div>

                <div className="form-control">
                  <label>Show Room Price</label>
                  <input
                    type="text"
                    placeholder="Show Room Price"
                    name="showroomprice"
                    required
                    value={formData?.showroomprice}
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px]"
                    onChange={(e)=> changeHandler(e)} 
                  />
                </div>
              </div>
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="Add Car"
                    placeholder="Enter photo url"
                    className="input input-bordered w-full bg-[#E02C6D] text-white font-bold"
                  />
                </label>
              </div>
            </form>
          </div>
          {/* form */}

          {/* main div */}
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
