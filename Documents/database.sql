CREATE DATABASE get_stuff_done;

USE get_stuff_done;


CREATE TABLE user (userId BIGINT(20) NOT NULL AUTO_INCREMENT, name VARCHAR(50), surname VARCHAR(50), PRIMARY KEY(userId));

INSERT INTO user (userId, name, surname) VALUES ("1", "Kate", "Santo");

INSERT INTO user (userId, name, surname) VALUES ("2", "Sofia", "Herranz");

SELECT * FROM user;
+--------+-------+---------+
| userId | name  | surname |
+--------+-------+---------+
|      1 | Kate  | Santo   |
|      2 | Sofia | Herranz |
+--------+-------+---------+



CREATE TABLE task (id VARCHAR(50), taskDescription VARCHAR(100), completed VARCHAR(20), creationDate DATE, userId BIGINT(20), PRIMARY KEY (id));

ALTER TABLE task ADD FOREIGN KEY (userId) REFERENCES user(userId);

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("001", "Buy milk ", "false", "2019-11-16", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("002", "Buy bread", "false", "2019-11-16", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("003", "Wash car", "false", "2019-11-15", "1");

INSERT INTO task (id, taskDescription, completed, creationDate, userId) VALUES ("004", "Feed piggies", "false", "2019-11-16", "2");

SELECT * FROM task;
+------+-----------------+-----------+--------------+--------+
| id   | taskDescription | completed | creationDate | userId |
+------+-----------------+-----------+--------------+--------+
| 0001 | Buy milk        | false     | 2019-11-16   |      1 |
| 0002 | Buy bread       | false     | 2019-11-16   |      1 |
| 0003 | Wash car        | false     | 2019-11-15   |      1 |
| 0004 | Feed piggies    | false     | 2019-11-15   |      2 |
+------+-----------------+-----------+--------------+--------+
