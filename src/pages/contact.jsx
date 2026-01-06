import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	// ✅ Add this (form state + handlers)
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await fetch("http://localhost:8095/api/contacts", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			alert("Message sent!");
			setForm({ name: "", email: "", message: "" });
		} catch {
			alert("Failed to submit!");
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch: Ways to Connect with Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. If you have a specific question or comment, feel
							free to email me directly at &nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Finally, if you prefer social media, you can find
							me on &nbsp;
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>

						{/* Contact Form Card */}
						<div className="contact-card">
							<div className="card-header">
								Let's Work Together
							</div>
							<div className="card-sub">
								Or grab a coffee, virtually ☕
							</div>

							<form
								onSubmit={handleSubmit}
								className="contact-form"
							>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={form.name}
									onChange={handleChange}
									required
								/>

								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={form.email}
									onChange={handleChange}
									required
								/>

								<textarea
									name="message"
									placeholder="Message me..."
									value={form.message}
									onChange={handleChange}
									required
								/>

								<button type="submit">Submit</button>
							</form>
						</div>
					</div>

					{/* FOOTER AT END */}
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
