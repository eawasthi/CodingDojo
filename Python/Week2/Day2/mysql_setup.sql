SELECT * FROM users;
INSERT INTO users  (first_name, last_name, email, created_at, updated_at, user_level, description)  VALUES  ('Ekta', 'Awasthi', 'ekta@yahoo.com', now( ), now( ), 9, 'n/a');
DELETE FROM users WHERE ID = 16;
UPDATE users SET first_name = "vipul" WHERE ID = 4;