import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import Tabs from '../components/Tabs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function HornsEffect() {
    
    const [value, setValue] = useState(0);

    // console.log(toolkits[4].description)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/5 bg-gray-200 border-r border-gray-400">
        {/* Course Image */}
        <div>
        <img src={`../src/assets/hornseffect.jpg`} alt="Bias Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
    

        {/* Course Name */}
        <div className="text-left p-4 mb-8 font-poppins font-semibold ss:text-[18px]">
          Description:
          <div>
          </div>
          <div className="text-left p-4 mb-8 font-poppins font-normal ss:text-[14px]">
          The horns effect is the opposite of the halo effect. 
          It occurs when a negative impression of one characteristic of an individual dominates the perception of the individual as a whole. 
          <br/> <br/>For example, if a person is considered to be rude or arrogant, this negative impression might overshadow other positive characteristics that the person possesses.
        </div>

        </div>
      </div>

      <div className="w-4/5 bg-white p-4">
      <Link to="/toolkit">
      <button className="absolute top-0 right-0 bg-primary text-white px-4 py-2 my-8 mx-4 rounded flex items-center">
        Exit
        <ExitToAppIcon className="ml-2" />
      </button>
    </Link>

        <div className="text-left p-4 mb-4 font-poppins font-semibold ss:text-[32px]">
            Horns Effect
        </div>
        

        {/* Clickable Navigation */}
        <div>
         <Tabs/>
        </div>
      </div>
    </div>
  );
}
