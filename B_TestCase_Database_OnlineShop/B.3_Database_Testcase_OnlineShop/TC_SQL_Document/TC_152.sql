SELECT name
FROM sys.check_constraints
WHERE parent_object_id = OBJECT_ID('OrderDetails') AND OBJECT_DEFINITION(OBJECT_ID) LIKE '%Discount% BETWEEN 0 AND 90%'