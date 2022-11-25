import React from "react"


function Navbar(){
  const img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'

  return(
      <div class="navbar">
         <div class="nav">
          <img src={img} alt="" width="160" />
         </div>
      </div>
  )
}

export default Navbar;