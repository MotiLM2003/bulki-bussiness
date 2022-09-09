import "./offerList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { offerRows } from "../../dummyData";
import { productRows } from "../../dummyData";

import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';



export default function OfferList({user}) {

  var axios = require('axios');
  var config = {
    method: 'get',
    url: 'http://52.63.161.150/business/get_store_offer_per_store?storeID=' + user.store_id, //pass the business id, add business_id to user view when login.
    //url: 'http://52.63.161.150/business/get_store_items?storeID=1',
    headers: { 
      'Authorization': 'Bearer ' + user.token 
    }
  };

  const [data, setData] = React.useState([]);
  console.log(user.token)
  console.log(config)
  

  const getOffers = () => {
    axios(config).then(function (response) {
      console.log((response.data));
      setData(response.data)
    }).catch(function (error) {
        if (error.response.status === 500) {
          window.alert("Error when retrieving items");
        } 
    });
  }

  React.useEffect(() => getOffers(), []);

  const columns = [
    { field: "storeOfferID", headerName: "ID", width: 90 },
    { field: "offerType", headerName: "Offer Type", width: 150 },
    
    { field: "storeName", headerName: "Store", width: 125 },
    {
      field: "description",
      headerName: "Offer Name",
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="offerListItem">
      //       <img className="offerListImg" src={params.row.img} alt="" />
      //       {params.row.name}
      //     </div>
      //   );
      // },
    },

    { field: "itemPrice",headerName: "Initial Price",width: 160,},
    { field: "discount",headerName: "Current Discount",width: 180,},
    { field: "itemPriceDiscounted",headerName: "Discounted Price",width: 180,},
    { field: "qty", headerName: "Initial Stock", width: 200 },
    { field: "qtyAvailable", headerName: "Current Stock", width: 200 },
    { field: "status",headerName: "Status",width: 120 },

  ];

  return (
    <div className="offerList">
     {(data.storeOfferID != "") ? (

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