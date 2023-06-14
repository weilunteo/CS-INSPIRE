import { unwrapResult } from '@reduxjs/toolkit';
import axios from 'axios';
import questions from '../database/data.js';


export function attemptsNumber(result){
    return result.filter(r => r !== undefined).length;
}

export function topThreeBias(result, answers) {
    const biasTypeCounts = {};
  
    for (let i = 0; i < result.length; i++) {
      if (result[i] === answers[i]) {
        const biasType = questions[i].bias_type;
        biasTypeCounts[biasType] = (biasTypeCounts[biasType] || 0) + 1;
      }
    }
  
    console.log('biasTypeCounts:', biasTypeCounts); // Check the counts for each bias type
  
    const sortedBiasTypes = Object.entries(biasTypeCounts).sort((a, b) => b[1] - a[1]);
    console.log('sortedBiasTypes:', sortedBiasTypes); // Check the sorted bias types
  
    const top3BiasTypes = sortedBiasTypes.slice(0, 3).map(([biasType]) => biasType);
    console.log('top3BiasTypes:', top3BiasTypes); // Check the final top 3 bias types
  
    return top3BiasTypes;
  }
  
// get server data

export function getServerData(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        resolve(response.data); // Resolve with the response data
      })
      .catch(error => {
        reject(error); // Reject with the error
      });
  });
}


// post server data
export function postServerData(data) {
    return new Promise((resolve, reject) => {
      const url = 'http://localhost:3000/api/result';
      axios
        .post(url, data)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  