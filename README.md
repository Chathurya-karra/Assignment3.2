# Player Management API

This API allows you to manage player data in a MongoDB database.

## Endpoints

### Get All Players

- Method: GET
- URL: http://localhost:3000/players

Retrieves a list of all players.

### Get a Specific Player

- Method: GET
- URL: http://localhost:3000/players/:id

Retrieves the details of a specific player identified by the provided `id`.

### Add a Player

- Method: POST
- URL: http://localhost:3000/players

Adds a new player to the database. Provide the player details in the request body.

### Update a Player

- Method: PUT
- URL: http://localhost:3000/players/:id

Updates the details of a specific player identified by the provided `id`. Provide the updated player details in the request body.

### Delete a Player

- Method: DELETE
- URL: http://localhost:3000/players/:id

Deletes a specific player identified by the provided `id`.

### Query 1

- Method: GET
- URL: http://localhost:3000/players/query1

Executes Query 1 and returns the result.

### Query 2

- Method: GET
- URL: http://localhost:3000/players/query2

Executes Query 2 and returns the result.

### Query 3

- Method: GET
- URL: http://localhost:3000/players/query3

Executes Query 3 and returns the result.

### Query 4

- Method: GET
- URL: http://localhost:3000/players/query4

Executes Query 4 and returns the result.

### Query 5

- Method: GET
- URL: http://localhost:3000/players/query5

Executes Query 5 and returns the result.

## How to Run

1. Install dependencies:
```
npm install
```


2. Set up environment variables:

Create a `.env` file in the project root directory and add the following:

```
MONGODB_URI=<your_mongodb_connection_string>
```


Replace `<your_mongodb_connection_string>` with your actual MongoDB connection string.

3. Start the server:
```
npm start
```


The server will start running on http://localhost:3000.

4. Use an API client (e.g., Postman, cURL) to make requests to the available endpoints.




