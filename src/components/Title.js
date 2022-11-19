import React from 'react';

const Title = () => {
  return (
    <div className="title">
      <div style={{display:"flex"}}>
      
      <h1>airg </h1> <span><img src={process.env.PUBLIC_URL + '/fish-icon.png'} width="50px" height={"50px"} /></span> <h1> am</h1>
      </div>
    
      <h2>Your Pictures</h2>
      <p>Upload any images you like in png, jpeg or jpg format.</p>
    </div>
  );
}

export default Title;