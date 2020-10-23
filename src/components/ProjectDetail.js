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
			<div
				className="mfp-bg mfp-fade mfp-ready"
				style={{ height: '6925px', position: 'absolute' }}
			/>
			<div
				className="mfp-wrap mfp-auto-cursor mfp-fade mfp-ready"
				tabIndex={-1}
				style={{
					height: '539px',
				}}
			>
				<div className="mfp-container mfp-s-ready mfp-inline-holder">
					<div className="mfp-content">
						<div className="popup-modal">
							<img className="scale-with-grid" src={url} alt="" />
							<div className="description-box">
								<h4>{name}</h4>
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
	)
}
