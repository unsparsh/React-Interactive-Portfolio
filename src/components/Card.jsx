import Lanyard from '../../hangingCard/Lanyard/Lanyard.jsx'

const Card = () => {
  return (
    <div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  )
}

export default Card
