import ProfileCard from "../../ProfileCard/ProfileCard/ProfileCard.jsx";
import avatar from "../assets/image.png";
import ScrambledText from "../../Description/ScrambledText/ScrambledText.jsx";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/Sparsh_Singh_Chundawat.pdf";
    link.download = "Sparsh_singh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* <div flex items-center justify-center w-full> */}
      <ScrambledText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars=".:"
      >
        Welcome to my portfolio! I am Sparsh Singh, a software   engineer with a passion 
        for creating innovative solutions. Explore my projects and connect with me!
      </ScrambledText>
    {/* </div> */}

      <div className="h-screen w-full flex items-center justify-center bg-[#050506]">
        <ProfileCard
          name="Sparsh Singh Chundawat"
          title="Software Engineer"
          handle="unsparsh"
          status="Online"
          contactText="Download Resume"
          avatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={downloadResume}
        />
      </div>
    </>
  );
};

export default About;
