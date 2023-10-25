import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column '
    style={{width:"100%",height:"300px"}}
    >
        <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
            <div style={{width:"400px"}} className='website'>
                <h4> <i className="fa-solid fa-upload"></i>{' '}e-kart</h4>
<h6>
    Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.

</h6>       
<h6>
     Code licensed MIT, docs CC BY 3.0.
    
</h6>           
<p>
     Currently v1.0.0.
</p>
</div>
     <div className='links d-flex flex-column'>
        <h4>Links</h4>
        <Link to={'/'} className='fs-5' style={{textDecoration:"none",color:"black"}} >Home</Link>
        <Link to={'/cart'} className='fs-5' style={{textDecoration:"none",color:"black"}} >Cart</Link>
        <Link to={'/wishlist'} className='fs-5' style={{textDecoration:"none",color:"black"}}>Whishlist</Link>
</div>
    <div className='guids d-flex flex-column'>
        <h4>Guide</h4>
        <Link to={'https://react-bootstrap.github.io/'} className='fs-5' style={{textDecoration:"none",color:"black"}} >React</Link>
        <Link to={'https://react-bootstrap.github.io/'} className='fs-5' style={{textDecoration:"none",color:"black"}} >React Bootstrap</Link>
        <Link to={'https://react-bootstrap.github.io/'} className='fs-5' style={{textDecoration:"none",color:"black"}}>Routing</Link>
    </div>
    <div className='contact d-flex flex-column'>
        <h4>Contact</h4>
        <div>
            <input type="text" placeholder='Enter your Mail' className='rounded p-1' />
            <button className='btn btn-success  rounded ms-1' style={{width:"100px",height:"38px",padding:"0px" }}>Subscribe</button>
        </div>  
        
        </div>

        </div>
        <p>Copyright © 2023 E-Kart. Built with Docusaurus.</p>

    </div>
  )
}

export default Footer