import React, { useState } from 'react'

import Modal from './Modal'
import ProjectDetail from './ProjectDetail'

export default function Project({ data = {} }) {
	var {
		name,
		primaryLanguage,
		images: [
			{
				resolutions: {
					mobile: { url },
				},
			},
		],
	} = data

	var [showModal, setShowModal] = useState(false)

	function onShowDetails() {
		setShowModal(true)
	}

	function onCloseModal() {
		setShowModal(false)
	}

	return (
		<div className="columns portfolio-item">
			<div className="item-wrap">
				<button onClick={onShowDetails}>
					<img alt="" src={url} />
					<div className="overlay">
						<div className="portfolio-item-meta">
							<h5>{name}</h5>
							<p>{primaryLanguage}</p>
						</div>
					</div>
					<div className="link-icon">
						<i className="icon-plus" />
					</div>
				</button>
			</div>
			{showModal && (
				<Modal>
					<ProjectDetail onClose={onCloseModal} project={data} />
				</Modal>
			)}
		</div>
	)
}
