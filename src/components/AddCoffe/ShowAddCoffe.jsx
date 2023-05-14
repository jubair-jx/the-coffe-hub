import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowAddCoffe = ({ coffe, coffes, setCoffes }) => {
  const { _id, name, supplierName, category, chef, taste, details, photoUrl } =
    coffe;

  const handleDelete = (id) => {
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
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`http://localhost:4000/coffes/${id}`, {
          method: "DELETE",
          // headers: {
          //   "content-type": "application/json"
          // },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffe has been deleted.", "success");
              const remaining = coffes.filter((coffe) => coffe._id !== _id);
              setCoffes(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side h-60 bg-[#F5F4F1] shadow-xl border-2">
        <figure>
          <img
            src={photoUrl}
            alt="Movie"
            className="w-40 rounded-xl px-4 py-2 h-48"
          />
        </figure>
        <div className="  py-14 flex">
          <div className="">
            <h2 className="text-md ">
              {" "}
              <span className="font-semibold">Name:</span> {name}
            </h2>
            <h2 className="text-md ">
              {" "}
              <span className="font-semibold">Chef:</span> {chef}
            </h2>
            <h2 className="text-md ">
              {" "}
              <span className="font-semibold">Category:</span> {category}
            </h2>
            <h2 className="text-md ">
              {" "}
              <span className="font-semibold">Price:</span> {details}$
            </h2>
          </div>
          <div className="flex flex-col-reverse gap-3 items-center justify-center ml-10 md:ml-20">
            <button className="px-3 py-3 bg-[#E3B577]  rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <Link
              to={`/updateProduct/${_id}`}
              className="px-3 py-3 bg-[#3C393B] text-white rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-3 py-3 bg-[#EA4744] rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAddCoffe;
