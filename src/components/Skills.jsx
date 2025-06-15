import InfiniteScroll from "../../Skills/InfiniteScroll/InfiniteScroll.jsx";
const Skills = () => {
  const items = [
    { content: "React.Js" },
    { content: "Node.Js" },
    { content: "Java" },
    { content: "Figma" },
    { content: "SQL" },
    { content: "Python" },
    { content: "MERN" },
    { content: "Git/Github" },
    { content: "Machine Learning" },
  ];

  return (
    <div className="w-full relative">
      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection="left"
        autoplay={true}
        autoplaySpeed={1}
        autoplayDirection="down"
        pauseOnHover={true}
      />
    </div>
  );
};

export default Skills;
