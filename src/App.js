import React, { useState, useEffect } from 'react'

import { fetchPortfolio } from './api'

import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
	var [headline, setHeadline] = useState('')
	var [profilePic, setProfilePic] = useState('')
	var [bio, setBio] = useState('')
	var [projects, setProjects] = useState([])

	useEffect(function onMount() {
		getData()

		async function getData() {
			var response = await fetchPortfolio()
			var results = await response.json()
			var {
				basics: { headline, summary, picture },
				projects,
			} = results
			setHeadline(headline)
			setBio(summary)
			setProfilePic(picture)
			setProjects(projects)
		}
	}, [])

	return (
		<div className="App">
			<Header headline={headline} />
			<About profilePic={profilePic} bio={bio} />
			<Portfolio projects={projects} />
		</div>
	)
}

export default App
