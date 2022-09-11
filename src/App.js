import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

import NewOffer from './pages/newOffer/NewOffer';
import OfferList from './pages/offerList/OfferList';

import React, { useState } from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import api from './apis/userAPI';
import BusinessPortal from './pages/businessPortal/BusinessPortal';
import Landing from './pages/tests/landing/Landing';
import { Link } from 'react-router-dom';
import NewProductItem from './pages/newProduct/NewProductItem';

function App() {
  //Add logic to pick up user profile when the user logs in and sends this to the main dashboard.

  var axios = require('axios');
  var [user, setUser] = useState({
    user_name: '',
    user_email: '',
    user_id: '',
    token: '',
    business_name: '',
    business_email: '',
    business_address: '',
    store_id: '',
    store_name: '',
    store_address: '',
  });
  var [error, setError] = useState('');
  var userAPI = {};
  var token = '';

  function setUserProfile(user, token) {
    setUser({
      user_id: user.USER_ID,
      user_name: user.USER_NAME,
      user_email: user.USER_EMAIL,
      business_name: user.BUSINESS_NAME,
      business_email: user.BUSINESS_EMAIL,
      business_address: user.BUSINESS_ADDRESS,
      store_id: user.STORE_ID,
      store_name: user.STORE_NAME,
      store_address: user.STORE_ADDRESS,
      token: token,
    });
  }

  const onLogin = async (details) => {
    var details = {
      'email': details.email,
      'password': details.password,
    };

    const sendPostRequest = async () => {
      try {
        console.log('befoore call');
        const { data } = await api.post('/business/login', details);
        // const data = { email: ' test', password: 'sdsad' };
        console.log('data', data);
        userAPI = data.user;
        token = data.token;

        if (details.email == userAPI.USER_EMAIL) {
          console.log('Logged in');
          setUserProfile(userAPI, token);
        } else {
          console.log('Details do not match!');
        }

        return true;
      } catch (err) {
        // Handle Error Here
        //console.error(err);
        return false;
        console.log('something went wrong', err);
      }
    };
    return await sendPostRequest();
  };

  const Logout = () => {
    setUser({ user_name: '', user_email: '' });
  };

  return (
    <div className='App'>
      {user ? (
        <Router>
          <Topbar Logout={Logout} user={user} />
          <div className='container'>
            <Sidebar />
            <Switch>
              {/* <Route exact path="/">
            <Home />
          </Route> */}

              <Route exact path='/'>
                <BusinessPortal />
              </Route>
              <Route path='/users'>
                <UserList />
              </Route>
              <Route path='/user/:userId'>
                <User />
              </Route>
              <Route path='/newUser'>
                <NewUser />
              </Route>
              <Route path='/products'>
                <ProductList user={user} />
              </Route>
              <Route path='/product/:productId'>
                <Product />
              </Route>

              <Route path='/newProductItem'>
                <NewProductItem user={user} />
              </Route>

              <Route path='/newProduct'>
                <NewProduct user={user} />
              </Route>

              <Route path='/newOffer'>
                <NewOffer user={user} />
              </Route>

              <Route path='/offers'>
                <OfferList user={user} />
              </Route>
            </Switch>
          </div>
        </Router>
      ) : (
        // <LoginForm Login={Login} error={error} />
        <Landing onLogin={onLogin} />
        // <Router>
        // <Switch>
        //    <Route exact path="/login">
        //       <LoginForm Login={Login} error={error} />
        //   </Route>
        // </Switch>
        // </Router>
      )}
    </div>
  );
}

export default App;
