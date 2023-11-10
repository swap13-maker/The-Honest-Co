import React, { useRef, useEffect } from "react";
import ScrollHighlightNabbar from "./ScrollHighlightNavbar";
import "./../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import InnerHeader from "../InnerHeader.js";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import article from "../../images/article1.png";
import articleImg1 from "../../images/articleImg1.jpg";
import articleImg2 from "../../images/articleImg2.jpg";
import "./Article.css";

export default function Article6() {
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();

  const navHeader = [
    {
      headerTitle: "Ensuring Safety Via Technology",
      headerRef: section1Ref,
      headerID: "section1",
    },
    {
      headerTitle: "Real-Time GPS Tracking and Monitoring",
      headerRef: section2Ref,
      headerID: "section2",
    },
    {
      headerTitle: "Digital Attendance System",
      headerRef: section3Ref,
      headerID: "section3",
    },
    {
      headerTitle: "Web3 Education Systems",
      headerRef: section4Ref,
      headerID: "section4",
    },
    {
      headerTitle: "Advancements in Educational Technology",
      headerRef: section5Ref,
      headerID: "section5",
    },
    {
      headerTitle: "Custom LMS",
      headerRef: section6Ref,
      headerID: "section6",
    },
  ];

  return (
    <section>
      {/* Header */}
      <InnerHeader />
      {/* mian content */}
      <section>
        <div className="container">
          <ul className="breadcrumb-navigation pt-7">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li className="current">Articles</li>
          </ul>
          <div className="py-4">
            <div className="row">
              <div className="col-12 text-align-center">
                <div className="article-heading">
                  Comprehensive Pre-School Mobile Application For
                  <br />
                  Secure Parental Tracking & Transits
                </div>
                <div className="article-sub-heading pt-4">
                  <span className="px-2">May 19, 2023</span> &bull;{" "}
                  <span className="px-2">Mobile App Development</span> &bull;{" "}
                  <span className="px-2">Educational Technology</span>
                </div>
                <img src={article} className="w-100 pt-5" />
              </div>

              <div className="col-md-9">
                <div className="pt-5" ref={section1Ref} id="section1">
                  <p className="main-article-content">
                    In today's digital era, parents are increasingly concerned
                    about the safety and well-being of their children,
                    especially during their formative preschool years.
                  </p>
                  <p className="light-article-content">
                    The challenge of ensuring children's security during
                    transits to and from school and keeping parents informed has
                    led to the emergence of innovative preschool mobile
                    applications. These apps, built with the latest
                    technologies, seamlessly integrate into the school's
                    infrastructure, offering parents peace of mind and ensuring
                    children's safety.
                  </p>
                </div>
                <div className="pt-5" ref={section2Ref} id="section2">
                  <p className="main-article-content">
                    Real-Time GPS Tracking and Monitoring
                  </p>
                  <p className="light-article-content">
                    Parents can use the student information system app to track
                    the school bus or any other transit vehicle in real time.
                    This ensures they are always aware of their child's
                    location.
                    <br />
                    <br/>
                    <ul>
                      <li>
                        <b>Instant Notifications:</b> Alerts about pick-up and
                        drop-off times, or any unexpected delays, are instantly
                        sent to parents. This feature aids in prompt
                        communication, keeping uncertainties at bay.
                      </li>
                      <br/>
                      <li>
                        <b>Digital Attendance System:</b> Integrating the online
                        attendance system for students, parents can verify if
                        their child has reached school and attended classes,
                        ensuring they are always in the loop.
                      </li>
                      <br />
                      <li>
                        <b>Emergency Alert System:</b> In case of any
                        emergencies, the app allows the school or the child to
                        send an immediate alert to the parents, keeping them
                        informed and ready to take necessary action.
                      </li>
                      <br />
                      <li>
                        <b>Feedback & Communication Channel:</b> Parents can
                        communicate any concerns or feedback directly to the
                        school administration, fostering a close-knit community
                        feeling and ensuring all stakeholders are on the same
                        page.
                      </li>

                    </ul>
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section3Ref} id="section3">
                  <p className="main-article-content">
                    Digital Attendance System: Enhancing Parental Engagement
                  </p>
                  <p className="light-article-content">
                    Incorporating a digital attendance system into the preschool
                    mobile application streamlines the attendance tracking
                    process, ensures child safety, and promotes parental
                    engagement. The ability to stay informed about their child's
                    daily attendance fosters trust between parents and the
                    preschool, creating a positive and supportive environment
                    for early education.
                    <br />
                    <br />
                    The digital attendance system is not merely a tool for
                    recording attendance; it's a bridge between parents and the
                    school, enhancing communication, providing peace of mind,
                    and creating a sense of community that enriches the
                    preschool experience for both children and their families.
                    <br />
                  </p>
                  {/* <img src={articleImg1} className="w-100 pt-5" /> */}
                </div>
                <div className="pt-5" ref={section4Ref} id="section4">
                  <p className="main-article-content">
                    Web 3 Education Systems
                  </p>
                  <p className="light-article-content">
                    In the realm of early education, the integration of Web 3
                    education systems marks a revolutionary stride towards a
                    more decentralized and transparent approach. Unlike
                    traditional education systems, Web 3 technologies offer a
                    decentralized framework where schools, parents, and service
                    providers engage on a secure, transparent, and tamper-proof
                    platform. Through blockchain technology, these systems
                    ensure data integrity and security, providing a trustworthy
                    environment for all stakeholders involved.
                    <br />
                    <br />
                    Web 3 education systems empower preschools with
                    decentralized control, allowing each participant, whether
                    it's the school administration, parents, or transport
                    providers, to have direct and secure access to relevant
                    information. This transparent ecosystem fosters a sense of
                    trust and collaboration, enabling seamless communication and
                    decision-making. Moreover, these systems promote financial
                    transparency, ensuring that resources are allocated
                    efficiently, and parents have a clear understanding of how
                    their contributions are utilized within the preschool
                    community.
                    <br />
                    <br />
                    Incorporating Web 3 education systems means embracing a
                    future where information flows freely, securely, and
                    transparently. Preschools utilizing these technologies not
                    only prioritize data integrity but also offer an inclusive
                    and collaborative environment where every stakeholder plays
                    a significant role. Through Web 3 education systems,
                    preschools are not just enhancing their operational
                    efficiency; they are shaping a new standard of trust,
                    transparency, and collaboration within the educational
                    landscape.
                  </p>
                  <img src={articleImg1} className="w-100 pt-5" />
                </div>
                <div className="pt-5" ref={section5Ref} id="section5">
                  <p className="main-article-content">
                    In the digital age, educational technology continues to
                    transform the landscape of early education, providing a host
                    of innovative tools and resources that enhance the learning
                    experience.
                  </p>
                  <p className="light-article-content">
                    These advancements in educational technology have a profound
                    impact on not only how children engage with educational
                    content but also on how educators and parents support their
                    learning journey. Furthermore, cloud-based platforms and
                    mobile applications have become indispensable tools for both
                    teachers and parents. Educators can efficiently manage
                    lesson plans, track student progress, and collaborate with
                    parents using cloud-based platforms. Parents, on the other
                    hand, can stay informed about their child's educational
                    journey, access learning resources, and engage in their
                    child's development using dedicated mobile applications
                    <br />
                  </p>
                  {/* <img src={articleImg2} className="w-100 pt-5" /> */}
                </div>
                <div className="pt-5" ref={section6Ref} id="section6">
                  <p className="main-article-content">
                    Building a Custom LMS Solution
                  </p>
                  <p className="light-article-content">
                    At The Honest Company, we specialize in crafting custom
                    Learning Management Systems that are as unique as your
                    educational or business objectives. Our expertise lies in
                    understanding your specific requirements and translating
                    them into a user-friendly, feature-rich, and scalable LMS.
                    Whether you are an educational institution seeking to
                    empower your learners or a corporation aiming to elevate
                    employee training, our tailored LMS solutions are designed
                    to drive success.
                    <br />
                    <br />
                    In the dynamic world of education and corporate training,
                    don't settle for one-size-fits-all solutions. Embrace the
                    advantages of a custom LMS and experience a learning
                    experience that's tailored to your unique needs. The Honest
                    Company is your trusted partner on this journey, ready to
                    shape your vision into a custom LMS that empowers learners,
                    educators, and organizations alike.
                  </p>
                </div>
              </div>
              <div className="col-md-3 pt-5 pl-md-5">
                <div className="bg-white sticky-top sticky-top-with-padding">
                  <div className="p-4 d-none d-md-block">
                    <div className="Side_border-top"></div>
                    <div className="border-right"></div>
                    <ScrollHighlightNabbar
                      section1Ref={section1Ref}
                      navHeader={navHeader}
                      className="sticky-top"
                    />
                    <div className="border-left"></div>
                    <div className="Side_border-bottom"></div>
                  </div>
                  <div className="p-4 mt-5 bg-white">
                    <div className="Side_border-top"></div>
                    <div className="box-bottom-right"></div>
                    <div className="side-article-heading">
                      Want to build one for yourself?
                    </div>
                    <div className="side-article-subheading pt-3">
                      Let us help you with your dream project and some other
                      text that will go here.
                    </div>
                    <div className="side-article-download pt-3">
                      Download
                      <svg
                        width="20"
                        height="14"
                        viewBox="-10 0 25 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="animated-svg"
                      >
                        <path
                          id="Vector"
                          d="M1.80778 13.8701L1.81026 13.8657L2.14145 13.5492L2.80382 12.9161L13.4018 2.78909L13.2658 8.77368L14.6105 8.80423L14.7986 0.523957L6.51835 0.335805L6.48779 1.68051L12.4724 1.81649L1.87444 11.9435L1.21207 12.5764L0.880888 12.8929L1.80778 13.8701Z"
                          fill="black"
                        ></path>
                      </svg>
                      <div className="box-bottom-left"></div>
                      <div className="Side_border-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container bg-white py-4"></section>
      <Footer />
    </section>
  );
}
