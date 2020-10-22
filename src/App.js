import React from 'react'

import { headerData, aboutData } from './data'

import Header from './components/Header'
import About from './components/About'

function App() {
	return (
		<div className="App">
			<Header {...headerData} />
			<About {...aboutData} />
		</div>
	)
}

export default App
