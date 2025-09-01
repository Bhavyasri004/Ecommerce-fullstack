import React from 'react'
import './Description.css'
export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (122)
        </div>

      </div>
      <div className="descriptionbox-description">
        <p>
          An e-Commerence website is a online platfor, that facilitating buying and selling pf products or servies over the internet
        </p>
        <p>
          E-commerence websites typically display products or servies detailed descriptions,images,prices,and any available variuos products
        </p>
      </div>
    </div>
  )
}
export default DescriptionBox
