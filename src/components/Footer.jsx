import Particles from '../../BgParticle/Particles/Particles.jsx';

const Footer = () => {
  return (
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
   <div className="text-9xl font-[arial] font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl text-center">
  Thanks for visiting...
</div>

</div>
  )
}

export default Footer
