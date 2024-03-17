import React from 'react';

function CarServiceList() {
  // Define the array of car services
  const carServices = [
    { name: "Car Washing", description: "Exterior and interior cleaning of the car." },
    { name: "Wheel Care", description: "Cleaning and maintenance of the wheels and tires." },
    { name: "Car AC Repair", description: "Repair and maintenance of the car's air conditioning system." }
  ];

  // Function to render the list of car services
  const renderCarServices = () => {
    return carServices.map((service, index) => (
      <div key={index} style={{  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', padding: '20px', marginBottom: '20px' }}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Car Services</h2>
      {renderCarServices()}
    </div>
  );
}

export default CarServiceList;
