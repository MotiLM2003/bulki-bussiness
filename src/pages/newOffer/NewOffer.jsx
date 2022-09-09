import "./newOffer.css";
import React from 'react';

import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';



var axios = require('axios');


export default class CustomerForm extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      Offer: {
        name: props.name,
        offerType: 'Normal',
        description: props.desription,
        price: props.price,
        itemCategory: props.itemCategory,
        qty: props.qty,
        discount: props.discount,
        discountOptions: '[{"qtyFrom":"1","qtyTo":"19","discount":"0.10"},{"qtyFrom":"20","qtyTo":"45","discount":"0.25"}]', // if bulk then enable a section to select the discount options.
        startDTTM: new Date().getTime(),
        endDTTM: new Date().getTime()
        // startDTTM: new Date(),
        // endDTTM: new Date()
        

      }
    }

 
  }

  handleStartDTTMChanged(date) {
    var Offer        = this.state.Offer;
    Offer.startDTTM  = date.getTime();
    this.setState({ Offer: Offer });
  }

  handleEndDTTMChanged(date) {
    var Offer        = this.state.Offer;
    Offer.endDTTM  = date.getTime();
    this.setState({ Offer: Offer });
  }

  handleNameChanged(event) {
    var Offer        = this.state.Offer;
    Offer.name  = event.target.value;
    this.setState({ Offer: Offer });
  }

  handleDescriptionChanged(event) {
    var Offer        = this.state.Offer;
    Offer.description  = event.target.value;
    this.setState({ Offer: Offer });
  }


  handleDiscountChanged(event) {
    var Offer      = this.state.Offer;
    Offer.discount = event.target.value;

    this.setState({ Offer: Offer });
  }

  handleQtyChanged(event) {
    var Offer      = this.state.Offer;
    Offer.qty = event.target.value;

    this.setState({ Offer: Offer });
  }

  handlePriceChanged(event) {
    var Offer    = this.state.Offer;
    Offer.price = event.target.value.replace(/^0+/, '');

    this.setState({ Offer: Offer });
  }

  handleOfferTypeChanged(event) {
    var Offer    = this.state.Offer;
    Offer.offerType = event.target.value;

    this.setState({ Offer: Offer });
  }

  
  // handleCategoryChanged(event) {
  //   var Offer    = this.state.Offer;
  //   Offer.itemCategory = '\"[\\\"'   +  event.target.value + '\\\"]\"';
  //   this.setState({ Offer: Offer });
  // }

  handleButtonClicked() {
    //Validate inputs and if all ok then call API to create the object.
    // get the results and validate it is okay.
    var name = this.state.Offer.name
    var description = this.state.Offer.description
    var price = this.state.Offer.price
    var offerType = this.state.Offer.offerType
    var qty = this.state.Offer.qty
    var discount = this.state.Offer.discount
    var discountOptions = this.state.Offer.discountOptions
    var store_id = this.props.user.store_id
    var token = this.props.user.token
    var fromUserID = this.props.user.user_id
    var currencyType = 'AUD' // should come from default business/store config

    var startDTTM = new Date(this.state.Offer.startDTTM).toLocaleString()
    startDTTM = startDTTM.substring(6,10) + '-' + startDTTM.substring(3,5) + '-' + startDTTM.substring(0,2) + ' ' + startDTTM.substring(12,21) + '.000'
    var endDTTM = new Date(this.state.Offer.endDTTM).toLocaleString()
    endDTTM = endDTTM.substring(6,10) + '-' + endDTTM.substring(3,5) + '-' + endDTTM.substring(0,2) + ' ' + endDTTM.substring(12,21) + '.000'

    var offerStartDttm = startDTTM
    var offerEndDttm = endDTTM

    var loc = document.location; 
    var itemID = loc.pathname.split('/')[2]


    var config = {
      method: 'get',
      url: 'http://52.63.161.150/business/create_store_offer?offer={ "storeID":"' + store_id + '","offerType":"' + offerType  +'", "name":"'+ name +'", "description":"'+ description + '", "itemID":"' + itemID + '", "itemPrice":"'+ price +  '", "qty":"'+ qty +  '", "qtyAvailable":"'+ qty + '", "discount":"'+ discount + '", "discountOptions":'+ discountOptions+',"fromUserID":"'+ fromUserID + '","offerStartDttm":"'+ offerStartDttm + '","offerEndDttm":"'+ offerEndDttm +    '","currencyType":"' + currencyType +'"}',
      headers: { 
        'Authorization': 'Bearer ' + token
      }
    };
    console.log(config.url)

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      window.alert("Offer created successfully");
    })
    .catch(function (error) {
        if (error.response.status === 500) {
          window.alert("The offer already exists");
    }
    });


    // const createOfferQuery = (offer) => {
    //   var query = "insert into STORE_OFFER(object, store_id, offer_type, offer_name, offer_description, item_id, item_price, qty, qty_available, discount, discount_options, offer_start_dttm, offer_end_dttm ,created_by) 
    //   values('" + JSON.stringify(offer) + "','" + offer.storeID + "','" 
    //    + offer.offerType + "','" + offer.name + "','" + offer.description + "','" + offer.itemID +  "','" + offer.itemPrice +
    //    "','" + offer.qty + "','" + offer.qtyAvailable + "','" + offer.discount + 
    //    "','" +   JSON.stringify(offer.discountOptions)    + 
    //    "','" + offer.offerStartDttm + 
    //    "','" + offer.offerEndDttm + "','" + offer.fromUserID +"')"
    //   return query;








    
  }



  render() {
    return (

    <div className="newOffer">
      <h1 className="addOfferTitle">New Offer</h1>


        <div className="addOfferItem">
          <label>Offer Name</label>
          <input type="text"  placeholder="Offer Name" value={this.state.Offer.name || ''} onChange={this.handleNameChanged.bind(this)} />
        </div>

        <div className="addOfferItem">
          <label>Offer Description</label>
          <input type="text"  placeholder="Offer Description" value={this.state.Offer.description || ''} onChange={this.handleDescriptionChanged.bind(this)} />
        </div>


        <div className="addOfferItem">
          <label>Initial Price</label>
          <input type="number" placeholder="123" value={this.state.Offer.price || 0} onChange={this.handlePriceChanged.bind(this)} />
        </div>

        <div className="addOfferItem">
          <label>Initial Discount</label>
          <input type="number" placeholder="123" value={this.state.Offer.discount || 0} onChange={this.handleDiscountChanged.bind(this)} />
        </div>



        <div className="addOfferItem">
          <label>Quantity</label>
          <input type="number" placeholder="123" value={this.state.Offer.qty || 0} onChange={this.handleQtyChanged.bind(this)} />
        </div>




        <div className="addOfferItem">
          <label>Offer Start Date</label>
          <div>
            <DateTimePicker
                onChange={ this.handleStartDTTMChanged.bind(this) }
                value={new Date(this.state.Offer.startDTTM)}
                name="startDate"
                dateFormat="MM/dd/yyyy"     
            />
         </div>
         
         <label>Offer End Date</label>
          <div>
            <DateTimePicker
                onChange={ this.handleEndDTTMChanged.bind(this) }
                value={new Date(this.state.Offer.endDTTM)}
                name="endDate"
                dateFormat="MM/dd/yyyy"     
            />
         </div>
        
        </div>

        <div className="addOfferItem">
          <label>Offer Type</label>
          <select defaultValue={'Nomal'} id = "dropdown" onChange={this.handleOfferTypeChanged.bind(this)} >
          <option value="Normal" disabled>Select Offer Category</option>
            <option value="Normal">Normal</option>
            <option value="Bulk">Bulk</option>
          </select>
        </div>
        <button onClick={this.handleButtonClicked.bind(this)} className="addOfferButton">Create</button>
    </div>

      





  );
}
}
