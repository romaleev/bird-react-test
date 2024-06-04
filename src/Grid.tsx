import {useState, useEffect} from 'react'

const Grid = ({rows = 0, cols = 0, maxSelection = 5} = {}) => {
	const [index, setIndex] = useState(0)
	const [grid, setGrid] = useState([])
	const [history, setHistory] = useState([])

	const getGrid = (rows, cols) => {
		const initGrid = []
		for (let row = 0; row < rows; row++) {
			if (!initGrid[row]) initGrid[row] = []
			for (let col = 0; col < cols; col++) {
				initGrid[row][col] = '|¯'
			}
		}
		return initGrid
	}

	useEffect(() => {
		const grid = getGrid(rows, cols)
		setGrid(grid)
		setHistory([grid])
	}, [])

	const rollback = () => {
		if (history.length === 1) {
			setIndex(0)
			setGrid(history.at(-1))
			return
		}

		setGrid(history.pop())
		setTimeout(rollback, 1000)
	}

	const selectCell = (rowI, colI) => {
		if (index < 0 || grid[rowI][colI] !== '|¯') return

		const nextIndex = index + 1
		if (nextIndex === maxSelection) {
			setIndex(-1)
			rollback()
			return
		}

		const nextGrid = structuredClone(grid)
		nextGrid[rowI][colI] = '|' + nextIndex

		const nextHistory = structuredClone(history)
		nextHistory.push(nextGrid)

		setIndex(nextIndex)
		setGrid(nextGrid)
		setHistory(nextHistory)
	}

	return (
		<table>
			<tbody>
			{grid.map((row, rowI) => (
				<tr key={rowI}>
					{row.map((col, colI) => (
						<td key={colI} onClick={() => selectCell(rowI, colI)}>
							{col}
							{colI === cols - 1 ? '|' : ''}
						</td>
					))}
				</tr>
			))}
			</tbody>
		</table>
	)
}

export default Grid
