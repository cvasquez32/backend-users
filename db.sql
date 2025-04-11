-- Drop the database if it already exists (optional)
DROP DATABASE IF EXISTS movie_tickets_db;

-- Create a fresh database
CREATE DATABASE movie_tickets_db;
USE movie_tickets_db;

-- Create the 'movies' table
CREATE TABLE movies (
  movie_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  production_budget INT NOT NULL,
  PRIMARY KEY (movie_id)
);

-- Create the 'tickets' table
CREATE TABLE tickets (
  ticket_id INT NOT NULL AUTO_INCREMENT,
  movie_id INT NOT NULL,
  tickets_sold INT NOT NULL,
  box_office INT NOT NULL,
  PRIMARY KEY (ticket_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id)
);

-- Optional: Insert sample data (remove or modify as needed)
-- INSERT INTO movies (title, `date`, production_budget)
-- VALUES
--   ('Tron Legacy', '2010-12-17', 170000000),
--   ('Inception', '2010-07-16', 160000000);

-- INSERT INTO tickets (movie_id, tickets_sold, box_office)
-- VALUES
--   (1, 5000000, 400000000),
--   (2, 8000000, 800000000);