import React from 'react'

export default function About({ profilePic, bio }) {
	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src={profilePic} alt="" />
				</div>
				<div className="nine columns main-col">
					<h2>About Me</h2>
					<p>{bio}</p>
				</div>
			</div>
		</section>
	)
}
