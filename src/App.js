import React from 'react'

import { headerData, aboutData } from './data'
import { projects } from './mockData'

import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
	return (
		<div className="App">
			<Header {...headerData} />
			<About {...aboutData} />
			<Portfolio projects={projects} />
		</div>
	)
}

export default App
