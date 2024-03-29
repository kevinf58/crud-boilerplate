# Crud Boilerplate

## About this Project

I made this project to learn how to perform simple CRUD operations and how to use an Express API to allow the server-side and client-side of an application to communicate with one another. This repository will be used for future reference and act as boilerplate for when I am building full stack applications.

- Nodemon was used to monitor changes and auto-restart the server after every change
- Express was used to create an API, allowing the frontend and backend to communicate
- Postgres was used as a local database to store data for this project
- Node to run the web server, connect to the database, run queries, and serve the API
- Insomnia was used to test and debug the API

- Note that the frontend only displays all data from the database. The goal for this project was just to learn about backend and how to connect it to the frontend.

## Functionality

- Get operations: The '/api/data' endpoint returns all data from the database. '/api/data/names' returns only the first and last names of all data in the database. The '/api/data/id=:id' endpoint returns the data of the given ':id'.
- Post operations: The '/api/data' endpoint takes in data sent in from the body of the request and checks if the team value already exists (teams are unique) before adding it to the database.
- Put operations: The '/api/data/id=:id' endpoint takes in data sent in from the body of the request, checks if the row with the specified ':id' exists. If true, checks if the team exists, and if false, adds the data to the database.
- Delete operations: The '/api/data/id=:id' endpoint checks if the team exists and deletes the row with specified ':id' if true.
