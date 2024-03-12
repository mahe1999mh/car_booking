import bannerImage from "../../assets/banner.png"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>

            <section className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between items-center gap-6 px-2 lg:px-4">

                <div className="flex-1 space-y-5">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold">Explore the world with <span className="text-[#E02C6D]">comfortable cars !</span></h1>

                <p className="text-[18px]">Embark on unforgettable adventures and discover the world in unparalleled comfort and style with our fleet of exceptionally comfortable cars.</p>

                <div className="flex items-center gap-4">
                <Link to="/allCars">
                <button className="px-6 py-3 bg-[#E02C6D] text-white font-bold rounded-md">Choose a car</button>
                </Link>
                <Link to="/contact">
                <button className="px-6 py-3 bg-gray-700 text-white font-bold rounded-md">Contact us</button>
                </Link>
                </div>

                </div>

                <div className="flex-1 ">
                 <img className="object-cover" src={bannerImage} alt="" />
                </div>
            </section>
            
        </div>
    );
};

export default Banner;