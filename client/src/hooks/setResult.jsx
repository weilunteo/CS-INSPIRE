import * as Action from '../redux/result_reducer'
import { postServerData } from '../helper/helper'


export const PushAnswer = (result) => async (dispatch) =>{
    try{
        await dispatch(Action.pushResultAction(result))
    }
    catch(error){
        console.log(error)
    }
}

export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

// insert user data 

export const usePublishResult = async (resultData) => {
    try {
      const { result } = resultData;
      if (result.length === 0) throw new Error("Could not get result!"); // Adjusted condition
  
      await postServerData(resultData); // Pass the entire resultData object to postServerData
      console.log("Result data posted successfully");
    } catch (error) {
      console.log(error);
    }
  };
  