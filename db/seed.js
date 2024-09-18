const db = require("./index");

const seed = async () => {
  try {
    await db.query(
      "TRUNCATE TABLE Ratings, Movies, Genres, Actors, Directors RESTART IDENTITY CASCADE"
    );

    await db.query(`
      INSERT INTO Directors (DirectorID, Name, Nationality, DOB) VALUES
      -- Armenian Directors
      (1, 'Hratch Keshishyan', 'Armenian', '1951-05-19'),
      -- French Directors
      (2, 'Luc Besson', 'French', '1959-03-18'),
      -- American Directors
      (3, 'Woody Allen', 'American', '1935-12-01');
    `);

    await db.query(`
      INSERT INTO Actors (ActorID, Name, Nationality, DOB) VALUES
      -- Armenian Actors
      (1, 'Angela Safaryan', 'Armenian', '1985-11-25'),
      (2, 'Frunzik Mkrtchyan', 'Armenian', '1930-09-04'),
      (3, 'Nazeni Hovhanisyan', 'Armenian', '1948-05-29'),
      (4, 'Khoren Levonyan', 'Armenian', '1930-08-06'),
      -- American Actors
      (5, 'Leonardo DiCaprio', 'American', '1974-11-11'),
      (6, 'Meryl Streep', 'American', '1949-06-22'),
      -- French Actors
      (7, 'Juliette Binoche', 'French', '1964-03-09'),
      (8, 'Omar Sy', 'French', '1978-01-20'),
      -- Italian Actors
      (9, 'Adriano Celentano', 'Italian', '1938-01-06'),
      (10, 'Sophia Loren', 'Italian', '1934-09-20');
    `);

    await db.query(`
      INSERT INTO Genres (GenreID, GenreName) VALUES
      (1, 'Drama'),
      (2, 'Comedy'),
      (3, 'Romance'),
      (4, 'Action'),
      (5, 'Thriller');
    `);

    await db.query(`
      INSERT INTO Movies (MovieID, Title, ReleaseYear, DirectorID) VALUES
      -- Armenian Movies
      (1, 'Lost & Found in Armenia', 2017, 1),
      (2, 'The Line', 2020, 1),
      (3, 'Poker.am', 2019, 1),
      (4, 'Ararat', 2002, 1),
      (5, 'Gikor', 2017, 1),
      (6, 'Earthquake', 2022, 1),
      -- American Movies
      (7, 'Inception', 2010, 3),
      (8, 'The Devil Wears Prada', 2006, 3),
      -- French Movies
      (9, 'Léon: The Professional', 1994, 2),
      (10, 'The Fifth Element', 1997, 2),
      -- Italian Movies
      (11, 'La Dolce Vita', 1960, 2),
      (12, 'Cinema Paradiso', 1988, 2);
    `);

    await db.query(`
      INSERT INTO Ratings (MovieID, Rating) VALUES
      (1, 7.9),
      (2, 8.1),
      (3, 8.3),
      (4, 8.5),
      (5, 8.2),
      (6, 8.4),
      (7, 8.8),
      (8, 8.6),
      (9, 8.9),
      (10, 8.7),
      (11, 8.3),
      (12, 8.5);
    `);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await db.end();
  }
};

seed();
