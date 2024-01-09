SELECT COLUMN_NAME, IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'Categories'
  AND COLUMN_NAME = 'Description'
  AND IS_NULLABLE = 'YES';