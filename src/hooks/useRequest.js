import { useState, useEffect } from 'react';
import Axios from '../services/axiosInstance';

export const useRequest = (url) => {
  const [responseArray, setResponseArray] = useState([]);

  useEffect(() => {
    async function getData () {
      try {
        const response = await Axios.get(url);
        console.log(response.data);
        setResponseArray(response.data);
      } catch (err) {
        console.log(err);
        return null;
      }

      return Axios.get(url);
    }

    getData();
  }, [url]);

  return [responseArray, setResponseArray];
}