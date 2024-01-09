SELECT name
FROM sys.check_constraints
WHERE parent_object_id = OBJECT_ID('Orders') AND OBJECT_DEFINITION(OBJECT_ID) LIKE '%ShippedDate% >= %CreatedDate%'