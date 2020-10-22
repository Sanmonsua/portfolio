import React from 'react'

import Navbar from './Navbar'

export default function Header(props) {
	var { name, description } = props
	return (
		<header id="home">
			<Navbar />
			<div className="row banner">
				<div className="banner-text">
					<h1 className="responsive-headline">I'm {name}.</h1>
					<h3>{description}</h3>
					<hr />
					<ul className="social">
						<li>
							<a href="#">
								<i className="fa fa-github" />
							</a>
						</li>
						<li>
							<a href="#">
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
