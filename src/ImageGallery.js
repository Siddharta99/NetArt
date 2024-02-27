

// ImageGallery.js
import React from 'react';
import FirstImage from './images/1.png'; // Import the image
import SecondImage from './images/logo.png'; // Import the image
import ThirdImage from './images/2.png'; // Import the image
import FourthImage from './images/3.png'; // Import the image


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faFirefox } from '@fortawesome/free-brands-svg-icons';

const ImageGallery = () => {
  return (
    <>
    <div className='h-full  w-full '>
      <img className='h-screen w-1/4 mt-40' src={FirstImage} alt="First " />
      <h1 className='h-40 w-50 absolute top-40 left-80  flex-wrap'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
      
      <p className='h-4/5 w-4/5 absolute mt-10 text-xs top-40 left-80'>

      •C.R.I.'s energy efficient products are well recognized by various Government Institutions,
 as trustworthy products for various projects across the globe to save energy.
 <p>
 •C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
</p>

      <img className='h-4/5 w-4/5 ml-10  absolute top-40 mt-40 left-80  flex-wrap' src={ThirdImage} alt=""/>
      <p className='h-4/5 w-4/5 absolute mt-10 text-xs object-bottom left-80'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      <img className='h-40 w-50 absolute top-0 left-80  flex-wrap' src={SecondImage} alt="First " />

          </div>
    <div>
    <p className='object-bottom mt-20'>
INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
<img className='object-bottom h-4/5 w-4/5 m-10 p-20' src={FourthImage} alt=''/>

        </div>
        <div className='flex  justify-center items-center'>
          <p >Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
          <br/>
        </div>
        <div className='border-b border-red-500 my-4'></div>
        <div>
          <h3 className='flex  justify-center items-center text-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <p className='mt-10 text-sm m-10'>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE <p className='flex items-center justify-center'>PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p></p>
        </div>
        
    <div>
    </div>
    <div className='flex bg-red-600 justify-center gap-10 h-20'>
    <div className=' mr-4  '>
    <FontAwesomeIcon  icon={faPhone} />
    <span>Toll free 1800 200 1254</span>
    </div>
    <div className='flex relative flex-wrap mr-4'> <FontAwesomeIcon  icon={faFacebook} />
      <span style={{ marginLeft: '5px' }}>www.facebook.com/cripumps</span>  </div>
    <div><FontAwesomeIcon className='mr-4' icon={faFirefox} />www.crigroups.com</div>
    </div>
    </>
  );
}

export default ImageGallery;
