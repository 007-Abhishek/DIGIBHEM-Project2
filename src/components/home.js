import React from 'react'

const Home = () => {
  const textStyle = {
    color: 'sandybrown',
    textAlign: 'center',
    fontFamily: 'cursive', // You can choose a stylish font here
  };
  return (
    <div>
      <h1 style={textStyle}>Home</h1>
      <p style={{color:"burlywood",margin:"20px"}}>Select category to explore the available products....</p>
    </div>
  )
}

export default Home