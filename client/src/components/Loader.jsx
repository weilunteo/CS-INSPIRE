import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type, color }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
    <ReactLoading type="spinningBubbles" color="#FFFFFF" height={100} width={100} />
    <h1 className="font-poppins text-white text-2xl mt-10">Preparing Your Results...</h1>
  </div>
);

export default Loader;
