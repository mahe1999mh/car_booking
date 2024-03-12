import { useEffect, useState } from "react";
import { BsArrow90DegRight, } from 'react-icons/bs';


const CustomersReview = () => {

    const [reviews , setReviews ] = useState([]);

    useEffect(() => {
        fetch('/customersReview.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    

    return (

     <div>
          
          <div className="text-center">
            <h1 className=" text-4xl font-bold"> Customers <span>Review</span></h1>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
            
            {
                reviews.map(review =>
                 <div key={review.id} className="card bg-base-100 shadow-xl image-full ">
                <figure> <img src={review.image} alt="Shoes" /></figure>
                <div className="card-body">
                 
                  <p> <BsArrow90DegRight className="text-3xl"></BsArrow90DegRight> {review.description}</p>

                  <h2 className="card-title">{review.customer_name}</h2>
                </div>
              </div>)
            }

            
        </div>
     </div>

        
    );
};

export default CustomersReview;