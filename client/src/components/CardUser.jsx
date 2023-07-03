import React from 'react';
import styles from '../style';
import SingleCard from './SingleCard';
import { toolkits } from '../constants';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CardUser() {
  const forYouToolkits = toolkits.filter(
    (toolkit) =>
      toolkit.bias_type === 'Education' ||
      toolkit.bias_type === 'Ageism' ||
      toolkit.bias_type === 'Halo Effect'
  );

  const otherToolkits = toolkits.filter(
    (toolkit) =>
      toolkit.bias_type !== 'Education' &&
      toolkit.bias_type !== 'Ageism' &&
      toolkit.bias_type !== 'Halo Effect'
  );

  const groupedForYouToolkits = chunkArray(forYouToolkits, 3);
  const groupedOtherToolkits = chunkArray(otherToolkits, 3);

  return (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className="flex flex-wrap justify-center">
         <h2 className={styles.heading2} style={{ textAlign: 'center' }}>Recommended For You</h2>

        {groupedForYouToolkits.map((group, index) => (
          <div className="flex justify-center" key={index}>
            {group.map((card) => (
              <div className="w-[300px] h-full p-2 flex" key={card.id}>
                <SingleCard {...card} />
              </div>
            ))}
          </div>
        ))}

    <h2 className={styles.heading2} style={{ textAlign: 'center' }}>People Also Viewed</h2>

        {groupedOtherToolkits.map((group, index) => (
          <div className="flex justify-center" key={index}>
            {group.map((card) => (
              <div className="w-[300px] h-full p-2 flex" key={card.id}>
                <SingleCard {...card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function chunkArray(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
}
