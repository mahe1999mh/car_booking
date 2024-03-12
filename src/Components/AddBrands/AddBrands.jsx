
import Swal from 'sweetalert2'
const AddBrands = () => {

    const handleBrands = e => {
        e.preventDefault();
        
        const form = e.target;
        
        const name = form.name.value;
        const photo = form.photo.value;

        const addBrands = {name, photo};

        fetch('http://localhost:5000/brands', {
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addBrands)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Brands added successfully',
                    icon: 'success',
                    confirmButtonText: 'Thanks!'
                  })
            }
            form.reset();
        })
    }

  return (
    <div>
      

      <div className="flex justify-center items-center">
        <div className="shadow-xl p-8 md:w-[450px] lg:w-[450px] rounded-xl">
          <div>
            <h1 className="text-center font-medium text-3xl text-[#403F3F] mb-6">
              {" "}
              Add Brands
            </h1>
          </div>

          <form onSubmit={handleBrands}>
            <div>
              <label>Brand Name</label> <br />
              <input
                type="text"
                placeholder="Brand Name"
                name="name"
                className=" mt-4 mb-4 input bg-[#F3F3F3] w-full md:w-[390px] lg:w-[390px]"
              />{" "}
              <br />
              <label>Brand Image</label> <br />
              <input
                type="text"
                placeholder="Brand Image"
                name="photo"
                className="mt-4 input bg-[#F3F3F3] w-full md:w-[390px] lg:w-[390px]"
              />
              <br />
              <input
                type="submit"
                value="Add Brands"
                className=" btn w-full md:w-[390px] lg:w-[390px] mt-5 font-bold bg-[#E02C6D] text-white hover:bg-gray-600"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBrands;
