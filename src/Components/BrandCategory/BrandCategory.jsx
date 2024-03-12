import { useLoaderData } from "react-router-dom";
import carousel1 from "../../assets/carousel1.jpg";
import carouselTwo from "../../assets/carousel2.jpg";
import carouselThree from "../../assets/carousel3 (2).jpg";
import BrandCategories from "../BrandCategories/BrandCategories";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BrandCategory = () => {
  const brandCategory = useLoaderData();

  var storedData = localStorage.getItem("formData");
  var formData = JSON.parse(storedData) ?? "";


  return (
    <div>
  
      <div>
        <Carousel className="text-center">
          <div className="lg:h-[400px] rounded-md">
            <img className="rounded-md object-cover" src={carousel1} />
          </div>
          <div className="lg:h-[400px]">
            <img className="rounded-md object-cover" src={carouselTwo} />
          </div>
          <div className="lg:h-[400px]">
            <img className="rounded-md object-cover" src={carouselThree} />
          </div>
        </Carousel>
      </div>

      <div className="mt-10">
        <h1 className="text-center text-4xl font-bold">Available Product</h1>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {brandCategory.map((categoryProduct) => (
            <BrandCategories
              key={categoryProduct._id}
              categoryProduct={categoryProduct}
              formData={formData}
            ></BrandCategories>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCategory;
