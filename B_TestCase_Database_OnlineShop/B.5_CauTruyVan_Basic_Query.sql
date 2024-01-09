----- Phần A: Truy vấn cơ bản
----- 1. Hiển thị tất cả các mặt hàng có giảm giá <= 10%
SELECT * 
FROM 
	Products 
WHERE 
	Discount <= 0.1
GO
----- 2. Hiện thị tất cả các mặt hàng không có giảm giá
SELECT * 
FROM 
	Products 
WHERE 
	Discount = 0 OR Discount IS NULL;
GO
----- 3. Hiển thị tất cả các mặt hàng có số lượng tồn kho <= 5
SELECT * 
FROM Products 
WHERE Stock <= 5;
----- 4. Hiển thị tất cả các mặt hàng có Giá bán sau khi đã giảm giá <= 100.000
SELECT *
FROM 
	[dbo].[Products] 
WHERE 
	[Price] * (100 - Discount)/100 <= 100000
GO
----- 5. Hiện thị tất cả các mặt hàng thuộc danh mục CPU, RAM
SELECT * 
FROM 
	[dbo].[Categories]
WHERE 
	[Id] = 8340;
GO
----- 6. Hiển thị tất cả các khách hàng có địa chỉ ở Quận Hải Châu
SELECT * 
FROM 
	[dbo].[Customers] 
WHERE 
	Address LIKE N'%Quận Hải Châu%'
GO
----- 7. Hiển thị tất cả các khách hàng có địa chỉ ở Quận Hải Châu hoặc Quận Thanh Khê
SELECT * 
FROM 
	[dbo].[Customers] 
WHERE 
	Address LIKE N'%Quận Hải Châu%' 
OR 
	Address LIKE N'%Quận Thanh Khê%'
GO
----- 8. Hiển thị tất cả các khách hàng có năm sinh 1990.
SELECT * 
FROM 
	Customers 
WHERE YEAR(Birthday) = 1990
GO
----- 9. Hiển thị tất cả các khách hàng có tuổi trên 60.
SELECT * FROM customers WHERE DATEDIFF(YEAR, Birthday, GETDATE()) > 60
GO
----- 10. Hiển thị tất cả các khách hàng có tuổi từ 20 đến 30.
SELECT * FROM Customers WHERE DATEDIFF(YEAR, Birthday, GETDATE()) BETWEEN 20 AND 30
GO
----- 11. Hiển thị tất cả các khách hàng có sinh nhật là hôm nay. Gợi ý: dùng hàm GETDATE(), MONTH(), DAY()
SELECT * FROM customers WHERE MONTH(Birthday) = MONTH(GETDATE()) AND DAY(Birthday) = DAY(GETDATE())
GO
----- 12. Hiển thị tất cả các đơn hàng có trạng thái là COMPLETED
SELECT * FROM Orders WHERE Status = 'COMPLETED'
GO
----- 13. Hiển thị tất cả các đơn hàng có trạng thái là COMPLETED trong ngày hôm nay
SELECT * FROM Orders WHERE Status = 'COMPLETED' AND CONVERT(date, ShippedDate) = CONVERT(date, GETDATE())
GO
----- 14. Hiển thị tất cả các đơn hàng chưa hoàn thành trong tháng này
SELECT * 
FROM 
	Orders 
WHERE status <> 'COMPLETED' AND MONTH(CreatedDate) = MONTH(GETDATE()) AND YEAR(CreatedDate) = YEAR(GETDATE())
GO
----- 15. Hiển thị tất cả các đơn hàng có trạng thái là CANCELED
SELECT * FROM Orders WHERE Status = 'CANCELED'
GO
----- 16. Hiển thị tất cả các đơn hàng có trạng thái là CANCELED trong ngày hôm nay
SELECT * FROM orders WHERE status = 'CANCELED' AND CONVERT(date, ShippedDate) = CONVERT(date, GETDATE())
GO
----- 17. Hiển thị tất cả các đơn hàng có trạng thái là COMPLETED trong tháng này
SELECT * 
FROM 
	Orders 
WHERE status = 'COMPLETED' AND MONTH(ShippedDate) = MONTH(GETDATE()) AND YEAR(ShippedDate) = YEAR(GETDATE())
GO
----- 18. Hiển thị tất cả các đơn hàng có trạng thái là COMPLETED trong tháng 1 năm 2021
SELECT * FROM Orders WHERE status = 'COMPLETED' AND MONTH(ShippedDate) = 1 AND YEAR(ShippedDate) = 2021
GO
----- 19. Hiển thị tất cả các đơn hàng có trạng thái là COMPLETED trong năm 2021
SELECT * FROM orders WHERE status = 'COMPLETED' AND YEAR(ShippedDate) = 2021
GO
----- 20. Hiển thị tất cả các đơn hàng có hình thức thanh toán là CASH
SELECT * FROM Orders WHERE PaymentType = 'CASH'
GO
----- 21. Hiển thị tất cả các đơn hàng có hình thức thanh toán là CREDIT CARD
SELECT * FROM Orders WHERE PaymentType = 'CREDIT CARD'
GO
----- 22. Hiển thị tất cả các đơn hàng có địa chỉ giao hàng là Hà Nội
SELECT * FROM Orders WHERE ShippingAddress LIKE N'%Hà Nội%' 
GO
----- 23. Hiển thị tất cả các nhân viên có sinh nhật là tháng này
SELECT * FROM Employees WHERE MONTH(Birthday) = MONTH(GETDATE())
GO
----- 24. Hiển thị tất cả các nhà cung cấp có tên là: (SONY, SAMSUNG, TOSHIBA, APPLE)
SELECT * FROM Suppliers WHERE Name IN ('SONY', 'SAMSUNG', 'TOSHIBA', 'APPLE')
GO
----- 25. Hiển thị tất cả các nhà cung cấp không có tên là: (SAMSUNG, APPLE)
SELECT * FROM Suppliers WHERE Name NOT IN ('SAMSUNG', 'APPLE')
GO
----- 26. Hiển thị tất cả các nhà cung cấp có địa chỉ ở Quận Hải Châu và Quận Thanh Khê.
SELECT * 
FROM 
	[dbo].[Suppliers]
WHERE 
	Address LIKE N'%Quận Hải Châu%' 
AND
	Address LIKE N'%Quận Thanh Khê%'
GO
----- 27. Hiển thị tất cả các nhà cung cấp có địa chỉ ở Quận Hải Châu hoặc Quận Thanh Khê.
SELECT * 
FROM 
	[dbo].[Suppliers]
WHERE 
	Address LIKE N'%Quận Hải Châu%' 
OR
	Address LIKE N'%Quận Thanh Khê%'
GO
----- 28. Hiển thị tất cả các khách hàng có sinh nhật là ngày hôm nay.
SELECT * FROM Customers WHERE DATEPART(month, Birthday) = DATEPART(month, GETDATE()) AND DATEPART(day, Birthday) = DATEPART(day, GETDATE())
GO
----- 29. Hiển thị xem có bao nhiêu mức giảm giá khác nhau.
SELECT COUNT(DISTINCT Discount) AS Total_Discounts FROM OrderDetails
GO
----- 30. Hiển thị xem có bao nhiêu mức giảm giá khác nhau và số lượng mặt hàng có mức giảm giá đó.
SELECT Discount, COUNT(*) AS Total_Items FROM OrderDetails GROUP BY Discount ORDER BY Discount
GO
----- 31. Hiển thị xem có bao nhiêu mức giảm giá khác nhau và số lượng mặt hàng có mức giảm giá đó, 
----- sắp xếp theo số lượng giảm giá giảm dần.
SELECT Discount, COUNT(*) AS total_Items FROM OrderDetails GROUP BY Discount ORDER BY Total_Items DESC
GO
----- 32. Hiển thị xem có bao nhiêu mức giảm giá khác nhau và số lượng mặt hàng có mức giảm giá đó, 
----- sắp xếp theo số lượng giảm giá tăng dần, chỉ hiển thị các mức giảm giá có số lượng mặt hàng >= 5
SELECT Discount, COUNT(*) AS Total_Items FROM OrderDetails GROUP BY Discount HAVING COUNT(*) >= 5 ORDER BY Total_Items ASC
GO
----- 33. Hiển thị xem có bao nhiêu mức tuổi khác nhau của khách hàng và số lượng khách hàng có mức tuổi đó, 
----- sắp xếp theo số lượng khách hàng tăng dần.
SELECT Birthday, COUNT(*) AS Total_Customers FROM Customers GROUP BY Birthday ORDER BY Total_Customers ASC
GO
----- 34. Hiển thị xem có bao nhiêu mức tuổi khác nhau của nhân viên và số lượng nhân viên có mức tuổi đó, 
----- sắp xếp theo số lượng nhân viên giảm dần.
SELECT Birthday, COUNT(*) AS Total_Employees FROM Employees GROUP BY Birthday ORDER BY Total_Employees DESC
GO
----- 35. Hiển thị số lượng đơn hàng theo từng ngày khác nhau sắp xếp theo số lượng đơn hàng giảm dần.
SELECT CreatedDate, COUNT(*) AS Total_Orders FROM Orders GROUP BY CreatedDate ORDER BY Total_Orders DESC
GO
----- 36. Hiển thị số lượng đơn hàng theo từng tháng khác nhau sắp xếp theo số lượng đơn hàng giảm dần.
SELECT DATEPART(month, CreatedDate) AS OrderMonth, COUNT(*) AS Total_Orders FROM Orders GROUP BY DATEPART(month, CreatedDate) ORDER BY Total_Orders DESC
GO
----- 37. Hiển thị số lượng đơn hàng theo từng năm khác nhau sắp xếp theo số lượng đơn hàng giảm dần.
SELECT DATEPART(year, CreatedDate) AS OrderYear, COUNT(*) AS Total_Orders FROM Orders GROUP BY DATEPART(year, CreatedDate) ORDER BY total_orders DESC
GO
----- 38. Hiển thị số lượng đơn hàng theo từng năm khác nhau sắp xếp theo số lượng đơn hàng giảm dần,
----- chỉ hiển thị các năm có số lượng đơn hàng >= 5.
SELECT DATEPART(year, CreatedDate) AS OrderYear, COUNT(*) AS Total_Orders 
FROM Orders 
GROUP BY DATEPART(year, CreatedDate)
HAVING COUNT(*) >= 5 
ORDER BY Total_Orders DESC