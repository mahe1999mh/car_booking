import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const products = useLoaderData();

  const navigate = useNavigate();

  const { _id, image, name, rating, brandName, type, price } = products || {};

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.image.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;

    const updateProduct = { image, name, rating, brandName, type, price };

    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${name} updated successfully`,
            showConfirmButton: false,
            timer: 1500
          });

          navigate(`/brandCategory/${brandName}`);
        }
      });
  };

  return (
    <div>
      <section className="flex justify-center items-center w-full md:w-full lg:w-3/4 shadow-xl rounded-xl p-3 mx-auto bg-gray-100 dark:bg-black">
        <div>
          {/* main div */}

          {/* <div>
            <h1 className="text-center text-4xl font-medium">Update Product</h1>
          </div> */}

          {/* form */}
          <div className="mt-10">
            <form onSubmit={handleUpdateProduct}>
              <div className="flex flex-col md:flex-col lg:flex-row gap-6">
                <div className="form-control">
                  <label>Image</label>
                  <input
                    type="text"
                    defaultValue={image}
                    placeholder="Image url.."
                    name="image"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Name</label>
                  <input
                    type="text"
                    defaultValue={name}
                    placeholder="Name"
                    name="name"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Brand Name</label>
                  <input
                    type="text"
                    defaultValue={brandName}
                    placeholder="Brand Name"
                    name="brandName"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  />{" "}
                </div>

                <div className="form-control">
                  <label>Type</label>
                  <input
                    type="text"
                    placeholder="Type "
                    defaultValue={type}
                    name="type"
                    className="input mt-2  w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  />{" "}
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                <div className="form-control">
                  <label>Price</label>
                  <input
                    type="text"
                    defaultValue={price}
                    placeholder="Price"
                    name="price"
                    className="input mt-2 w-full md:w-[390px] lg:w-[390px] dark:text-black"
                  />{" "}
                </div>

                <div className="flex flex-col md:flex-col lg:flex-row gap-6 mt-3">
                  <div className="form-control">
                    <label>Rating</label>
                    <input
                      type="text"
                      defaultValue={rating}
                      placeholder="Rating"
                      name="rating"
                      className="input mt-2  w-full md:w-[390px] lg:w-[390px] dark:text-black"
                    />{" "}
                  </div>
                </div>
              </div>

              {/* add button */}
              <div className="form-control mt-4">
                <label>
                  <input
                    type="submit"
                    value="UPDATE CAR"
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

export default UpdateProduct;
