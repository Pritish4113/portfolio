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
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mukta darkdark p-8 rounded-2xl">
                PRITISH SINGHAL
              </h1>
              <h2 className="text-[1.3rem] sm:text-[2rem] mt-10 mb-12 hometype">
                I am a <span className="border-b-2 border-b-[#0fc7ff] ml-2 font-bold text-white">FrontEnd Web Developer</span>
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