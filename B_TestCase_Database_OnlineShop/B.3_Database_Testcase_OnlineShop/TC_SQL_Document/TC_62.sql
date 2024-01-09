SELECT
   i.name AS constraint_name,
   t.name AS table_name,
   c.name AS column_name
FROM sys.indexes i
   INNER JOIN sys.index_columns ic
      ON i.index_id = ic.index_id AND i.object_id = ic.object_id
   INNER JOIN sys.tables AS t
      ON t.object_id = i.object_id
   INNER JOIN sys.columns c
      ON t.object_id = c.object_id AND ic.column_id = c.column_id
WHERE
    i.is_unique_constraint = 1
   AND t.name = 'Employees'
   AND c.name = 'Email'