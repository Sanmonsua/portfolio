import React from 'react'

export default function ProjectDetail({ onClose, project }) {
	var {
		name,
		summary,
		images: [
			{
				resolutions: {
					thumbnail: { url },
				},
			},
		],
	} = project
	return (
		<div>
			<div className="mfp-bg mfp-fade mfp-ready" />
			<div
				className="mfp-wrap mfp-auto-cursor mfp-fade mfp-ready"
				tabIndex={-1}
				style={{
					height: '539px',
				}}
			>
				<div className="mfp-container mfp-s-ready mfp-inline-holder">
					<div
						className="mfp-content"
						style={{ height: '100%', alignSelf: 'center' }}
					>
						<div className="popup-modal" style={{ height: '80%' }}>
							<div
								className="scale-with-grid"
								alt=""
								style={{
									height: '50%',
									backgroundImage: `url(${url})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							/>
							<div style={{ height: '50%' }}>
								<div
									className="description-box"
									style={{
										overflowY: 'auto',
										height: '100%',
									}}
								>
									<h3>{name}</h3>
									<p>{summary}</p>
									<span className="categories">
										<i className="fa fa-tag" />
										Branding, Webdesign
									</span>
								</div>
								<div className="link-box">
									<a href="http://www.behance.net">Details</a>
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
		</div>
	)
}
