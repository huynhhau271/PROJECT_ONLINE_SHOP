SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH, NUMERIC_PRECISION, NUMERIC_SCALE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = 'Orders' AND COLUMN_NAME = 'ShippingAddress' AND CHARACTER_MAXIMUM_LENGTH = 500;