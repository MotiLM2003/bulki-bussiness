import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';
import Bulb from '../../../components/Icons/Bulb';
import HomePage from './HomePage';
import About from './About';
import Service from './Service';
import Pricing from './Pricing';
import Contact from './Contact';
import Popup from '../../../components/Popup/Popup';
import Input from '../../../components/Input/Input';
import Login from '../../../components/Icons/Login';

const Landing = ({ onLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, SetDetails] = useState({ email: '', password: '' });
  const onClose = () => setIsOpen(false);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetDetails({ ...details, [name]: value });
  };

  const onOpen = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    Events.scrollEvent.register('begin', function (to, element) {
      // console.log('begin', to, element);
    });
    Events.scrollEvent.register('end', () => {
      // console.log('end');
    });
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div>
      <Header onOpen={onOpen} />
      <Element name='section-1' className='element'>
        <HomePage />
      </Element>
      <Element name='section-2' className='element'>
        <About />
      </Element>
      <Element name='section-3' className='element'>
        <Service />
      </Element>
      {/* <Element name='section-4' className='element'>
        <Pricing />
  </Element> */}
      <Element name='section-5' className='element'>
        <Contact />
      </Element>

      {/* <div className='position:relative opacity-[.3]'> <div className='bulb'>
          <Bulb />
  </div>/div> */}

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size='lg'
        lockScrollOnMount={false}
        outline='0'
      >
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='0%'
          backdropBlur='4px'
        />
        <ModalContent>
          <ModalHeader>
            <div className='flex  gap-4 justify-center items-center border-b border-b-primary p-1'>
              <div>
                <Login />
              </div>
              <Text className='text-red-400 font-bold'>LOG IN</Text>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col  items-center gap-2 md:justify-around'>
                <div>
                  <div className='flex items-center gap-2  text-red-400 '>
                    <p>User name:</p>
                  </div>
                  <Input
                    name='email'
                    placeholder='Enter your email address'
                    value={details.email}
                    onChange={onChange}
                    extraClass={`text-xs  text-gray-500`}
                  />
                </div>
                <div>
                  <div className='flex items-center gap-2  text-red-400 '>
                    <p>Password:</p>
                  </div>
                  <Input
                    name='password'
                    type='password'
                    placeholder='Enter your password.'
                    value={details.password}
                    onChange={onChange}
                    extraClass={`text-xs   text-gray-500`}
                  />
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button
                  onClick={() => {
                    onLogin(details);
                  }}
                  className='grow bg-red-200 py-1 px-2 text-[.8em] min-w-[120px] max-w-[80%]  rounded cursor-pointer  hover:bg-red-500 transition duration-300 hover:shadow-lg '
                >
                  <div className='flex items-center justify-center gap-2  text-red-700  hover:text-white'>
                    <p>Login</p>
                  </div>
                </button>
              </div>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Landing;
