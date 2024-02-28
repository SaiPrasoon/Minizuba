# Minizuba

Minizuba is a packaging solution startup. The “Packaging Supervisor” at Minizuba receives a list of the products that need to be packed through an API endpoint. Then a list of items is distributed to each packaging team depending on the type of package. Navigating the API poses challenges for the supervisor.

## How To Run

### `npm install`

Firstly, Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Problem Statement

Develop an application that displays all the orderlines(14 types) on UI. You can access the Minizuba API to fetch the relevant information.


## Following Solutions have been covered as per the problem statement

- Packaging orders displayed in a list view
- When no filters are applied all orderlines should be displayed.
- “OrderLineID” as the first column(extreme left)
- Items are always sorted in ascending order of “OrderLineID”
- Ensure fast loading of list items for user convenience
- Ability to filter by “Quantity”
- Ensure usability remains smooth even in slow network conditions
- Grouping by “OrderID” 
- Grouping by “UserID”
- Unit test cases
- Color code each package type.
