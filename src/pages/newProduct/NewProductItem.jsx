import React, { useState, useEffect } from 'react';
import '../../apis/userAPI.js';
import Product from '../../components/Icons/Product.jsx';
import { Uploader } from 'uploader';
import { UploadButton } from 'react-uploader';
import Input from '../../components/Input/Input.js';
import { Select } from '@chakra-ui/select';

import api from '../../apis/userAPI';
const uploader = new Uploader({
  apiKey: 'free',
});
const options = { multi: false };

const NewProductItem = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    itemCategory: 'DEFAULT',
    currencyType: 'AUD',
    fromUserID: 1,
  });

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    console.log(product);
  }, [product]);

  const handleSubmit = async () => {
    try {
      const { data } = await api.post(
        'http://52.63.161.150/business/create_item',
        product
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='shadow w-full'>
      <div className='flex gap-2 items-center mb-6 w-screen-full shadow p-4'>
        <div>
          <Product fill={'#5185EE'} />
        </div>
        <p className='text-xl text-[#5185EE] font-bold'>New Product</p>
      </div>

      <div className='px-4'>
        <div className='flex flex-col gap-2 mb-4'>
          <p className='text-sm'>Product Image:</p>
          <div>
            <UploadButton
              uploader={uploader} // Required.
              options={options} // Optional.
              onComplete={(files) => {
                // Optional.
                if (files.length === 0) {
                  alert('no files selected');
                  console.log('No files selected.');
                } else {
                  console.log('Files uploaded:');
                  console.log(files.map((f) => f.fileUrl));
                }
              }}
            >
              {({ onClick }) => (
                <button
                  onClick={onClick}
                  className='bg-red-400 text-white rounded text-xs p-2'
                >
                  Upload a file...
                </button>
              )}
            </UploadButton>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <label className='text-sm'>Product Name</label>
            <Input
              placeholder={'Product name'}
              value={product.name}
              onChange={onChange}
              name='name'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm'>Product Description</label>
            <Input
              placeholder={'Product description'}
              value={product.description}
              onChange={onChange}
              name='description'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-sm'>Product Price</label>
            <Input
              type='number'
              value={product.price}
              onChange={onChange}
              name='price'
              placeholder={'Product price'}
            />
          </div>
          <div className='select-catagory flex flex-col gap-1'>
            <label className='text-sm'>Product Catagory</label>
            <Select
              colorScheme={'red'}
              onChange={onChange}
              value={product.itemCategory}
              name={'itemCategory'}
            >
              <option value='DEFAULT' disabled>
                Select Category
              </option>
              <option value='Beer'>Beer</option>
              <option value='Coffee'>Coffee</option>
              <option value='Electronics'>Electronics</option>
            </Select>
          </div>
          <div className='flex justify-center'>
            <button
              className='bg-red-400 text-white rounded text-xs p-2 mt-4 min-w-[200px]'
              onClick={handleSubmit}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductItem;
