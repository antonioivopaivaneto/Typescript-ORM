DROP DATABASE IF EXISTS branas;

DROP TABLE IF EXISTS branas.book;
DROP TABLE IF EXISTS branas.car;


CREATE TABLE branas.book (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT
);

CREATE TABLE branas.car (
  id SERIAL PRIMARY KEY,
  md TEXT,
  br TEXT
);
