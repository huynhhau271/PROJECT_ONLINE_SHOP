SELECT COLUMN_NAME, IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'OrderDetails'
  AND COLUMN_NAME = 'OrderId'
  AND IS_NULLABLE = 'NO';