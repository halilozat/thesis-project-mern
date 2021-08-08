import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { deleteUser, getUsers } from "../../context/userContext/apiCalls";
import { UserContext } from "../../context/userContext/UserContext";

export default function UserList() {
  const { users, dispatch } = useContext(UserContext)
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    getUsers(dispatch)
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch)
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg"
              src={
                publicFolder + params.row.profilePicture !== "http://localhost:5000/images/"
                  ? publicFolder + params.row.profilePicture
                  : "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "isAdmin",
      headerName: "Admin?",
      width: 200,
      renderCell: (params) => {
        return (

          <div className="userListUser">
            {
              params.row.isAdmin
                ?
                <div style={{ color: "blue" }}>
                  <b>ADMIN</b>
                </div>
                :
                <small>kullanıcı</small>
            }
          </div>
        )
      }
    },

    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/user/" + params.row._id, user: params.row }}>
              <button className="userListEdit">Düzenle</button>
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
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
