SELECT COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'Orders' AND COLUMN_NAME = 'Status' AND COLUMN_DEFAULT = 'WAITING'