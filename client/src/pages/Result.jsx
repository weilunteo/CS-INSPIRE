import React, { useEffect, useState } from 'react';
import styles from '../style'
import { BrowserRouter as Router, Link as RouterLink } from 'react-router-dom';
import ResultTable from '../components/ResultTable'
import { useDispatch, useSelector } from 'react-redux';
import { attemptsNumber, topThreeBias } from '../helper/helper.js';
import withLoader from '../components/withLoader';

/* import actions */
import { resetResultAction } from '../redux/result_reducer';
import { resetAllAction } from '../redux/question_reducer';
import { usePublishResult } from '../hooks/setResult';

const Result = () => {
  const dispatch = useDispatch();
  const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state)

  useEffect(() => {
    const attempts = attemptsNumber(result);
    const threeBiases = topThreeBias(result, answers);
    console.log(threeBiases)

     // Dispatch the action to store user result 
     usePublishResult({ result, attempts, biases: threeBiases });

  }, []);

  function onRestart() {
    // console.log('On Restart')
    dispatch(resetAllAction())
    dispatch(resetResultAction())
  }

  return (
    <div className={`h-screen bg-primary ${styles.paddingX}`}>
      <h2 className='text-white font-poppins mb-6 text-[20px] flex justify-center pt-20'>Your Top 3 Biases:</h2>

      <div>
        <ResultTable />
      </div>

      <div className="flex justify-center">
        <RouterLink to='/quiz' type="button" onClick={onRestart}
          className={`my-8 py-2 mx-20 bg-blue-gradient font-poppins flex flex-col items-center w-[12%]
          font-medium text-[18px] text-primary outline-none rounded ${styles}`}>
          Restart
        </RouterLink>

        <RouterLink to='/' type="button"
          className={`my-8 py-2  mx-20 bg-blue-gradient font-poppins flex flex-col items-center w-[12%]
          font-medium text-[18px] text-primary outline-none rounded ${styles}`}>
          Enter App
        </RouterLink>
      </div>
    </div>
  )
}

export default withLoader(Result);