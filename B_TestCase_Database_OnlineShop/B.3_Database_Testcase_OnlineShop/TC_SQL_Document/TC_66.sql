SELECT Birthday
FROM Employees
WHERE DATEDIFF(YEAR, Birthday, GETDATE()) >= 18