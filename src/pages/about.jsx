import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							{/* LEFT SIDE */}
							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
								<div className="skills-socials">
									<Socials />
								</div>
							</div>

							{/* RIGHT SIDE */}
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								{/* Skills Card (Horizontal Row) */}
								<div className="skills-card">
									<div className="skills-row">
										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/springboot.svg"
												alt="Spring Boot"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Spring Boot
										</span>
										<span>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
												alt="Java"
												width="18"
												height="18"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Java
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg"
												alt="Docker"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Docker
										</span>
										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg"
												alt="Kubernetes"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Kubernetes
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg"
												alt="C#"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											C#
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg"
												alt="MongoDB"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											MongoDB
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spring.svg"
												alt="Spring AI"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Spring AI
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg"
												alt="MySQL"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											MySQL
										</span>

										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
												alt="PostgreSQL"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											PostgreSQL
										</span>
										<span>
											<img
												src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg"
												alt="Python"
												width="16"
												height="16"
												style={{
													display: "inline",
													marginRight: "6px",
												}}
											/>
											Python
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* MOBILE SOCIALS (unchanged logic) */}
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>

					{/* FOOTER */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
