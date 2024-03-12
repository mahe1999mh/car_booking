import client from "../../assets/cars.jpg"

const CustomersSatisfaction = () => {
    return (
        <div>

            <section className="flex flex-col lg:flex-row justify-between gap-6 dark:bg-zinc-900">

                <div className="flex-1">

                    <img src={client} alt="" />

                </div>

                <div className="flex-1 mt-3 ml-5 space-y-4 ">
                    <h1 className="text-4xl  font-bold">Only Quality For <br /> <span className="text-[#E02C6D]">Clients</span></h1>
                    
                     <div className="flex gap-4">
                     <button className="px-5 py-3 bg-gray-400 text-white font-medium rounded-md">LUXURY</button>

                     <button className="px-5 py-3 bg-transparent outline-5 font-medium rounded-md">COMPORT</button>

                     <button className="px-5 py-3 bg-transparent outline-5 font-medium rounded-md">PRESTIGE</button>
                     </div>

                    <p>We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.</p>
                </div>
            </section>
            
        </div>
    );
};

export default CustomersSatisfaction;