import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Resume.css";
import { FaGraduationCap } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { BiSolidDownload } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/Resume.pdf";

function Resume({ navState }) {
  console.log(navState);
  return (
    <>
      <div
        className={
          navState
            ? "h-max w-screen flex flex-col justify-center items-center resumestyle"
            : "hidden"
        }
      >
        <div className="w-5/6 mt-[110px] flex flex-col type darkdark rounded-xl p-7">
          <div>
            <p className="lineafter mb-6">Resume</p>
            <p className="text-3xl mt-2 mb-6 headingstyle">Check My Resume</p>
          </div>
          <VerticalTimeline className="z-0">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              date="My Resume"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              icon={<BiSolidDownload />}
            >
              <div className="flex justify-center items-center">
                <a
                  href={resume}
                  download="Resume-download"
                  target="_self"
                  rel="noreferrer"
                >
                  <button className="bg-white text-black px-5 pb-1 rounded-lg hoverbtn">
                    <div className="flex justify-center items-center mb-3">
                      <RiFileDownloadFill className="mt-4 mr-3 text-3xl" />
                      <p
                        style={{
                          fontFamily: `"Roboto Mono", Sans-serif`,
                          fontWeight: "700",
                          fontSize: "1.1rem",
                        }}
                      >
                        Download Resume
                      </p>
                    </div>
                  </button>
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              className="vertical-timeline-element--work"
              date="2018 - 2019"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title headingstyle timecolor">
                SECONDARY EDUCATION (10TH), CBSE
              </h3>

              <p className="simpletext">Sachdeva Public School, Pitampura</p>
              <p className="simpletext">
                I have completed my 10th from CBSE board with overall 94.6%.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020 - 2021"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title headingstyle timecolor">
                SENIOR EDUCATION (12TH), CBSE
              </h3>

              <p className="simpletext">Sachdeva Public School, Pitampura</p>
              <p className="simpletext">
                I have completed my 12th from CBSE board with overall 96%.{" "}
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              date="2021 - 2025"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title headingstyle timecolor">
                BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE
              </h3>
              <p className="text-sm simpletext">
                Maharaja Agrasen Institute of Technology ,New Delhi
              </p>
              <p className="text-sm simpletext">
                I Am currently in my 3rd year of Graduation degree .
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              date="Summary"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              icon={<BsFillPersonLinesFill />}
            >
              <h3 className="vertical-timeline-element-title headingstyle timecolor">
                SUMMARY
              </h3>
              <p className="text-sm simpletext">
                An individual who possesses both technical expertise and a
                strong artistic flair, decent programming skills with a keen eye
                for design.
              </p>
              <p className="text-sm simpletext">
                Tries to keeps up with the latest trends and tools in the
                industry, continuously seek to improve skills, explore new
                techniques, and stay updated on design and development best
                practices.
              </p>
            </VerticalTimelineElement>
{/* 
            <VerticalTimelineElement
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
            /> */}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Resume;
