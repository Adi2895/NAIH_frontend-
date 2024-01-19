import React from 'react'

export default function Pricing() {
  return (
    <div className='my-5' style={{backgroundColor:"white", fontFamily:"system-ui,-apple-system,Segoe UI ,Roboto, Helvetica Neue ,Noto Sans , Liberation Sans ,Arial,sans-serif, Apple Color Emoji ,Segoe UI Emoji ,Segoe UI Symbol,Noto Color Emoji"}}>
      <div style={{textAlign:"center"}}>
        <small style={{color:"blue"}}className='mb-4 pt-3 pt-2'>PRICING
</small>

        <h2 className='mb-4 mt-3' style={{fontWeight:"40px"}}>Choose the Plan that Fits Your Needs</h2>

        <p>Unlock the full potential of the National Academic Innovation Hub with our flexible pricing plans</p>
        </div>

      
        <div style={{padding:" 20px 20px 0px 20px", color:"black"}}className='container'>
        <div  className='row'>
            
            <div style={{width:"30%", marginRight:"5px", backgroundColor:"#e2ddf5", borderRadius:"10px"}} className='col-lg-3 my-2'>
                <h5 style={{width:"40%", fontFamily:"Raleway"}} className='pb-2 my-3'>Free</h5>
                <p style={{width:"100%"}} className='pb-2'>Categorize student projects based on regions and further divide them by colleges within each region.</p>
                <h3 className='my-4'>$0</h3>
                <ul style={{fontFamily:"Inter"}} className='mx-3'>
                    <li>
                    Limited project uploads</li>
                    <li>
                    Basic search and filtering options</li>
                    <li> 
                    Access to regional projects</li>
                    <li> 
                    Limited feedback and suggestions</li>
                </ul>

                <button className="my-3"style={{backgroundColor:"#d3d3f1",outlineColor:"blue", width:"100%", borderRadius:"20px"}}>Continue with Free</button>
            </div>

            <div style={{width:"30%", borderRadius:"10px", backgroundColor:"#e2ddf5", marginLeft:"10px"}} className='col-lg-3 my-2' >
            <h5 style={{width:"40%", fontFamily:"Raleway"}} className='pb-2 my-3'>Basic</h5>
                <p style={{width:"100%"}} className='pb-2'>Enhanced features and increased project uploads</p>
                <h3 className='my-4'>$0/month</h3>
                <ul style={{fontFamily:"Inter"}} className='mx-3'>
                    <li>
                    All features of FREE plan</li>
                    <li>
                    
Increased project uploads</li>
                    <li> 
                    
Advanced search and filtering options</li>
                    <li>
                    Access to regional and college-wise projects</li>
                    <li> 
                    
                   
Enhanced feedback and suggestions</li>
                </ul>
                <button className="my-3"style={{backgroundColor:"#6451f7",outlineColor:"blue", width:"100%", borderRadius:"20px"}}>Try with Basic Plan</button>
         
            </div>

            <div style={{width:"30%", borderRadius:"10px", backgroundColor:"#e2ddf5", marginLeft:"10px"}} className='col-lg-3 my-2' >
            <h5 style={{width:"40%", fontFamily:"Raleway"}} className='pb-2 my-3'>PRO</h5>
                <p style={{width:"100%"}} className='pb-2'>Premium features and unlimited project uploads</p>
                <h3 className='my-4'>$20/month</h3>
                <ul style={{fontFamily:"Inter"}} className='mx-3 my-2'>
                    <li>
                    All features of BASIC plan
</li>
                    <li> Unlimited project uploads</li>
                    <li> Advanced search and filtering options</li>
                    <li>
                    
Access to regional, college-wise, and discipline-specific projects</li>
                </ul>
                <br />
                <button className=""style={{backgroundColor:"#6451f7",outlineColor:"blue", width:"100%", borderRadius:"20px"}}>Try with Pro Plan</button>
         
            </div>
            
        </div>
        </div>
       
        
        </div>
    
  )
}
