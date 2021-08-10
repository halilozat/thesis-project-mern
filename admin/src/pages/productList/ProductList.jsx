import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/postContext/PostContext";
import { deletePost, getPosts } from "../../context/postContext/apiCalls";

export default function ProductList() {
  const { posts, dispatch } = useContext(PostContext)
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    getPosts(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deletePost(id, dispatch)
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 150 },
    { field: "userId", headerName: "USER_ID", width: 150 },
    {
      field: "postImg",
      headerName: "PostImg",
      width: 75,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg"
              src={
                publicFolder + params.row.img !== "http://localhost:5000/images/undefined"
                  ? publicFolder + params.row.img
                  : "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
            />
          </div>
        );
      },
    },
    {
      field: "post",
      headerName: "Post",
      width: 500,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.desc}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/product/" + params.row._id, post: params.row }}>
              <button className="productListEdit">Güncelle</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={posts}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
