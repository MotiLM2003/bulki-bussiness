import './newProduct.css';
import React from 'react';

var axios = require('axios');

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        name: props.name,
        description: props.desription,
        price: props.price,
        itemCategory: props.itemCategory,
        currencyType: 'AUD',
        fromUserID: props.user.user_id,
      },
    };
  }

  handleNameChanged(event) {
    var product = this.state.product;
    product.name = event.target.value;
    this.setState({ product: product });
  }

  handleDescriptionChanged(event) {
    var product = this.state.product;
    product.description = event.target.value;
    this.setState({ product: product });
  }

  handleDescriptionChanged(event) {
    var product = this.state.product;
    product.description = event.target.value;

    this.setState({ product: product });
  }

  handlePriceChanged(event) {
    var product = this.state.product;
    product.price = event.target.value.replace(/^0+/, '');

    this.setState({ product: product });
  }

  handleCategoryChanged(event) {
    var product = this.state.product;
    product.itemCategory = '"[\\"' + event.target.value + '\\"]"';
    this.setState({ product: product });
  }

  handleButtonClicked() {
    //Validate inputs and if all ok then call API to create the object.
    // get the results and validate it is okay.
    var name = this.state.product.name;
    var description = this.state.product.description;
    var price = this.state.product.price;
    var category = this.state.product.itemCategory;

    var store_id = this.props.user.store_id;
    var token = this.props.user.token;

    var config = {
      method: 'get',
      url:
        'http://52.63.161.150/business/create_item?item={ "name":"' +
        name +
        '", "description":"' +
        description +
        '", "price":"' +
        price +
        '","itemCategory":' +
        category +
        ',"fromUserID":"1","currencyType":"AUD","storeID":' +
        store_id +
        '}',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    };
    console.log(config.url);
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.alert('Item created successfully');
      })
      .catch(function (error) {
        if (error.response.status === 500) {
          window.alert('The item already exists');
        }
      });

    console.log(this.state.product);
  }

  render() {
    return (
      <div className='newProduct'>
        <h1 className='addProductTitle'>New Product</h1>

        <div className='addProductItem'>
          <label>Image</label>
          <input type='file' id='file' />
        </div>

        <div className='addProductItem'>
          <label>Name</label>
          <input
            type='text'
            placeholder='Product Name'
            value={this.state.product.name || ''}
            onChange={this.handleNameChanged.bind(this)}
          />
        </div>

        <div className='addProductItem'>
          <label>Description</label>
          <input
            type='text'
            placeholder='Product Name'
            value={this.state.product.description || ''}
            onChange={this.handleDescriptionChanged.bind(this)}
          />
        </div>

        <div className='addProductItem'>
          <label>Price</label>
          <input
            type='number'
            placeholder='123'
            value={this.state.product.price || 0}
            onChange={this.handlePriceChanged.bind(this)}
          />
        </div>

        <div className='addProductItem'>
          <label>Category</label>
          <select
            defaultValue={'DEFAULT'}
            id='dropdown'
            onChange={this.handleCategoryChanged.bind(this)}
          >
            <option value='DEFAULT' disabled>
              Select Category
            </option>
            <option value='Beer'>Beer</option>
            <option value='Coffee'>Coffee</option>
            <option value='Electronics'>Electronics</option>
          </select>
        </div>
        <button
          onClick={this.handleButtonClicked.bind(this)}
          className='addProductButton'
        >
          Create
        </button>
      </div>
    );
  }
}
