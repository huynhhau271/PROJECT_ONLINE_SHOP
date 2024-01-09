SELECT COLUMN_NAME, IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'Suppliers'
  AND COLUMN_NAME = 'Name'
  AND IS_NULLABLE = 'NO';