# Movie Database Project

This project is a Movie Database application that allows users to manage information about directors, actors, movies, genres, and ratings. It provides a RESTful API built with TypeScript, Express.js, and PostgreSQL.

## Getting Started

### You must have installed

- Node.js
- PostgreSQL
- dotenv package (for environment variables)

## Database Schema

### Actors Table

- **ActorID** (Primary Key, SERIAL)
- **Name** (VARCHAR(100))
- **Nationality** (VARCHAR(100))
- **DOB** (DATE)

### Directors Table

- **DirectorID** (Primary Key, SERIAL)
- **Name** (VARCHAR(100))
- **Nationality** (VARCHAR(100))
- **DOB** (DATE)

### Genres Table

- **GenreID** (Primary Key, SERIAL)
- **GenreName** (VARCHAR(100))

### MovieGenres Table

- **MovieID** (INT, Foreign Key referencing MovieID in the Movies table)
- **GenreID** (INT, Foreign Key referencing GenreID in the Genres table)

### Movies Table

- **MovieID** (Primary Key, SERIAL)
- **Title** (VARCHAR(100))
- **ReleaseYear** (INT)
- **DirectorID** (INT, Foreign Key referencing DirectorID in the Directors table)

### Ratings Table

- **MovieID** (Primary Key, INT, Foreign Key referencing MovieID in the Movies table)
- **Rating** (INT)

## Setup and Installation

- Download the repository in zip file

Create a .env file in the root directory and add your database configuration:

DB_USER=<your-db-user>
DB_HOST=<your-db-host>
DB_NAME=<your-db-name>
DB_PASSWORD=<your-db-password>
DB_PORT=<your-db-port>

### Install Dependencies:

```bash
npm install
```

To compile typescript, run

```bash
npm run build
```

then run

```bash
npm run seed
```

to initially create the tables. At last

```bash
npm start
```

### 3. CRUD Operations

1. Implement Create, Read, Update, and Delete operations for the following tables:
   - **Directors**
   - **Actors**
   - **Genres**
   - **Movies**
   - **Ratings**
2. For the `MovieGenres` table, implement only Create and Delete operations.

## Database Diagram

![Database Diagram](./postgres%20-%20public.png)
![Database Diagram](./screenshot%20postgres%20diagram.jpg)

## Routing

- The application uses Express.js for routing. Below are the available routes and their functionality:

### Actors Routes (/actors)

- GET / Retrieve all actors.
- GET /:id Retrieve an actor by its ID.
- POST / Add a new actor.
- PUT /:id Update an actor by its ID.
- DELETE /:id Delete an actor by its ID.

### Directors Routes (/directors)

- GET /: Retrieve all directors.
- GET /:id Retrieve a director by its ID.
- POST / Add a new director.
- PUT /:id Update a director by its ID.
- DELETE /:id Delete a director by its ID.

### Genres Routes (/genres)

- GET /: Retrieve all genres.
- GET /:id Retrieve a genre by its ID.
- POST / Add a new genre.
- PUT /:id Update a genre by its ID.
- DELETE /:id Delete a genre by its ID.

### MovieGenres Routes (/movie-genres)

- POST /: Add a new movie-genre association.
- DELETE /: Remove a movie-genre association.

### Movies Routes (/movies)

- GET /: Retrieve all movies.
- GET /:id Retrieve a movie by its ID.
- POST / Add a new movie.
- PUT /:id Update a movie by its ID.
- DELETE /:id Delete a movie by its ID.

### Ratings Routes (/ratings)

- GET / Retrieve all ratings.
- GET /:movieId Retrieve a rating by movie ID.
- POST / Add a new rating.
- PUT /:movieId Update a rating by movie ID.
- DELETE /:movieId Delete a rating by movie ID
