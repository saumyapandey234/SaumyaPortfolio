import React from "react";

function article_1() {
	return {
		date: "3 January 2026",
		title: "The Benefits of AI in development",
		description:
			"AI speeds development, improves code quality, detects bugs early, automates testing, assists documentation, enhances security, and enables smarter decision-making, boosting productivity while building scalable, efficient, and innovative software.",
		keywords: [
			"The Benefits of AI",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "15 February 2026",
		title: "Accelerating Delivery with DevOps Practices",
		description:
			"DevOps accelerates delivery, automates CI/CD, improves reliability with monitoring and fast rollback, enables scalable infrastructure as code, reduces errors, and enhances team collaboration for faster, secure, efficient software releases",
		style: ``,
		keywords: [
			"Accelerating Delivery with DevOps Practices",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
