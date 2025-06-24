import TiltedCard from "../../project/TiltedCard/TiltedCard.jsx";

const Projects = () => {
  const items = [
    {
      image: "/projectImages/driveAd.png",
      link: "https://preview--drivead-spotlight.lovable.app/",
      title: "DriveAD",
      description:
        // "Auto-based city advertising platform with real-time tracking system.",
        "Auto-based city advertising platform",
    },
    {
      image: "/projectImages/erp.png",
      link: "https://skit-unsparsh.netlify.app/",
      title: "ERP System",
      description:
        // "College ERP system managing students, staff, attendance, fees, and results",
        "College ERP system",
    },
    {
      image: "/projectImages/portfolio.png",
      link: "https://sparshsingh.netlify.app/",
      title: "3D Portfolio",
      description: "This is pretty cool, right?",
    },
    {
      image: "/projectImages/image.png",
      link: "https://adorable-bienenstitch-f13054.netlify.app/",
      title: "Parking Pass System",
      description:
        // "Smart app to generate, manage, and verify digital parking passes",
        "Parking Pass generator",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-wrap items-center justify-center gap-8 bg-[#050506] p-8">
      {items.map((item, index) => (
        <TiltedCard
          key={index}
          imageSrc={item.image}
          altText={item.title}
          captionText={item.title}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="tilted-card-overlay text-center text-white">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm mb-2">{item.description}</p>
              
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Projects;
