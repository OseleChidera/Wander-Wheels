import React from 'react'

export default function Moments() {
    return (
        <div className='moments'>
            <div className="w90">
                <h2>road trip moments</h2>
                <div className="grid">
                    <div className='grid-item one'>
                        <img src={require("../images/1.jpg")} alt="moment" />
                    </div>
                    <div className='grid-item two'>
                        <img src={require("../images/2.png")} alt="moment" />
                    </div>
                    <div className='grid-item three'>
                        <img src={require("../images/3.jpg")} alt="moment" />
                    </div>
                    <div className='grid-item four'>
                        <img src={require("../images/4.jpg")} alt="moment" />
                    </div>
                </div>
            </div>
        </div>
    )
}
