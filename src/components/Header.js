import React from 'react'

import Navbar from './Navbar'

export default function Header({ headline }) {
	return (
		<header id="home">
			<Navbar />
			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">
						I'm Santiago Montoya.
					</h1>
					<h3>{headline}</h3>
					<hr />
					<ul className="social">
						<li>
							<a
								href="https://github.com/Sanmonsua"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-github" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/sanmonsua/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fa fa-linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<p className="scrolldown">
				<a className="smoothscroll" href="#about">
					<i className="icon-down-circle" />
				</a>
			</p>
		</header>
	)
}
