import React from 'react'
import TextPressure from '../../TextPressure/TextPressure/TextPressure.jsx';

const Home = () => {
  return (
    <div>
      <div style={{position: 'relative', height: '100vh' }}>
  <TextPressure
    text="Hello!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>

    </div>
  )
}

export default Home
