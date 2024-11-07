import React from 'react'

const banner2 = () => {
  return (
    <div className='lg:flex lg:justify-between mt-10 text-4xl p-6'>
        <div >
            <div className='flex'>
                <div className='bg-red-700 pl-16 pr-5 p-2 rounded-s-[50px]'>Airtime</div>
                <div className='bg-red-700 pl-5 border-l-2 p-2 border-l-white pr-16 rounded-e-[50px]'>Data</div>
            </div><hr />
            <div className='flex m-6 gap-6'>
                <img src="src/assets/wallet.jpg" alt="wallet"  className=' lg:size-52 size-32 rounded-full ' />
                <div className='mt-7 border-l-4 border-red-500  pl-7'><div>Balance</div>
                    <div className='bg-slate-400 rounded-lg p-1 m-1'>#377363</div>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default banner2
