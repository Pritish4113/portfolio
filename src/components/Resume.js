import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Resume.css";
import { FaGraduationCap } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { BiSolidDownload } from "react-icons/bi";
import resume from "../assets/Resume.pdf";

function Resume({navState}) {

  console.log(navState);
  return (
    <>
      <div className={navState ? "h-max w-screen flex flex-col justify-center items-center resumestyle" : "hidden"}>
        <div className="w-5/6 mt-[110px] flex flex-col type darkdark rounded-xl p-7">
          <div>
            <p>Resume</p>
            <p className="text-3xl mt-2 mb-6 headingstyle">Check My Resume</p>
          </div>
          <VerticalTimeline>
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
                <a href={resume} download="Resume">
                  <button className="bg-white text-black px-5 pb-1 rounded-lg hoverbtn">
                    <div className="flex justify-center items-center mb-3">
                      <RiFileDownloadFill className="mt-4 mr-3 text-3xl" />
                      <p
                        style={{
                          fontFamily: `"Roboto Mono", Sans-serif`,
                          fontWeight: "700",
                          fontSize : "1.1rem"
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
              <h3 className="vertical-timeline-element-title">
                BACHELOR OF TECHNOLOGY, COMPUTER SCIENCE
              </h3>
              <p className="text-sm">
                Maharaja Agrasen Institute of Technology ,New Delhi
              </p>
              <p className="text-sm">
                I Am currently in my 3rd year of Graduation degree .
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
              <h3 className="vertical-timeline-element-title">
                {" "}
                SENIOR EDUCATION (12TH), CBSE
              </h3>

              <p>
                Sachdeva Public School, Pitampura I have completed my 12th from
                CBSE board with overall 96%.
              </p>
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
              <h3 className="vertical-timeline-element-title">
                SECONDARY EDUCATION (10TH), CBSE
              </h3>

              <p>
                Sachdeva Public School, Pitampura I have completed my 10th from
                CBSE board with overall 94.6%.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{
                background: "rgb(27, 80, 107)",
                color: "#white",
              }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                backgroundColor: "rgba(0, 0, 0, 0.700)",
                color: "white",
              }}
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              // icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
}

export default Resume;
