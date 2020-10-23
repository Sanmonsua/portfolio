import React from 'react'

import Project from './Project'

export default function Portfolio({ projects = [] }) {
	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Projects.</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{projects.map(function renderProject(p) {
							return <Project data={p} />
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
