import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';

export default function ProductList({user}) {

  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'http://52.63.161.150/business/get_store_items?storeID=' + user.store_id,
    //url: 'http://52.63.161.150/business/get_store_items?storeID=1',
    headers: { 
      'Authorization': 'Bearer ' + user.token 
    }
  };



  const [data, setData] = React.useState([]);
  console.log(user.token)
  console.log(config)

  const getProducts = () => {
    axios(config).then(function (response) {
      console.log((response.data));
      setData(response.data)

    }).catch(function (error) {
        if (error.response.status === 500) {
          window.alert("Error when retrieving items");
        } 
    });
  }
  React.useEffect(() => getProducts(), []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 }, 
    { field: "itemName", headerName: "Name", width: 200},
    // {
    //   field: "product",
    //   headerName: "Product",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="productListItem">
    //         <img className="productListImg" src={params.row.img} alt="" />
    //         {params.row.name}
    //       </div>
    //     );
    //   },
    // },
    { field: "itemCategory", headerName: "Category", width: 200 },
    {
      field: "itemStatus",
      headerName: "Status",
      width: 120,
    },
    {
      field: "itemPrice",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/newOffer/" + params.row.id}>
              <button className="createOfferButtom">Offer</button>
            </Link>

            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>

          </>



        );
      },
    },
  ];




  return (
    <div className="productList">
     {(data.id != "") ? (

        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />

        
    
      ) : (
        console.log("no data")
      )}
    </div>
  );

}
