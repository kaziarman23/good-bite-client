import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import UseGreenToBlueBtn from "../../CusmotHooks/UseGreenToBlueBtn";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useRequest from "../../CusmotHooks/useRequest";
import UseAxios from "../../CusmotHooks/UseAxios";

const RequestFoods = () => {
  // context api
  const { user } = useContext(AuthContext);

  // hooks
  const axiosPublic = UseAxios();
  const [request, refetch] = useRequest();

  // filtering the data
  const requestlist = request.filter(
    (food) => food.requesterEmail === user.email
  );

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Did you receive your requested food?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I have it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/requests/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Alhamdulillah!",
                text: "Enjoy your food.",
                icon: "success",
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  // handling empty requests
  if (requestlist.length === 0) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center flex-col gap-3 px-4">
        <h1 className="text-white text-2xl uppercase text-center">
          No request has been made till now from you!
        </h1>
        <Link to="/availableFoods">
          <UseGreenToBlueBtn>Request Food</UseGreenToBlueBtn>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black">
      <div className="w-full max-w-7xl mx-auto p-4 bg-slate-950 text-white space-y-5">
        <h5 className="text-left font-bold text-lg">
          Mr.{user.displayName}, your total food requests are: {requestlist.length}
        </h5>
        {/* table content */}
        <div className="overflow-x-auto">
          <table className="table table-auto w-full text-sm md:text-base">
            {/* head */}
            <thead className="text-white">
              <tr className="text-left">
                <th>SL:</th>
                <th>Donor Info</th>
                <th>Food Image</th>
                <th>Food Name</th>
                <th>Pickup Location</th>
                <th>Quantity</th>
                <th>Expire Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* mapping the array */}
              {requestlist.map((request, index) => (
                <tr key={index} className="border-t">
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={request.image}
                            alt={request.name}
                            className="object-cover w-12 h-12 rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{request.name}</div>
                        <div className="text-sm opacity-50">{request.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <img
                      src={request.foodImg}
                      alt={request.foodName}
                      className="object-cover w-12 h-12 rounded-full"
                    />
                  </td>
                  <td>
                    <h1 className="text-md">{request.foodName}</h1>
                  </td>
                  <td>{request.pickupLocation}</td>
                  <td>{request.quantity}</td>
                  <td>{request.expireDate}</td>
                  <td>
                    <UseGreenToBlueBtn
                      onClick={() => handleDelete(request._id)}
                    >
                      Food Received
                    </UseGreenToBlueBtn>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RequestFoods;
