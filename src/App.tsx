import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Players } from './pages/players';
import { Table } from './pages/table';
import './output.css'

function App() {


	return (
		<>
		<Navigation />
		<Routes>
			<Route path='/' element={ <Players /> }/>
			<Route path='/table' element={ <Table/> }/>
		</Routes>
		</>
	);
}

export default App;
