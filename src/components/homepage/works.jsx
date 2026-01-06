import React from "react";
import { faBriefcase, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../common/card";
import "./styles/works.css";

const Works = () => {
	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = "/SaumyaResume.pdf"; // public folder file
		link.download = "SaumyaResume.pdf";
		link.click();
	};

	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">
								Java Backend Intern
							</div>
							<div className="work-subtitle">
								— Codtech IT Solution
							</div>
							<div className="work-duration">2025</div>
						</div>

						<div className="work">
							<div className="work-title">
								Monolithic & Microservices Experience
							</div>
							<div className="work-subtitle">
								Project Experience
							</div>
							<div className="work-duration">2025</div>
						</div>

						{/* Resume Download Button */}
						<div className="resume-download">
							<button
								className="download-btn fancy"
								onClick={handleDownload}
							>
								<FontAwesomeIcon
									icon={faDownload}
									className="download-icon"
								/>
								<span>Download Resume</span>
							</button>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
