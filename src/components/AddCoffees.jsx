import Swal from "sweetalert2";
const AddCoffees = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const coffeeName = form.coffeeName.value;
    const chefName = form.chefName.value;
    const supplierName = form.supplierName.value;
    const testName = form.testName.value;
    const category = form.category.value;
    const detail = form.detail.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const newCoffee = {
      coffeeName,
      chefName,
      supplierName,
      testName,
      category,
      detail,
      photo,
      price,
    };
    console.log(newCoffee);
    // send data to middleware
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully",
            text: "Coffee Inserted Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div className="card bg-base-100 w-full max-w-2/3 mx-auto shrink-0 shadow-2xl p-4 mt-6">
        <div className="mt-6">
          <h2 className="text-center text-4xl font-bold">Add New Coffee</h2>
          <p className="text-center p-4 text-stone-500">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form className="card-body" onSubmit={handleAddCoffee}>
          {/* coffee name & chef name */}
          <div className="flex gap-4 justify-center items-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                placeholder="Coffee name"
                className="input input-bordered w-full"
                name="coffeeName"
                required
                // defaultValue={data?.coffeeName}
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                placeholder="Chef Name"
                className="input input-bordered w-full"
                name="chefName"
                required
              />
            </div>
          </div>
          {/* supplier */}
          <div className="flex gap-4 justify-center items-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                placeholder="Supplier name"
                className="input input-bordered w-full"
                name="supplierName"
                required
              />
            </div>
            {/* Test */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                placeholder="Taste Name"
                className="input input-bordered w-full"
                name="testName"
                required
              />
            </div>
          </div>
          {/* category & detail */}
          <div className="flex gap-4 justify-center items-center">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Coffee Category"
                className="input input-bordered w-full"
                name="category"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Detail</span>
              </label>
              <input
                type="text"
                placeholder="Detail Coffee Name"
                className="input input-bordered w-full"
                name="detail"
                required
              />
            </div>
          </div>
          {/* Photo url */}
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                name="photo"
                required
              />
            </div>
          </div>
          <div className="">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Coffee Price"
                className="input input-bordered w-1/2"
                name="price"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="btn btn-block  bg-[#D2B48C]"
              value={"Add Coffee"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffees;
