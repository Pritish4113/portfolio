import "./Home.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

function Home() {
  return (
    <>
      <div
        className=" text-white flex flex-col justify-center w-full h-screen homestyle"
      >
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold name darkdark p-8 rounded-2xl">
                Pritish Singhal
              </h1>
              <h2 className="text-3xl sm:text-4xl font-bold hometype mt-10 mb-12">
                I am a <span className="border-b-4 border-b-[#0fc7ff] ml-2">FrontEnd Web Developer</span>
              </h2>
              <div className="flex justify-center items-center pt-8">
              <div className="text-3xl p-4 navstyle mx-6 rounded-xl cursor-pointer hovertext"><a href="https://www.linkedin.com/in/pritish-singhal-451548228"><AiFillLinkedin/></a></div>
              <div className="text-3xl p-4 navstyle mx-6 rounded-xl cursor-pointer hovertext"><a href="https://github.com/Pritish4113"><BsGithub/></a></div>
              <div className="text-3xl p-4 navstyle mx-6 rounded-xl cursor-pointer hovertext"><a href="mailto:pritish4113@gmail.com"><BiLogoGmail/></a></div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Home;