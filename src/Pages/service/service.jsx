import React, { useState } from 'react';

function CarServiceList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [data,setDate] = useState(null)

  const carServices = [
    { name: "Car Washing", description: "Exterior and interior cleaning of the car.", img: "https://clipartcraft.com/images/car-wash-clipart-auto-detailing-7.png" },
    { name: "Wheel Care", description: "Cleaning and maintenance of the wheels and tires.", img: "https://thumbs.dreamstime.com/b/wheel-car-service-logo-141358125.jpg" },
    { name: "Car AC Repair", description: "Repair and maintenance of the car's air conditioning system.", img: "https://thumbs.dreamstime.com/z/cooling-car-system-thin-line-icon-auto-air-conditioning-vector-illustration-isolated-white-climate-control-outline-style-design-145872885.jpg" }
  ];

  const handleBookNowClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const saveMode = () => {
    if(data != null){
      alert(data + "  Services Booked successful")
      setIsModalOpen(false);
      setSelectedService(null);
    }else{
      alert("please select the data")
    }
   
  }

  const renderCarServices = () => {
    return carServices.map((service, index) => (
      <div key={index} style={{ display: "flex" }}>
        <div style={{ width: "50vh", height: "50vh", boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px', padding: '20px', marginBottom: '20px' }}>
          <h1>{service.name}</h1>
          <img style={{ width: "250px", height: "150px", objectFit: "fill" }} alt="car" className="image" src={service?.img} />
          <p style={{ color: "green" }}>{service.description}</p>
          <div>
            <button onClick={() => handleBookNowClick(service)}>Book Now</button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Car Services</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {renderCarServices()}
      </div>
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', minWidth: '300px' }}>
            <h2>Booking Service: {selectedService?.name}</h2>
            <p>{selectedService?.description}</p>
           <div style={{height:'10vh', display:"flex", justifyContent:"center",alignItems:"center"}}>
             <input type='date' onChange={(e) => setDate(e.target.value)} style={{backgroundColor:"#555",padding:"10px",borderRadius:'2%'}}/>
           </div>
            <div style={{display:"flex",gap:"10px"}}>
            <button onClick={closeModal}>Close</button>
            <button onClick={saveMode}>save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarServiceList;
