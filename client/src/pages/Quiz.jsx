import React, { useEffect, useState } from 'react';
import styles from '../style';
import Questions from '../components/Questions';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function Quiz() {
  const [check, setChecked] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });


  function onNext() {
    if (check === undefined) {
      toast.error('Please select an option.');
      return;
    }

    if (trace < queue.length) {
      dispatch(MoveNextQuestion());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
    setChecked(undefined);
  }

  function onPrev() {
    dispatch(MovePrevQuestion());
  }

  function onChecked(check) {
    setChecked(check);
  }

  if (result.length && result.length >= queue.length) {
    return <Navigate to="/result" replace="true" />;
  }

  return (
    <div className={`h-screen bg-primary ${styles.paddingX}`}>

      <Toaster/>
      
      <Questions onChecked={onChecked} /> 

      <div className="grid flex flex-col justify-center">
        {trace > 0 ? (
          <button
            onClick={onPrev}
            className={`col-start-1 col-end-2 mx-8 py-2 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded w-[70%] ${styles}`}
          >
            Previous
          </button>
        ) : (
          <div></div>
        )}

        <button
          onClick={onNext}
          className={`col-end-6 col-span-1 py-2 px-6 mx-8 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded w-[90%] ${styles}`}
        >
          Next
        </button>
      </div>
    </div>
  );
}