import React from 'react'

export default function Cards() {
   return (
      <div className='cards'>
         <div className="w90">

            <div className="card">
               <div className="card-w90">
                  <div className="img-div">
                     <img width={90} src={require('../images/icons/van.png')} />
                  </div>
                  <h3>luxury vans</h3>
                  <span>customized comforts</span>
               </div>
            </div>

            <div className="card">
               <div className="card-w90">
                  <div className="img-div">
                     <img width={90} src={require('../images/icons/globe.png')} />
                  </div>
                  <h3>nationwide availability</h3>
                  <span>explore boundlessly</span>
               </div>
            </div>

            <div className="card">
               <div className="card-w90">
                  <div className="img-div">
                     <img width={90} src={require('../images/icons/star.png')} />
                  </div>
                  <h3>excellent service</h3>
                  <span>happy wanderers</span>
               </div>
            </div>
         </div>
      </div>
   )
}


