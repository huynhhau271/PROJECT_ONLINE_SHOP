-- Test case WAITING
SELECT COUNT(*) AS TotalCount
FROM Orders
WHERE Status = 'WAITING'

-- Test case CONFIRMED
SELECT COUNT(*) AS TotalCount
FROM Orders
WHERE Status = 'CONFIRMED'

-- Test case COMPLETED
SELECT COUNT(*) AS TotalCount
FROM Orders
WHERE Status = 'COMPLETED'

-- Test case CANCEL
SELECT COUNT(*) AS TotalCount
FROM Orders
WHERE Status = 'CANCEL'

-- Test case RETURNED
SELECT COUNT(*) AS TotalCount
FROM Orders
WHERE Status = 'RETURNED'