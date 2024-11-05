import React from 'react';
import { useEffect, useState } from 'react';
const cartegories = ["choose A Network","MTN","AIRTEL","GLO","9MOBILE"]
const topsale = () => {
      return (
    <div className='flex text-center'>
    <div className='py-10 '>
        <h1 className='bg-[#911111] text-3xl font-semibold mb-6 rounded-s-full'>Airtime</h1>
        {/*cartegory filtering */}
    </div>
    <div className='py-10'>
    <h1 className='text-3xl font-semibold mb-6 bg-[#911111] rounded-e-full border-l-2'>Data</h1>
    {/*cartegory filtering */}


    </div>
</div>
  )
}

export default topsale
