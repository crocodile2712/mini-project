import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALlUsers, getOrder } from "../../redux/apiCalls";
import { useEffect } from "react";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const user = useSelector((state) => state.allUsers.users);
  const order = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  useEffect(() => {
    getALlUsers(dispatch);
    getOrder(dispatch);
  }, [dispatch]);

  console.log("Sdasda", user);
  console.log("123", order);
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row?.img
                  ? params.row.img
                  : "https://mcdn.coolmate.me/image/April2022/meme-cho-shiba-15.jpg"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      renderCell: (params) => {
        return order.some(ele => ele.userId === params.row._id) ? order
          .filter((ele) => ele.userId === params.row._id)
          .reduce((total, ele) => total + ele.amount, 0) :
          0
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[8, 12]}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
