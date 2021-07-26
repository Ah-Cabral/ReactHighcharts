import React from 'react'

import { WaveSpinner } from "react-spinners-kit";

const Loader = () => {
    return <>
        <div className='preloaderDiv'>
          <WaveSpinner color='#FB8B24' loading={true} size={50}/>
        </div>
        <div className='preloaderDivBackground'/>
    </>
}

export default Loader
