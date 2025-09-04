// eslint-disable-next-line no-unused-vars
import React from "react";

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Technologies</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-java"></i>

                        <div>
                            <h3 className="skills__name">java</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-python"></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-spring-boot"></i>

                        <div>
                            <h3 className="skills__name">SpringBoot</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-nodejs"></i>

                        <div>
                            <h3 className="skills__name">Node Js</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
