SELECT COLUMN_NAME, IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'Customers'
  AND COLUMN_NAME = 'Birthday'
  AND IS_NULLABLE = 'YES';