CREATE DATABASE microservices;

\c microservices;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS orders(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    address VARCHAR(80) NOT NULL,
    reference VARCHAR(80) NOT NULL,
    pricing INT NOT NULL
);