import InfiniteMenu from '../../Projects/InfiniteMenu/InfiniteMenu.jsx';

const Projects = () => {

    const items = [
  {
    image: '../../projectImages/driveAd.png',
    link: 'https://preview--drivead-spotlight.lovable.app/',
    title: 'DriveAD',
    description: 'Auto-based city advertising platform with real-time tracking system.'
  },
  {
    image: '../../projectImages/erp.png',
    link: 'https://skit-unsparsh.netlify.app/',
    title: 'ERP System',
    description: 'College ERP system managing students, staff, attendance, fees, and results'
  },
  {
    image: '../../projectImages/portfolio.png',
    link: 'https://sparshsingh.netlify.app/',
    title: '3D Portflio',
    description: 'This is pretty cool, right?'
  },
  {
    image: '../../projectImages/image.png',
    link: 'https://adorable-bienenstitch-f13054.netlify.app/',
    title: 'Parking Pass System',
    description: 'Smart app to generate, manage, and verify digital parking passes'
  }
];

  return (
    <div className='h-screen w-full flex items-center justify-center bg-[#0e0e10] '>
        <InfiniteMenu  items={items}/>
    </div>
  )
}

export default Projects
