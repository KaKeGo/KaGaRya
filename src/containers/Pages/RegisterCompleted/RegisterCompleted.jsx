import React from 'react'
import './RegisterCompleted.css'
import {Link} from 'react-router-dom'


const RegisterCompleted = () => {
  return (
    <div className="reg">
       <p>&#10003;</p>
      <div className="reg_circle">
      <h2 className="reg_text"> 
      <span style={{transform: 'rotate(0deg)'}}>R</span>
      <span style={{transform: 'rotate(9.5deg)'}}>e</span>
      <span style={{transform: 'rotate(18deg)'}}>g</span>
      <span style={{transform: 'rotate(29deg)'}}>i</span>
      <span style={{transform: 'rotate(36deg)'}}>s</span>
      <span style={{transform: 'rotate(46deg)'}}>t</span>
      <span style={{transform: 'rotate(56deg)'}}>r</span>
      <span style={{transform: 'rotate(66.5deg)'}}>a</span>
      <span style={{transform: 'rotate(76deg)'}}>t</span>
      <span style={{transform: 'rotate(84.5deg)'}}>i</span>
      <span style={{transform: 'rotate(91deg)'}}>o</span>
      <span style={{transform: 'rotate(101.5deg)'}}>n</span>
      <span style={{transform: 'rotate(114deg)'}}> </span>
      <span style={{transform: 'rotate(120.5deg)'}}>c</span>
      <span style={{transform: 'rotate(130deg)'}}>o</span>
      <span style={{transform: 'rotate(140deg)'}}>m</span>
      <span style={{transform: 'rotate(152deg)'}}>p</span>
      <span style={{transform: 'rotate(161.5deg)'}}>l</span>
      <span style={{transform: 'rotate(171deg)'}}>e</span>
      <span style={{transform: 'rotate(180.5deg)'}}>t</span>
      <span style={{transform: 'rotate(190deg)'}}>e</span>
      <span style={{transform: 'rotate(199.5deg)'}}>d</span>
      <span style={{transform: 'rotate(209deg)'}}> </span>
      <span style={{transform: 'rotate(218.5deg)'}}>-</span>
      <span style={{transform: 'rotate(228deg)'}}> </span>
      <Link to='/login'><span style={{transform: 'rotate(237.5deg)'}}>g</span>
      <span style={{transform: 'rotate(247deg)'}}>o</span>
      <span style={{transform: 'rotate(256.5deg)'}}> </span>
      <span style={{transform: 'rotate(266deg)'}}>t</span>
      <span style={{transform: 'rotate(275.5deg)'}}>o</span>
      <span style={{transform: 'rotate(285deg)'}}> </span>
      <span style={{transform: 'rotate(294.5deg)'}}>l</span>
      <span style={{transform: 'rotate(304deg)'}}>o</span>
      <span style={{transform: 'rotate(313.5deg)'}}>g</span>
      <span style={{transform: 'rotate(325deg)'}}>i</span>
      <span style={{transform: 'rotate(331.5deg)'}}>n</span>
      <span style={{transform: 'rotate(342deg)'}}> </span>
      <span style={{transform: 'rotate(348.5deg)'}}>-</span></Link>
      </h2>
      </div>
    </div>
  )
}

export default RegisterCompleted

 /*<Link to='/login'>Login</Link> */