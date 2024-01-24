import React, { useEffect, useState } from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
useEffect(()=>{
    fetch(url).then(data=> data.json()).then(data=>setData(data[currency]));
},[currency])
  return data;
}

export default useCurrencyInfo;
