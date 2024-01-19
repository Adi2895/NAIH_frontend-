import React from 'react'

export default function KeyFeatures() {
  return (
    <div style={{backgroundColor:"rgb(212 220 225)"}}>
      <div style={{textAlign:"center"}}>
        <h6 className='mb-4 pt-3'>Features</h6>

        <h2 className='mb-4' style={{fontWeight:"40px"}}>Key Features</h2>

        <p>Discover the powerful features of the National Academic Innovation Hub (NAIH)</p>
        </div>

      
        <div style={{padding:" 20px 20px 0px 20px"}}className='container'>
        <div  className='row'>
            
            <div style={{width:"40%", marginRight:"30px", backgroundColor:"white", borderRadius:"10px"}} className='col-lg-4 my-2'>
                <h5 style={{width:"40%", fontFamily:"Raleway", fontWeight:"bold", color:"black"}} className='pb-2 my-3'>Regional and College-wise Segmentation</h5>
                <p style={{width:"100%", fontFamily:"Inter", color:"gray"}} className='pb-2'>Categorize student projects based on regions and further divide them by colleges within each region.</p>
            </div>

            <div style={{width:"40%", borderRadius:"10px", backgroundColor:"white", marginLeft:"28px"}} className='col-lg-6 my-2' >
                <h5 style={{width:"40%", fontFamily:"Raleway", fontWeight:"bold", color:"black"}} className='pb-2 my-3'>User-Friendly Interface</h5>
                <p style={{width:"100%", fontFamily:"Inter", color:"gray"}}  className='pb-2'>Create an intuitive and user-friendly interface for easy navigation of projects based on region and college.</p>
           
            </div>
            
        </div>
        </div>
       
        <div style={{padding:"10px 20px 0px 20px "}}className='container pb-4'>
        <div  className='row'>
            
            <div style={{width:"40%", marginRight:"30px", backgroundColor:"white", borderRadius:"10px"}} className='col-lg-4 my-2'>
                <h5 style={{width:"40%", fontFamily:"Raleway", fontWeight:"bold", color:"black"}} className='pb-2 my-3'>Institutional Collaboration</h5>
                <p style={{width:"100%", fontFamily:"Inter", color:"gray"}} className='pb-2'>Collaborate with universities and colleges nationwide to encourage sharing of project information. Standardized templates for project documentation will ensure uniform data entry.</p>
            </div>

            <div style={{width:"40%", borderRadius:"10px", backgroundColor:"white", marginLeft:"28px"}} className='col-lg-6 my-2' >
                <h5 style={{width:"40%", fontFamily:"Raleway", fontWeight:"bold", color:"black"}} className='pb-2 my-3'>Peer Review Mechanism
</h5>
                <p style={{width:"100%", fontFamily:"Inter", color:"gray"}}  className='pb-2'>Integrate a peer review system for students and faculty members to provide constructive feedback and suggestions on projects within their region and affiliated colleges.</p>
           
            </div>
            
        </div>
        </div>
        </div>
    
  )
}
