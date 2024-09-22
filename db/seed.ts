import pool from "./index";

const seed = async () => {
  try {
   
    await pool.query("DROP TABLE IF EXISTS MovieGenres");
    await pool.query("DROP TABLE IF EXISTS Ratings");
    await pool.query("DROP TABLE IF EXISTS Movies");
    await pool.query("DROP TABLE IF EXISTS Genres");
    await pool.query("DROP TABLE IF EXISTS Actors");
    await pool.query("DROP TABLE IF EXISTS Directors");


    await pool.query(`
      CREATE TABLE IF NOT EXISTS Directors (
        DirectorID SERIAL PRIMARY KEY,
        Name VARCHAR(100),
        Nationality VARCHAR(100),
        DOB DATE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Actors (
        ActorID SERIAL PRIMARY KEY,
        Name VARCHAR(100),
        Nationality VARCHAR(100),
        DOB DATE
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Genres (
        GenreID SERIAL PRIMARY KEY,
        GenreName VARCHAR(100)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Movies (
        MovieID SERIAL PRIMARY KEY,
        Title VARCHAR(100),
        ReleaseYear INT,
        DirectorID INT REFERENCES Directors(DirectorID)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS Ratings (
        MovieID INT REFERENCES Movies(MovieID),
        Rating DECIMAL(2, 1),
        PRIMARY KEY (MovieID)
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS MovieGenres (
        MovieID INT REFERENCES Movies(MovieID),
        GenreID INT REFERENCES Genres(GenreID),
        PRIMARY KEY (MovieID, GenreID)
      );
    `);

  
    await pool.query(`
      INSERT INTO Directors (Name, Nationality, DOB) VALUES
      ('Hratch Keshishyan', 'Armenian', '1951-05-19'),
      ('Luc Besson', 'French', '1959-03-18'),
      ('Woody Allen', 'American', '1935-12-01');
    `);

    await pool.query(`
      INSERT INTO Actors (Name, Nationality, DOB) VALUES
      ('Angela Safaryan', 'Armenian', '1985-11-25'),
      ('Frunzik Mkrtchyan', 'Armenian', '1930-09-04'),
      ('Nazeni Hovhanisyan', 'Armenian', '1948-05-29'),
      ('Khoren Levonyan', 'Armenian', '1930-08-06'),
      ('Leonardo DiCaprio', 'American', '1974-11-11');
    `);

    await pool.query(`
      INSERT INTO Genres (GenreName) VALUES
      ('Drama'),
      ('Comedy'),
      ('Romance'),
      ('Action'),
      ('Thriller');
    `);

    await pool.query(`
      INSERT INTO Movies (Title, ReleaseYear, DirectorID) VALUES
      ('Lost & Found in Armenia', 2017, 1),
      ('The Line', 2020, 1),
      ('Poker.am', 2019, 1),
      ('Inception', 2010, 3),
      ('Léon: The Professional', 1994, 2);
    `);

    await pool.query(`
      INSERT INTO Ratings (MovieID, Rating) VALUES
      (1, 7.9),
      (2, 8.1),
      (3, 8.3),
      (4, 8.5),
      (5, 8.2);
    `);

    await pool.query(`
      INSERT INTO MovieGenres (MovieID, GenreID) VALUES
      (1, 1),  -- Lost & Found in Armenia - Drama
      (2, 2),  -- The Line - Comedy
      (3, 1),  -- Poker.am - Drama
      (4, 3),  -- Inception - Action
      (5, 4);  -- Léon: The Professional - Action
    `);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await pool.end();
  }
};

seed();
