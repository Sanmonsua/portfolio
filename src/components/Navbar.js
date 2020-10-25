import React from 'react'

export default function Navbar() {
	return (
		<nav id="nav-wrap">
			<a className="mobile-btn" href="#nav-wrap" title="Show navigation">
				Show navigation
			</a>
			<a className="mobile-btn" href="#" title="Hide navigation">
				Hide navigation
			</a>
			<ul id="nav" className="nav">
				<li className="current">
					<a className="smoothscroll" href="#home">
						Home
					</a>
				</li>
				<li>
					<a className="smoothscroll" href="#about">
						About
					</a>
				</li>
				<li>
					<a className="smoothscroll" href="#portfolio">
						Portfolio
					</a>
				</li>
			</ul>
		</nav>
	)
}
