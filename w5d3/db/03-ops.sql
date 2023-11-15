SELECT * FROM jokes;

SELECT * FROM jokes WHERE id = 2;

SELECT * FROM jokes JOIN authors ON jokes.author_id = authors.id WHERE jokes.id = 5;