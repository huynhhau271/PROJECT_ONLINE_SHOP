SELECT COLUMN_NAME, IS_NULLABLE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE
  TABLE_NAME = 'Products'
  AND COLUMN_NAME = 'Discount'
  AND IS_NULLABLE = 'NO';