import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { name, photo } = brand;

  return (
    <div className="mt-10">

      <div className="shadow-md rounded-md">
        <figure>
          <img
            className="h-[200px] w-full object-cover rounded-md"
            src={photo}
            alt="brands"
          />
        </figure>
        <div className="card-body">
          <Link to={`/brandCategory/${name}`}><h2 className="card-title">{name}</h2></Link>
        </div>
      </div>

    </div>
  );
};

export default Brands;
