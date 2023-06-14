import React from 'react';
import data from '../database/data';
import { topThreeBias } from '../helper/helper.js';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Player } from '@lottiefiles/react-lottie-player';

/* Import actions */
import { resetResultAction } from '../redux/result_reducer';
import { resetAllAction } from '../redux/question_reducer';

export default function ResultTable() {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)
  const threeBiases = topThreeBias(result, answers);
  

  return (
    <div className="font-poppins place-content-center">
      <Carousel showStatus={false} showIndicators={false} showThumbs={false} autoPlay interval={4000} infiniteLoop>
        {threeBiases.slice(0, 3).map((biasType, index) => (
          <div key={index} className="carousel-slide bg-white rounded mx-20 py-18">
            <h2 className="bias-type font-semibold mb-6 text-[30px] pt-4">{index+1+ ')  ' + biasType}</h2>
            <div className="lottie-player">
              <Player
                loop
                autoplay
                src={data.find(item => item.bias_type === biasType).animation}
                style={{ width: '300px', height: '200px' }}
              />
            </div>
            <div className="description-container">
              <p className="description font-light text-[17px] py-6 mx-8">
                {data.find(item => item.bias_type === biasType).description}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}