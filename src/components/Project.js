import "./Project.css";
import { BsGithub } from "react-icons/bs";

function Project({navState}) {
  return (
    <>
      <div className={navState ? "projectstyle h-max w-screen flex flex-col justify-center items-center" : "hidden"}>
        <div className="bg-black text-white h-max w-fit mt-[120px] flex flex-col darkdark rounded-xl px-4 xl:px-8">
          <div className="ml-14 lg:ml-0">
            <p className=" mt-4 type">Projects</p>
            <h1 className="text-3xl mt-4 mb-6 headingstyle">My Projects</h1>
            <div className="flex mt-12 navlink w-[200px]">
              <a className="type" href="/">
                Link to my github
              </a>
              <BsGithub className="ml-3 text-2xl cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-12 darkdark p-8 rounded-2xl w-max">
            <div className="flex justify-center items-center projectimg h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[480px] py-1">
                <a href="">
                  <BsGithub className="text-3xl mt-[100px]"></BsGithub>
                </a>
                <span className="mt-14 font-bold">Weather App</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg2 h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[480px]">
                <a href="">
                  <BsGithub className="text-3xl mt-[100px]"></BsGithub>
                </a>
                <span className="mt-14 font-bold">Launch.com</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg3 h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[480px]">
                <a href="">
                  <BsGithub className="text-3xl mt-[100px]"></BsGithub>
                </a>
                <span className="mt-14 font-bold">Js Todo List</span>
                <div></div>
              </div>
            </div>
            <div className="flex justify-center items-center projectimg4 h-64 w-[424px] xl:w-[480px] lg:w-[400px] md:w-[370px] group my-4 mx-4 py-39 projectcard">
              {/* hover effects */}
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center hoverproject h-64 w-[480px]">
                <a href="">
                  <BsGithub className="text-3xl mt-[100px]"></BsGithub>
                </a>
                <span className="mt-14 font-bold">Foodie.com</span>
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
