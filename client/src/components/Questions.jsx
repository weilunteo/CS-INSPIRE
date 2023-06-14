import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../database/data';

/** Custom Hook */
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const questions = useSelector((state) => state.questions.queue[state.questions.trace]);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }


  if (isLoading) return <h3 className='text-light'>isLoading</h3>;
  if (serverError) return <h3 className='text-light'>{serverError.message || "Unknown Error"}</h3>;

  return (
    <div className='questions py-8 flex items-center justify-center'>
       <div className='card bg-white p-4 rounded shadow px-10 mt-20 mx-20' style={{ width: '800px', height: '300px' }}>
        <p className='font-poppins mb-6 ss:text-[14px] text-[14px]'>Question {questions?.id} of {data.length}</p>
        <h2 className='font-poppins font-semibold mb-6 text-[20px]'>{questions?.question}</h2>

        <hr className='my-4' />

        <ul key={questions?.id}>
          {questions?.options.map((qn, i) => (
            <li key={i} className='options-row mt-3'>
              <div className='option'>
                <input
                  type='radio'
                  value={false}
                  name='options'
                  id={`qn${i}-option`}
                  onChange={() => onSelect(i)}
                />

                <label className='ml-4 ss:text-[18px] text-[18px]' htmlFor={`qn${i}-option`}>
                  {qn}
                </label>
              </div>
              {/* <div className={`check ${result[trace] == i ? 'checked' : ''}`}></div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
