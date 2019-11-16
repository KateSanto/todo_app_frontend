
SELECT * FROM user;
+--------+-------+---------+
| userId | name  | surname |
+--------+-------+---------+
|      1 | Kate  | Santo   |
|      2 | Sofia | Herranz |
+--------+-------+---------+


SELECT * FROM task;
+------+-----------------+-----------+--------------+--------+
| id   | taskDescription | completed | creationDate | userId |
+------+-----------------+-----------+--------------+--------+
| 0001 | Buy milk        | false     | 2019-11-16   |      1 |
| 0002 | Buy bread       | false     | 2019-11-16   |      1 |
| 0003 | Wash car        | false     | 2019-11-15   |      1 |
| 0004 | Feed piggies    | false     | 2019-11-15   |      2 |
+------+-----------------+-----------+--------------+--------+
