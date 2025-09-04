import { useState } from "react";
import "./experience.css";

const Experience = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="section experience" id="experience">
      <h2 className="section__title">Experience 💼</h2>
      <span className="section__subtitle">What I work as</span>

      <div className="exp__container container grid">
        {/* Software Developer */}
        <div className="exp__content">
          <div>
            <i className="uil uil-web-grid exp__icon"></i>
            <h3 className="exp__title">
              Software <br /> Developer
            </h3>
          </div>

          <div>
            <span className="exp__comp">HCL Tech Canada</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(1)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>
              <h3 className="exp__modal-title">
                Software Developer <br /> Sep&apos;22 - Currently Working 🧑🏻‍💻
              </h3>
              <p className="exp__modal-description">
                Exposition of Contributions
              </p>
              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Delivered <strong>high-performance front-end apps</strong>{" "}
                    with <strong>React</strong> and <strong>Typescript</strong>,
                    reducing <strong>page load time by 99%</strong> through code
                    splitting and bundle optimization.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Integrated <strong>RESTful</strong> and{" "}
                    <strong>GraphQL</strong> APIs into React-based applications
                    for a <strong>leading global finance client</strong>,
                    ensuring <strong>real-time data rendering</strong> and{" "}
                    <strong>error resiliency</strong>.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Migrated <strong>large-scale legacy systems</strong> to a{" "}
                    <strong>modern component-based architecture</strong> using{" "}
                    <strong>Redux</strong> and <strong>Context API</strong>,
                    improving maintainability and scalability.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Built <strong>reusable UI components</strong> and enforced{" "}
                    <strong>design consistency</strong> across multiple product
                    features and development teams.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Collaborated with{" "}
                    <strong>product managers, QA, and design teams</strong> in{" "}
                    <strong>Agile sprints</strong>, delivering features on time
                    with high test coverage.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed and optimized CRUD functionality utilizing React
                    hooks <strong>(useState, useEffect, useContext)</strong>,
                    ensuring seamless data operations while maintaining high
                    code quality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Web Developer */}
        <div className="exp__content">
          <div>
            <i className="uil uil-arrow exp__icon"></i>
            <h3 className="exp__title">
              Web <br /> Developer
            </h3>
          </div>

          <div>
            <span className="exp__comp">M &amp; T Printing Group Ltd</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>
              <h3 className="exp__modal-title">
                Web Developer <br /> March&apos;21 - Aug&apos;22
              </h3>
              <p className="exp__modal-description">
                Exposition of Contributions
              </p>
              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Built scalable web applications using{" "}
                    <strong>React (front end)</strong> and{" "}
                    <strong>Java with Spring Boot (back end)</strong>.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Designed responsive interfaces with <strong>React</strong>{" "}
                    and <strong>Redux</strong>, integrating seamlessly with{" "}
                    <strong>RESTful APIs</strong> for dynamic data handling and
                    efficient workflows.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Boosted performance by{" "}
                    <strong>30% through lazy loading</strong>, code splitting,
                    and optimized data fetching; implemented{" "}
                    <strong>CI/CD pipelines</strong> using Jenkins for faster
                    deployments.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Optimized application performance through lazy loading, code
                    splitting, and efficient data fetching strategies, improving
                    load times by 30%.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Managed and optimized <strong>MySQL</strong> &amp;{" "}
                    <strong>PostgreSQL</strong> databases, focusing on schema
                    design, query efficiency, and scalable data migrations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Freelance Frontend Developer */}
        <div className="exp__content">
          <div>
            <i className="uil uil-laptop exp__icon"></i>
            <h3 className="exp__title">
              Freelance <br /> Frontend Developer
            </h3>
          </div>

          <div>
            <span className="exp__comp">Remote</span>
          </div>

          <span className="exp__button" onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right exp__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3 ? "exp__modal active-modal" : "exp__modal"
            }
          >
            <div className="exp__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times exp__modal-close"
              ></i>
              <h3 className="exp__modal-title">
                Freelance Frontend Developer <br /> Jan&apos;20 - Present
              </h3>
              <p className="exp__modal-description">
                Exposition of Contributions
              </p>
              <ul className="exp__modal-experiences grid">
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Built responsive and fully functional{" "}
                    <strong>React applications</strong> for small businesses and
                    personal branding.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Developed and deployed{" "}
                    <strong>PortfolioMaster-byRishabh</strong>, showcasing
                    projects with smooth UI/UX, routing, and animations using
                    React, <strong>Tailwind CSS</strong> and{" "}
                    <strong>Framer Motion</strong>.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Created e-commerce templates and admin dashboards using{" "}
                    <strong>Redux</strong>, responsive layouts, and
                    component-based architecture for client prototyping.
                  </p>
                </li>
                <li className="exp__modal-experience">
                  <i className="uil uil-check-circle exp__modal-icon"></i>
                  <p className="exp__modal-info">
                    Translated client requirements into scoped React solutions,
                    integrating routing, reusable UI components, and{" "}
                    <strong>API endpoints</strong> with seamless functionality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
