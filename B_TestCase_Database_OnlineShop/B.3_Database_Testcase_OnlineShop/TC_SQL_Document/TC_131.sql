SELECT COLUMN_DEFAULT
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'Orders' AND COLUMN_NAME = 'PaymentType' AND COLUMN_DEFAULT = 'CASH'