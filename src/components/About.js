import React from 'react'

export default function About({ info }) {
	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img
						className="profile-pic"
						src="images/profilepic.jpg"
						alt=""
					/>
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>
					<p>{info}</p>
				</div>
			</div>
		</section>
	)
}
