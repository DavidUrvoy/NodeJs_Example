CREATE DATABASE microservices;
\c microservices;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS users(
    id                  uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name          VARCHAR(80),
    last_name           VARCHAR(80),
    birth_date          DATE
);
