DROP TABLE images;
DROP TABLE product;

CREATE TABLE product (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  brand VARCHAR(80) NOT NULL,
  item INTEGER NOT NULL,
  color VARCHAR(20) NOT NULL,
  rating INTEGER,
  price INTEGER NOT NULL,
  size VARCHAR(3)
);

CREATE TABLE images (
  image_url VARCHAR(80),
  description VARCHAR(80),
  product_id INTEGER REFERENCES product(id)
);