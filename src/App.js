import React from 'react'
import logo from './logo.svg'
import './App.css'

import { headerData } from './data'

import Header from './components/Header'

function App() {
	return (
		<div className="App">
			<Header {...headerData} />
		</div>
	)
}

export default App
