import Container from "@/Components/Shared/Container";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { IoArrowForward } from "react-icons/io5";
import { BsFillShareFill } from "react-icons/bs";

const page = () => {
  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <div className="flex gap-x-8 lg:flex-row flex-col">
          {/* Left Side */}
          <div className="w-full">
            <div className="relative w-full h-[600px]">
              <Image
                src="/jobdetails.png"
                alt="jobdetails"
                fill
                className="object-cover rounded-[24px] w-full"
              />
            </div>
            <div className="text-white font-sans space-y-6 pt-[60px] w-full">
              <h2 className="text-xl font-medium">**Role Overview**</h2>
              <ul className="list-disc list-inside space-y-1 font-normal">
                <li>
                  Oversee the delivery of Financial Controlling services across
                  various sectors and business units at Sava Logistics, focusing
                  on excellence in quality, efficiency, and customer
                  satisfaction.
                </li>
                <li>
                  Collaborate with internal stakeholders (Finance Business
                  Partner, GPOs, GFS, FC, BC) to understand their needs and
                  expectations, ensuring services consistently meet or exceed
                  these benchmarks.
                </li>
                <li>
                  Address issues and inquiries escalated by team leads, ensuring
                  prompt and effective resolution.
                </li>
                <li>
                  Ensure compliance with applicable laws, regulations, and
                  industry standards.
                </li>
                <li>
                  Monitor work quality and escalate any operational issues
                  promptly.
                </li>
                <li>Perform all other job-related duties as assigned.</li>
              </ul>

              <h2 className="text-xl font-medium">
                **Operational Excellence**
              </h2>
              <ul className="list-disc list-inside space-y-1 font-normal">
                <li>
                  Identify and implement operational best practices, process
                  enhancements, and service standards to elevate the service
                  delivery process.
                </li>
                <li>
                  Track performance metrics and KPIs to evaluate service
                  quality, pinpoint areas for improvement, and enact necessary
                  changes.
                </li>
                <li>
                  Regularly report key operational KPIs to the Financial
                  Controlling GFS lead.
                </li>
                <li>
                  Stay informed about industry trends and technological
                  advancements to keep Sava Logistics competitive and leverage
                  the most effective tools and processes.
                </li>
                <li>
                  Be accountable for achieving performance goals set at the
                  beginning of the year in coordination with the head of GFS
                  lead.
                </li>
              </ul>

              <h2 className="text-xl font-medium">**Team Leadership**</h2>
              <ul className="list-disc list-inside space-y-1 font-normal">
                <li>
                  Lead and manage teams, cultivating a culture of teamwork,
                  collaboration, and continuous improvement.
                </li>
                <li>
                  Oversee the budget, ensuring cost efficiency while upholding
                  service standards.
                </li>
                <li>
                  Contribute to a work environment and culture that fosters the
                  desired mindset among all team members.
                </li>
              </ul>

              <h2 className="text-xl font-medium">**Qualifications**</h2>
              <ul className="list-disc list-inside space-y-1 font-normal">
                <li>
                  Master’s Degree in Accounting, Finance, or a related field.
                </li>
                <li>
                  10+ years of experience in Finance GBS, with at least 5 years
                  in a leadership role.
                </li>
                <li>
                  5+ years of experience in Financial Controlling, preferably in
                  the logistics sector.
                </li>
                <li>Recognized as an expert in the sub-functional area.</li>
                <li>
                  Strong grasp of Finance Accounting and Controlling processes.
                </li>
                <li>Familiarity with Finance/Accounting ERP systems.</li>
                <li>
                  Excellent planning and organizational skills to balance and
                  prioritize tasks, generating alternatives and solutions as
                  needed.
                </li>
                <li>
                  Proven experience supervising a team within Financial
                  Controlling processes in a complex, international business
                  environment.
                </li>
                <li>Strong leadership and managerial capabilities.</li>
                <li>
                  Exceptional communication, interpersonal, and conflict
                  resolution skills.
                </li>
                <li>Strong analytical and problem-solving abilities.</li>
                <li>
                  Capacity to manage multiple tasks and prioritize effectively.
                </li>
                <li>Solid understanding of compliance requirements.</li>
                <li>Highly organized and detail-oriented.</li>
                <li>
                  Comprehensive understanding of the Financial Controlling
                  end-to-end process.
                </li>
                <li>Proficient in MS Office and experienced with SAP.</li>
                <li>Must be fluent in English (both written and spoken).</li>
                <li>
                  Knowledge of financial and business management principles with
                  the ability to communicate and prioritize business needs.
                </li>
              </ul>

              <h2 className="text-xl font-medium">**Key Competencies**</h2>
              <ul className="list-disc list-inside space-y-1 font-normal">
                <li>
                  <strong>Leadership:</strong> Ability to guide, motivate, and
                  inspire teams to achieve operational goals.
                </li>
                <li>
                  <strong>Emotional Intelligence:</strong> Understanding and
                  managing one’s own emotions while being empathetic towards the
                  emotions of team members and clients.
                </li>
                <li>
                  <strong>Strategic and Critical Thinking:</strong> Ability to
                  identify overarching goals, develop strategies to achieve
                  them, and make informed decisions based on data and insights.
                </li>
                <li>
                  <strong>Communication:</strong> Effectively communicate with
                  team members and other stakeholders, articulating concepts,
                  expectations, feedback, and explanations clearly and
                  effectively.
                </li>
                <li>
                  <strong>Problem Solving:</strong> Develop impactful and
                  pragmatic solutions to complex challenges, often under
                  pressure and within tight deadlines.
                </li>
                <li>
                  <strong>Adaptability:</strong> Ability to handle changes and
                  unexpected events, adjusting strategies or operations as
                  necessary.
                </li>
                <li>
                  <strong>Teamwork and Collaboration:</strong> Work
                  cooperatively with others to achieve shared objectives,
                  encouraging team collaboration and fostering a positive team
                  environment.
                </li>
                <li>
                  <strong>Time Management:</strong> Ensure tasks are completed
                  within set timelines, balancing multiple demands while
                  maintaining high work standards.
                </li>
                <li>
                  <strong>Proactive Approach:</strong> Anticipate potential
                  challenges and take preventive measures rather than merely
                  reacting to issues as they arise.
                </li>
              </ul>

              <p className="font-normal">
                At Sava Logistics, you are part of a global logistics network
                that connects the world. A network that empowers you to shape
                your career by encouraging you to contribute and make a
                meaningful impact. With a diverse team of over 76,000 colleagues
                worldwide, we celebrate diversity and thrive on individual
                backgrounds, perspectives, and skills. Together as one team, we
                are Here to move.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[30%] lg:mt-0 mt-5 bg-[#32203C] px-6 sm:px-10 py-8 rounded-[12px] flex flex-col gap-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 self-start">
            <h4 className="text-[24px] text-white font-arial font-normal">
              Road Export Coordinator
            </h4>
            <div>
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Location
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff] flex gap-x-2 items-center">
                <CiLocationOn />
                Castellar del Vallès, Spain
              </h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Career Level
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Graduates / Professionals / Academic
              </h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Employment Type, worktype
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Full Time
              </h5>
            </div>
            <div>
              <h6 className="text-[14px] font-lucida font-normal text-[#BCBCBC]">
                Posting Date / Reference
              </h6>
              <h5 className="text-[20px] font-lucida font-normal text-[#fff]">
                Apr 28, 2025, 400584
              </h5>
            </div>
            <Link href="/apply-form" className="flex gap-x-5 items-center">
              <button className="flex gap-x-3 justify-center items-center border border-transparent px-5 py-3 rounded-[12px] bg-[#C83C7C] w-[250px] text-[18px] text-[#F9F9F9] font-normal cursor-pointer hover:bg-[#13213C] hover:border hover:border-[#C83C7C] font-lucida duration-300 ease-in-out group">
                Apply now
                <IoArrowForward className="text-[#FFF] group-hover:ml-2 duration-300 ease-in-out" />
              </button>
              <div className="w-11 h-11 rounded-full bg-white flex justify-center items-center cursor-pointer">
                <BsFillShareFill />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
