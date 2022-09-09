import { Link } from 'react-router-dom';
import './campaign.css';
import Chart from '../../components/chart/Chart';
import { campaignData } from '../../dummyData';
import { Publish } from '@material-ui/icons';
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

export default function campaign() {
  return (
    <div className='campaign'>
      <div className='campaignTitleContainer'>
        <h1 className='campaignTitle'>campaign</h1>
        <Link to='/newcampaign'>
          <button className='campaignAddButton'>Create</button>
        </Link>
      </div>
      <div className='campaignTop'>
        <div className='campaignTopLeft'>
          <Chart
            data={campaignData}
            dataKey='Sales'
            title='Sales Performance'
          />
        </div>
        <div className='campaignTopRight'>
          <div className='campaignInfoTop'>
            <img
              src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
              alt=''
              className='campaignInfoImg'
            />
            <span className='campaignName'>Apple Airpods</span>
          </div>
          <div className='campaignInfoBottom'>
            <div className='campaignInfoItem'>
              <span className='campaignInfoKey'>id:</span>
              <span className='campaignInfoValue'>123</span>
            </div>
            <div className='campaignInfoItem'>
              <span className='campaignInfoKey'>sales:</span>
              <span className='campaignInfoValue'>5123</span>
            </div>
            <div className='campaignInfoItem'>
              <span className='campaignInfoKey'>active:</span>
              <span className='campaignInfoValue'>yes</span>
            </div>
            <div className='campaignInfoItem'>
              <span className='campaignInfoKey'>in stock:</span>
              <span className='campaignInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='campaignBottom'>
        <form className='campaignForm'>
          <div className='campaignFormLeft'>
            <label>campaign Name</label>
            <input type='text' placeholder='Apple AirPod' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='campaignFormRight'>
            <div className='campaignUpload'>
              <img
                src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt=''
                className='campaignUploadImg'
              />
              <label for='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='campaignButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
