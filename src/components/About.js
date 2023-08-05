import Me from "../assets/brad.jpg";
import { TbArrowBigRightFilled } from "react-icons/tb";
// import Countup from "react-countup";
import "./About.css";

function About({navState}) {
  return (
    <>
      <div className={navState ? "bg-black text-white h-max w-screen flex flex-col justify-center items-center aboutstyle type" : "hidden"}>
        <div className="w-screen sm:w-5/6 mt-[120px] darkdark rounded-xl px-8 py-2 mb-10">
          <p className="pt-3">About</p>
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
                <p className="text-2xl italics mb-4 fontcolor">
                  Hello! I am Pritish Singhal
                </p>
                <p className="mb-5 textnormal fontsize">
                  I am an engineering student in Computer Science Engineering
                  from Maharaja Agrasen Institute of Technology ,GGSIPU
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 mt-4">
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
                  <div className="flex flex-col sm:flex-row">
                    <span className="headingstyle2">Email : </span>
                    <span className="pl-3">pritish4113@gmail.com</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 textnormal fontsize">
                I’m Pritish, I’m a software developer, and I specialize in
                efficient designs that just work across all platforms and
                browsers. I care deeply about building interfaces that are
                usable and pleasant for the most number of people possible.
                Also, I do care about the views of the person who intended to
                use it. I also try my best to deliver the best quality I can
                give to anyone within given time. Also I create websites using
                ReactJS and major front-end tools. Apart from this I can even
                work on any other tech stack as I am a quick learner and can
                adapt to any new environment. I use firebase for all the
                services as it eases the work of handling the backend and also
                provides a lot of services for free. Apart from this I even work
                with Node for backend development. I also have a keen interest
                in database management and operations on it. If you ever feel a
                collaboration for new projects then I'll be very happy to do so.
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
