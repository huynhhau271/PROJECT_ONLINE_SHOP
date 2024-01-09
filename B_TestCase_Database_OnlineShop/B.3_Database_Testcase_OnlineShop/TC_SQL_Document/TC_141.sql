SELECT ProductId
FROM OrderDetails 
WHERE ISNUMERIC(ProductId) = 1 AND CAST(ProductId AS INT) > 0;