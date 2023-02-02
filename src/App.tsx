import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Players } from './pages/players';
import { Table } from './pages/table';
import './output.css'

function App() {

	const [data, setData] = useState([{id: 1, name: 'Руслан', score: 27}, {id: 1, name: 'Чулпан', score: 22}, {id: 1, name: 'Никита', score: 39}, {id: 1, name: 'Аделина', score: 12}])


	const resetScore = () => {
        setData(data.map((item) => {
            item.score = 0;
            return item
        }))
    }

	const sortData = (array: Object[], key: keyof Object) => {
        return data.sort((a, b) => {
            if (a[key] < b[key]) {
                return 1;
            } if (a[key] > b[key]) {
                return 0;
            }
            return 0;
        });
    };

	return (
		<>
		<Navigation 
		sortData={sortData}
		resetScore={resetScore}
		/>
		<Routes>
			<Route 
				path='/' 
				element={ <Players 
					data={data}
					setData={setData}
				/> }
			/>
			<Route 
				path='/table' 
				element={ <Table/> }
			/>
		</Routes>
		</>
	);
}

export default App;
