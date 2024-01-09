SELECT OrderId
FROM OrderDetails 
WHERE ISNUMERIC(OrderId) = 1 AND CAST(OrderId AS INT) > 0;