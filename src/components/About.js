import { TbArrowBigRightFilled } from "react-icons/tb";
// import Countup from "react-countup";
import "./About.css";

function About({ navState }) {
  return (
    <>
      <div
        className={
          navState
            ? "bg-black text-white h-max w-screen flex flex-col justify-center items-center aboutstyle type"
            : "hidden"
        }
      >
        <div className="w-screen sm:w-5/6 mt-[120px] darkdark rounded-xl px-8 py-2 mb-10">
          <p className="pt-3 lineafter mb-4">About</p>
          <h1 className="headingstyle text-4xl pt-2 mb-8">All About Me</h1>

          {/* text and photo */}
          <div className="flex lg:flex-row flex-col justify-center items-center">
            {/* <img
              className="mt-11 mr-6 md:h-[300px] h-[460px]"
              src={Me}
              alt="my_img"
            /> */}
            <div className="textcontent darkdark rounded-xl px-5 pb-2 w-screen sm:w-full">
              <div className="mt-6">
                <p className="text-xl sm:text-2xl italics mb-8 fontcolor">
                  Hello! I am Pritish Singhal
                </p>
                <p className="text-md sm:text-[1.1rem] mb-5 textnormal">
                  I am an engineering student in Computer Science Engineering
                  from Maharaja Agrasen Institute of Technology ,GGSIPU
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 mb-10 text-sm sm:text-md lg:text-lg">
                <div className="flex">
                  <TbArrowBigRightFilled className="mt-1.5 mr-2 fontcolor" />
                  <span className="headingstyle2">Birthday</span> : 4 Nov 2003
                </div>
                <div className="flex">
                  <TbArrowBigRightFilled className="mt-1.5 mr-2 fontcolor" />
                  <span className="headingstyle2">City</span> : New Delhi
                </div>
                <div className="flex">
                  <TbArrowBigRightFilled className="mt-1.5 mr-2 fontcolor" />
                  <span className="headingstyle2">Degree</span> : BTech CSc
                </div>
                <div className="flex">
                  <TbArrowBigRightFilled className="mt-1.5 mr-2 fontcolor" />
                  <div className="flex flex-row">
                    <span className="headingstyle2">Email : </span>
                    <span className="pl-3">pritish4113@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 textnormal text-md sm:text-[1.1rem]">
                <p className="mb-2">Hello World !</p>
                <p>
                  A passionate and versatile web developer with a knack for
                  creativity and an eye for detail. My journey in web
                  development has allowed me to blend innovation and technical
                  expertise seamlessly, resulting in captivating and
                  user-friendly websites. Whether it's crafting elegant
                  front-end designs or implementing robust back-end
                  functionalities, I take pride in delivering exceptional
                  digital experiences. With a dedication to staying on top of
                  the latest industry trends, I am constantly seeking new ways
                  to push boundaries and solve complex challenges. Let's
                  collaborate and bring your ideas to life!
                </p>
              </div>
            </div>
          </div>

          {/* skills */}

          <div className="my-6 headingstyle text-2xl">My Skills</div>
          <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto pb-6">
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">HTML</span>
                <span className="tooltip">95%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per html"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">CSS</span>
                <span className="tooltip">85%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per css"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">JavaScript</span>
                <span className="tooltip">60%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per javascript"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">Bootstrap</span>
                <span className="tooltip">50%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per bootstrap"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">Tailwind</span>
                <span className="tooltip">70%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per Tailwind"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">Reactjs</span>
                <span className="tooltip">65%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per Reactjs"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">C++</span>
                <span className="tooltip">85%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per c"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">Nodejs</span>
                <span className="tooltip">35%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per Nodejs"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">Java</span>
                <span className="tooltip">50%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per java"></span>
              </div>
            </div>
            <div className="skill-box mx-5 my-2">
              <div className="flex justify-between">
                <span className="title">MySql</span>
                <span className="tooltip">65%</span>
              </div>
              <div className="skill-bar">
                <span className="skill-per mysql"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
