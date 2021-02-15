CREATE TABLE helo_users
(
    id SERIAL PRIMARY KEY, 
    username VARCHAR(40) NOT NULL,
    password VARCHAR(40) NOT NULL,
    profile_pic TEXT 
)

CREATE TABLE helo_posts
(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    content TEXT,
    img TEXT,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES helo_users(id)
    date_created TIMESTAMP
);