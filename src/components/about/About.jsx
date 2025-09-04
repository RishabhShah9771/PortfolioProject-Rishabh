import { useState, useEffect, useRef } from "react";
import "./about.css";
import CV from "../../assets/Shah_Rishabh_Developer_Resume.pdf";
import Profileimage from "../../assets/RishabhProfilePicture.jpg";

import Info from "./Info";

const About = () => {
  // State to track if the profile image has been loaded
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // State to track if the profile image is visible in the viewport
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Ref to reference the image container for intersection observer
  const imageRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to detect when the image container is in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsImageVisible(true); // Set image visibility to true when in viewport
          observer.disconnect(); // Disconnect observer after the image is visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        root: null, // Use the viewport as the root
      }
    );

    const currentImageRef = imageRef.current;
    if (currentImageRef) {
      observer.observe(currentImageRef); // Start observing the image container
    }

    // Cleanup function to unobserve the image container
    return () => {
      if (currentImageRef && observer) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  // Handler for when the image has finished loading
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="about section" id="about">
      {/* Section title */}
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Professional Snapshot</span>

      <div className="about__container container grid">
        {/* Image container with lazy loading */}
        <div ref={imageRef} className="about__img-container">
          {isImageVisible && (
            <img
              src={Profileimage}
              alt="Profile"
              className={`about__img ${isImageLoaded ? "loaded" : "loading"}`}
              onLoad={handleImageLoad} // Trigger when the image is loaded
            />
          )}
        </div>

        <div className="about__data">
          {/* Component to display additional information */}
          <Info />

          {/* Description about the user */}
          <p className="about__description">
            I’m a Software Engineer with 3+ years of experience crafting
            scalable, high-performance web applications in fast-paced Agile
            environments. At HCLTech, I specialize in building seamless,
            intuitive user experiences using{" "}
            <strong>React, Redux, and TypeScript</strong>, with a strong
            emphasis on performance optimization—recently cutting page load
            times by <strong>99%</strong> through strategic code splitting and
            bundle tuning. With a Postgraduate in{" "}
            <strong>Web Design and Development</strong> from Conestoga College
            and a{" "}
            <strong>Bachelor’s of Engineering in Information Technology</strong>
            , I bring both creative and technical depth to the table. My work
            spans across fintech, e-commerce, and enterprise solutions, where
            I’ve led <strong>API integrations (RESTful & GraphQL)</strong>,
            migrated large-scale legacy systems to modern architectures, and
            collaborated cross-functionally to deliver polished,
            production-ready features. Whether it’s transforming legacy
            infrastructure or driving UI consistency at scale, I thrive on
            solving complex challenges and delivering impact-driven solutions
            that are user-centric and future-ready.
          </p>

          {/* Button to download the resume */}
          <a download="" href={CV} className="button button--flex">
            Download Resume
            <svg
              className="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                fill="var(--container-color)"
              ></path>
              <path
                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                fill="var(--container-color)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
