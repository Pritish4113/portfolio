import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import "./Contact.css";

function Contact({navState}) {
  return (
    <>
      <div className={navState ? "contactstyle h-max w-screen flex flex-col justify-center items-center" : "hidden"}>
        <div className="w-5/6 mt-[120px] flex flex-col type darkdark rounded-xl p-5">
          <div className="ml-8 pt-6">
            <p>Contact</p>
            <h1 className="text-3xl mt-4 mb-6 headingstyle">Contact Me</h1>
          </div>
          <div className="grid gris-cols-1 sm:grid-cols-2">
            <div className="rounded-2xl p-6 m-2 darkdark">
              <div className="flex justify-start items-center">
                <div className="iconbackcolor rounded-3xl p-[8px] mr-4">
                  <MdLocationOn style={{color :"rgb(13, 239, 255)"}}className="text-3xl" />
                </div>
                <h1 className="headingstyle text-xl">My Address</h1>
              </div>
              <p className="my-4 ml-2">New Delhi, India</p>
            </div>
            <div className="rounded-2xl p-6 m-2 darkdark">
              <div className="flex justify-start items-center">
                <div className="iconbackcolor rounded-3xl p-2 pr-[10px] mr-4">
                  <FiShare2 style={{color :"rgb(13, 239, 255)"}}className="text-3xl" />
                </div>
                <h1 className="headingstyle text-xl">Social Profiles</h1>
              </div>
              <p className="flex my-4">
                <AiFillLinkedin className="mx-2 text-2xl hovercolor" />
                <BsGithub className="mx-2 text-2xl hovercolor" />
                <AiFillInstagram className="mx-2 text-2xl hovercolor" />
              </p>
            </div>
            <div className="rounded-2xl p-6 m-2 darkdark">
              <div className="flex justify-start items-center">
                <div className="iconbackcolor rounded-3xl p-[9px] mr-4">
                  <FiMail style={{color :"rgb(13, 239, 255)"}}className="text-3xl" />
                </div>
                <h1 className="headingstyle text-xl">Email Me</h1>
              </div>
              <p className="my-3 type">pritish4113@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            <p className="headingstyle2 text-3xl">Write me an email !</p>
            <form
              className="flex flex-col w-4/5 mt-8"
              action="https://getform.io/f/37160815-9d92-4fa6-a99c-408c48ea9a79"
              method="POST"
            >
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="m-1 p-3 darkdarkdark rounded-lg"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="m-1 p-3 darkdarkdark rounded-lg"
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button
                className="textcolor p-3 m-5 rounded-lg font-bold"
                type="submit"
              >
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
