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
			const a = await fetch(
				"https://portfoliobackend-4dzs.onrender.com/api/contacts",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(form),
				}
			);
			alert("Message sent!");
			console.log(a);
			setForm({ name: "", email: "", message: "" });
		} catch (s) {
			alert("Failed to submit!");
			console.log(s);
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

					<div className="socials-container flex flex-col md:flex-row justify-between items-start w-full gap-6 px-4 md:px-8 py-6">
						<div className="contact-socials w-full md:w-auto flex justify-center md:justify-start">
							<Socials />
						</div>

						<div className="contact-card w-full sm:w-[340px] md:w-[300px] bg-gradient-to-br from-white to-slate-50 rounded-2xl p-5 shadow-xl border border-slate-200 hover:-translate-y-1 transition-transform">
							<div className="card-header text-xl font-extrabold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent mb-1">
								Let's Work Together
							</div>
							<div className="card-sub text-sm text-slate-600 font-medium mb-4">
								Or grab a coffee, virtually ☕
							</div>

							<form
								onSubmit={handleSubmit}
								className="contact-form flex flex-col gap-3 w-full"
							>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={form.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 text-sm border border-slate-300 rounded-xl focus:border-slate-900 focus:ring-4 focus:ring-slate-800/10 transition"
								/>

								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={form.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 text-sm border border-slate-300 rounded-xl focus:border-slate-900 focus:ring-4 focus:ring-slate-800/10 transition"
								/>

								<textarea
									name="message"
									placeholder="Message me..."
									value={form.message}
									onChange={handleChange}
									required
									className="w-full h-24 px-4 py-2 text-sm border border-slate-300 rounded-xl focus:border-slate-900 focus:ring-4 focus:ring-slate-800/10 resize-none transition"
								/>

								<button
									type="submit"
									className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white font-semibold py-2 rounded-xl hover:opacity-90 hover:scale-[1.02] transition shadow-md"
								>
									Send Message
								</button>
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
