import React from 'react'

const Kayaking = () => {
  return (
    <div className='k-body'>
    <div className='k-top-text'>
        <h3 style={{color:" rgb(36, 102, 117)"}}>Top Hotels</h3>
        <h2 style={{color:"black"}}>Discover your love</h2>
     </div>
        <div className='kayaking-container'>
       
          <div className='kayaking-item'>
               <div className='baja'>
                 <h2 >Discover  the best Hotel in Greece</h2>
                 <h3 className='baja-price'> From $400</h3>
               </div>
                   <br />
                 <h5>Nestled on the cliffs of Santorini, Perivolas Hotel stands out as one of Greece’s most iconic luxury retreats. Carved into the volcanic rock of Oia, its minimalist cave-style suites offer breathtaking views of the Aegean Sea, blending traditional Cycladic architecture with serene modern elegance. The infinity pool, perched above the caldera, is a dreamlike setting for honeymooners and design lovers alike. With impeccable service, tranquil ambiance, and a location that captures the essence of Greek island beauty, Perivolas is more than a hotel—it’s an experience that defines indulgence.</h5>
                <button  className='baja-btn' >Book Flight </button>
          </div> 

     </div> 


    </div>
  )
}

export default Kayaking