import "./Project.css";
import { BsGithub } from "react-icons/bs";
import { FaCode } from "react-icons/fa";


function Project({navState}) {
  return (
    <>
      <div className={navState ? "projectstyle h-max w-screen flex flex-col justify-center items-center" : "hidden"}>
        <div className="bg-black text-white h-max w-fit mt-[120px] flex flex-col darkdark rounded-xl px-4 xl:px-8">
          <div className="ml-14 lg:ml-0">
            <p className=" mt-4 type lineafter mb-6">Projects</p>
            <h1 className="text-3xl mt-4 mb-6 headingstyle">My Projects</h1>
            <div className="flex mt-12 navlink w-[240px] darkdark p-4 rounded-2xl">
              <a className="type" href="https://github.com/Pritish4113">
                Link to my github
              </a>
              <BsGithub className="ml-3 text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-12 darkdark rounded-2xl w-max">
            <div className="flex justify-center items-center projectimg h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-auto mx-auto py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px] py-3">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/Weather_App">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo" ></BsGithub>
                </a>
                <a href="https://weather-pritish.netlify.app/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>

                </div>
                <span className="mt-14 font-bold">Weather App</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg2 h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px]">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/launch.com">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo"></BsGithub>
                </a>
                <a href="https://bhavjotsingh-12.github.io/launch/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>

                </div>
                <span className="mt-14 font-bold">Launch.com</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg3 h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px]">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/todo">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo"></BsGithub>
                </a>
                <a href="https://todo-pritish.netlify.app/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>

                </div>
                <span className="mt-14 font-bold">Js Todo List</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg4 h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px]">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/foodie.com">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo"></BsGithub>
                </a>
                <a href="https://foodie-pritish.netlify.app/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>

                </div>
                <span className="mt-14 font-bold">Foodie.com</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg5 h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px]">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/stopwatch">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo"></BsGithub>
                </a>
                <a href="https://stopwatch-pritish.netlify.app/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>
                </div>
                <span className="mt-14 font-bold">Stopwatch</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg6 h-64 w-[350px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px]">
                <div className="flex justify-center items-center">
                <a href="https://github.com/Pritish4113/MusicMart.com">
                  <BsGithub className="text-3xl mt-[100px] mr-[14px] hoverlogo"></BsGithub>
                </a>
                <a href="https://musicmart-pritish.netlify.app/">
                  <FaCode className="text-3xl mt-[100px] hoverlogo"></FaCode>
                </a>
                </div>
                <span className="mt-14 font-bold">MusicMart.com</span>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
