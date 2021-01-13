CREATE DATABASE microservices;
\c microservices;

CREATE TABLE IF NOT EXISTS users(
    id                  uuid,
    first_name          VARCHAR(80),
    last_name           VARCHAR(80),
    birth_date          DATE
);
