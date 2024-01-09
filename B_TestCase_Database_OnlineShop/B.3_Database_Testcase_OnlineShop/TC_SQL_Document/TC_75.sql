SELECT name
FROM sys.check_constraints
WHERE parent_object_id = OBJECT_ID('Products') AND OBJECT_DEFINITION(OBJECT_ID) LIKE '%Price% > 0%'