import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFetchPageSlct } from "../store/fetchPage/selectors";
import { useLocation } from "react-router-dom";
import { setFetchPage } from "../store/fetchPage/reducers";


export const useFetchPage = () => { 
    const location = useLocation();
    const fetchPage = useSelector(setFetchPageSlct);
    const dispatch = useDispatch();
   /*  useEffect(() => { 
        dispatch(setFetchPage('1'))
    },[location]) */
    const setPage = (page) => {
        dispatch(setFetchPage(page))
    }

   /*   useEffect(() => { 
        console.log('new location')
    },[location]) */


    return {fetchPage, setPage}
}