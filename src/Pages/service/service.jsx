import React from 'react';

function CarServiceList() {
  // Define the array of car services
  const carServices = [
    { name: "Car Washing", description: "Exterior and interior cleaning of the car.", img:"https://clipartcraft.com/images/car-wash-clipart-auto-detailing-7.png" },
    { name: "Wheel Care", description: "Cleaning and maintenance of the wheels and tires.", img:"https://thumbs.dreamstime.com/b/wheel-car-service-logo-141358125.jpg" },
    { name: "Car AC Repair", description: "Repair and maintenance of the car's air conditioning system.", img:"https://thumbs.dreamstime.com/z/cooling-car-system-thin-line-icon-auto-air-conditioning-vector-illustration-isolated-white-climate-control-outline-style-design-145872885.jpg"}
  ];

  // Function to render the list of car services
  const renderCarServices = () => {
    return carServices.map((service, index) => (
      <div style={{display:"flex"}}>      
        <div key={index} style={{ width:"50vh",height:"40vh",  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', padding: '20px', marginBottom: '20px' }}>
        <h1>{service.name}</h1>
        <img style={{width:"250px",height:"150px",objectFit:"fill"}}
        alt="car"
        className="image"
        src={service?.img}
      />
        <p style={{color:"green"}}>{service.description}</p>
      </div>
      </div>
    ));
  };

  return (
    <div style={{display:"flex",gap:"10px"}}>
      <h2>Car Services</h2>
      {renderCarServices()}
    </div>
  );
}

export default CarServiceList;
