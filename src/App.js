import './App.css';
import Grid from "./Grid.tsx";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Magic Grid</h1>
				<Grid rows={3} cols={3}/>
				<br/>
				<details className="Details">
					<summary>Task description</summary>
					<pre>{`
Step by step goals:

- build <Grid/> component that can render cells on the screen
based on passed number of rows/cols.
 e.g. <Grid rows={3} cols={3}/> should render:

|¯|¯|¯|
|¯|¯|¯|
|¯|¯|¯|


- add ability to select cells in the Grid by clicking on them

- when there is 5 cells selected - reset selection

- last bonus goal - add logic to make selection reset animated with delay 1sec
between unselections in reverse order.

e.g. I select cells in order

|1|¯|¯|
|¯|2|3|
|¯|5|4|

and should see:

|1|¯|¯|
|¯|2|3|
|¯|¯|4|

1 sec after:

|1|¯|¯|
|¯|2|3|
|¯|¯|¯|

1 sec after:

|1|¯|¯|
|¯|2|¯|
|¯|¯|¯|

1 sec after:

|1|¯|¯|
|¯|¯|¯|
|¯|¯|¯|

1 sec after:

|¯|¯|¯|
|¯|¯|¯|
|¯|¯|¯|
				`}</pre>
				</details>
			</header>
		</div>
	);
}

export default App;
