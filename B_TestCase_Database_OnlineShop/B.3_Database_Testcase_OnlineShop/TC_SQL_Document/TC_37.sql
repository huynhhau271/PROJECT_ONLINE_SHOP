SELECT *
FROM Customers
WHERE PATINDEX('([0-9][ -]?){9,20}', PhoneNumber) > 0