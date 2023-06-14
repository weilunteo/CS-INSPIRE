/* fetch question hook to fetch api data and set value to store*/

import { useEffect, useState } from "react"
import {useDispatch} from 'react-redux';
import data, {answers} from '../database/data'
import { getServerData } from "../helper/helper";

/* redux actions */
import * as Action from '../redux/question_reducer'

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({isLoading : false, apiData: [], serverError: null})
    
    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading: true}));

    /* async function to fetch backend data */
    (async () => {
        try {
            // let question = await data;
            const url = "http://localhost:3000/api/questions";
            const [{ questions, answers }] = await getServerData(url, (data) => data);

            console.log("Returned questions:", questions); 

            if(questions && questions.length > 0){
                setGetData(prev => ({...prev, isLoading: false}));
                setGetData(prev => ({...prev, apiData: {questions, answers}}));
                /* dispatch an action */
                dispatch(Action.startAction({question: questions, answers}));
            }else {
                throw new Error("No question available!");
            }
        }
        catch (error){
            setGetData(prev => ({...prev, isLoading: false}));
            setGetData(prev => ({...prev, serverError: error}));
        }
    })();

    }, [dispatch]);
    
    return [getData, setGetData];

}

/* MoveAction Dispatch function */

export const MoveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction()); /* increase trace by 1 */
    }
    catch (error) {
        console.log(error)
    }
}

/* PrevAction Dispatch function */

export const MovePrevQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePrevAction()); /* decrease trace by 1 */
    }
    catch (error) {
        console.log(error)
    }
}