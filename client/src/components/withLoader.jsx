import React, { useState, useEffect } from 'react';
import Loader from './Loader';

const withLoader = (WrappedComponent) => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulating a loading delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    return (
      <div>
        {isLoading ? (
          <div>
            <Loader/>
          </div>
        ) : (
          <WrappedComponent />
        )}
      </div>
    );
  };
};

export default withLoader;
