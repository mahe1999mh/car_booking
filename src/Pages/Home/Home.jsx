import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import CustomersSatisfaction from "../../Components/CustomersSatisfaction/CustomersSatisfaction";
import CustomersReview from "../../Components/CustomersReview/CustomersReview";

const Home = () => {

    const brands = useLoaderData();
    

    return (
        <div>

          
             
             <Banner></Banner>

             <div className="mt-10">

             <div className="text-center space-y-4">
                <Link to='/brands'><h1 className="text-4xl font-bold">Our Vehicle <span className="text-[#E02C6D]">Fleet</span></h1></Link>
                <p>Driving your dreams to reality with an exquisite fleet of versatile <br /> vehicles for unforgettable journeys.</p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    brands.map(brand => <Brands key={brand._id} brand = {brand}></Brands>)
                }
                </div>

             </div>

             <div className="mt-10 bg-gray-100">
                <CustomersSatisfaction></CustomersSatisfaction>
             </div>

             <div className="mt-10">

                <CustomersReview></CustomersReview>

             </div>

             <div className="mt-10">
             <Footer></Footer>
             </div>
            
        </div>
    );
};

export default Home;