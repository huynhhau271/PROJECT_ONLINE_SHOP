SELECT DATA_TYPE 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'Customers' 
AND COLUMN_NAME = 'Birthday' 
AND DATA_TYPE = 'datetime';