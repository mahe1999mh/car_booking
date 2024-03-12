import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const AllCars = () => {
  const axiosPublic = useAxiosPublic();

  const { data: cars = [] } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosPublic.get("/brandsCategory");

      return res.data;
    },
  });

  return (
    <div>
      {/* */}
      <section>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >

          {
             cars.map(car => <SwiperSlide key={car._id}>
              <img src={car.image} className="w-full h-[200px] lg:h-[400px] object-cover" alt="" />
            </SwiperSlide>)
          }

        </Swiper>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {cars.map((car) => (
          <div key={car._id} className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img src={car.image} alt="cars" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{car.brandName}</h2>
              <p>{car.name}</p>
              <div className="card-actions justify-end">
                <Link to={`/brandCategory/${car.brandName}`}>
                  <button className="px-4 py-3 bg-[#E02C6D] text-white font-bold rounded-md hover:bg-zinc-800">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCars;
