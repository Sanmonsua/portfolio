import React from 'react'

export default function ProjectDetail({ onClose, project }) {
	var {
		name,
		summary,
		languages = [],
		libraries = [],
		images: [
			,
			{
				resolutions: {
					desktop: { url },
				},
			},
		],
		githubUrl,
	} = project

	var tags = [...languages, libraries].join(', ')
	return (
		<div>
			<div className="mfp-bg mfp-fade mfp-ready" />
			<div
				className="mfp-wrap mfp-auto-cursor mfp-fade mfp-ready"
				tabIndex={-1}
				style={{
					height: window.innerHeight,
					position: 'absolute',
					top: `${window.scrollY}px`,
				}}
			>
				<div className="mfp-container mfp-s-ready mfp-inline-holder">
					<div className="mfp-content">
						<div className="popup-modal">
							<img className="scale-with-grid" src={url} alt="" />

							<div className="description-box">
								<h3>{name}</h3>
								<p>{summary}</p>
								<span className="categories">
									<i className="fa fa-tag" />
									{tags}
								</span>
							</div>
							<div className="link-box">
								<a
									href={githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Details
								</a>
								<button
									onClick={onClose}
									className="popup-modal-dismiss"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
