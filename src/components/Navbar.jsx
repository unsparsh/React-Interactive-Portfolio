import GooeyNav from './GooeyNav/GooeyNav.jsx';

const Navbar = () => {

  const Navitems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="h-20vh  flex justify-center" >
      <GooeyNav
        items={Navitems}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  )
}

export default Navbar
