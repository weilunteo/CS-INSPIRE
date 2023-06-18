import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { Player } from '@lottiefiles/react-lottie-player';

export default function PreQuiz() {
  return (
    <div className={`w-full h-screen bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className="flex flex-col items-center">
        <h1 className='flex-1 font-poppins font-semibold ss:text-[32px] text-[32px] text-white py-4'>Identifying Potential Bias</h1>

        <Player
                loop
                autoplay
                src="https://assets8.lottiefiles.com/packages/lf20_qqu8eybe.json"
                style={{ width: '40%', height: '40%' }}
        />

        <div className= 'bg-white rounded flex flex-col items-center'>

          <ul className='text-neutral-600 list-disc mb-6 mt-4 ss:text-[16px] text-[16px] px-14 py-6'>
            <li>You will be asked 10 questions one after another.</li>
            <li>
              Each question has two options, 'Yes' or 'No'. Choose only one option.
            </li>
            <li>You can review and change your answers before the end of the quiz.</li>
            <li>Your top three bias types will be displayed after the quiz has been completed.</li>
          </ul>


        <Link
          to='/quiz'
          type="button"
          className={`mb-8 py-4 px-6 bg-blue-gradient
          font-poppins font-medium text-[18px] text-primary outline-none rounded
          ${styles}`}
        >
          Start Quiz!
        </Link>

        </div>
    


      </div>
    </div>
  );
}