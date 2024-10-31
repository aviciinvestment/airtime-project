import React from 'react';
import { useEffect, useState } from 'react';
const cartegories = ["choose A Network","MTN","AIRTEL","GLO","9MOBILE"]
const topsale = () => {
    const [airtime, setAirtime] = useState([]);
    const [data, setData] = useState([]);
    const [selectedCartegory, setselectedCartegory] = useState('choose a plan');
    const [selectCartegory, setselectCartegory] = useState('choose a plan');

    useEffect(() => {
        fetch("airtime.json")
        .then(res => res.json())
        .then((data) => setAirtime(data))
    }, []);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then((data) => setData(data))
    }, []);
    console.log(data)
    console.log(airtime) 

    const filteredData = selectedCartegory === "choose a plan" ? data:data.filter(data =>
        data.cartegory === selectedCartegory.toLowerCase())
        console.log(filteredData)
    const filteredAirtime = selectCartegory === "choose a plan" ? data:data.filter(data =>
            airtime.cartegory === selectCartegory.toLowerCase())
            console.log(filteredAirtime)
  return (
    <div className='flex text-center'>
    <div className='py-10 '>
        <h1 className='bg-[#911111] text-3xl font-semibold mb-6 rounded-s-full'>Airtime</h1>
        {/*cartegory filtering */}
        <div>
            
            <select
            onChange = {(e) => setselectedCartegory(e.target.value)}
             name="cartegory" id="cartegory" className='border bg-slate-200
            border-gray-300 rounded-md px-4py-2 focus:outline-none'>
                {
                    cartegories.map((cartegory, index) => (
                        <option key={index} value="{cartegory}">{cartegory}</option>
                    ))
                }
            </select>
            
        </div>
    </div>
    <div className='py-10'>
    <h1 className='text-3xl font-semibold mb-6 bg-[#911111] rounded-e-full border-l-2'>Data service</h1>
    {/*cartegory filtering */}
    <div>
        <select 
        onChange = {(e) => setselectCartegory(e.target.value)}
        name="cartegory" id="cartegory" className='border bg-slate-200
            border-gray-300 rounded-md px-4py-2 focus:outline-none'>
            {
                cartegories.map((cartegory, index) => (
                    <option key={index} value="{cartegory}">{cartegory}</option>
                ))
            }
        </select>
        
    </div>
    <img src="glo.jpeg" alt="" />
    <img src="airtel.jpeg" alt="" />
</div>
</div>
  )
}

export default topsale
