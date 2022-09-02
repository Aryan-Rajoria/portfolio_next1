import "./header.css";
import React from "react";

function header() {
    return (
        <div className="header">
            <div className="header_content">
                <br />
                <code className="header-p">Hi, my name is</code>
                <h1 className="header-h1">Aryan Rajoria</h1>
                <h2 className="header-h2">AI Engineer</h2>
                <h3 className="header-h3">
                    I’m a Software Engineer based in Pune, India. I have rich
                    experience in developing ML systems, from processing data to
                    deploying a model. I am always looking for new challenges to
                    learn.
                </h3>
            </div>
        </div>
    );
}

export default header;
