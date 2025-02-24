import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const {
    _id,
    coffeeName,
    chefName,
    supplierName,
    testName,
    category,
    detail,
    photo,
    price,
  } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="grid grid-cols-2 space-x-6 p-4 w-full">
        <div className="w-full">
          <div className="flex ml-2 gap-2 mt-">
            <h4 className="font-bold">Name: </h4>
            <p className="w-full font-thin">{coffeeName}</p>
          </div>
          <div className="flex w-full ml-2 gap-2">
            <h4 className="font-bold">Chef: </h4>
            <p className="w-full font-thin">{chefName}</p>
          </div>
          <div className="flex w-full ml-2 gap-2">
            <h4 className="font-bold">Price: </h4>
            <p className="w-full font-thin">{price}</p>
          </div>
        </div>
        <div className="card-actions flex-col  gap-2 ml-16">
          <button className="btn btn-outline btn-success">View</button>
          <Link to={`UpdateCoffees/${_id}`}>
            <button className="btn btn-outline btn-success ">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-success bg-red-300 text-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
