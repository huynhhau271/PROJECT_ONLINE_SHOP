INSERT INTO [dbo].[Categories] 
(
	[Name], 
	[Description]
)
VALUES
  (N'Micro', N'Microphone'),
  (N'Epson', N'Máy chiếu Epson'),
  (N'Samsung', N'Điện thoại Samsung'),
  (N'Dell', N'Máy tính Dell'),
  (N'HP', N'Máy tính HP'),
  (N'LG', N'Tivi LG 17 inch'),
  (N'Apple watch', N'Đồng hồ thông minh'),
  (N'Xiaomi', N'Điện thoại Xiaomi'),
  (N'Camera', N'Camera IP 360 Độ'),
  (N'Tablet', N'Máy tính bảng iPad 9');

GO

INSERT INTO  [dbo].[Suppliers]
(
	[Name], 
	[PhoneNumber],
	[Email],
	[Address]
)
VALUES
	 (N'Hậu', N'0795134581',N'hau12345@gmail.com', N'Quận Sơn Trà, TP Đà Nẵng'),
	 (N'Hoà', N'0795132686',N'hoa12345@gmail.com', N'Huyện Hoà Vang, TP Đà Nẵng'),
	 (N'Kiên', N'0795125768',N'kien12578@gmail.com', N'Huyện Đô Lương, tỉnh Nghệ An '),
	 (N'Chung', N'0165132680',N'chung1309@gmail.com', N'Huyện Duy Xuyên, tỉnh Quảng Nam'),
	 (N'Diểm', N'0769132612',N'diemnguyen@gmail.com', N'Huyện Đại Lộc, tỉnh Quảng Nam'),
	 (N'Hương', N'0869222613',N'huongphan@gmail.com', N'Huyện Quế Sơn, tỉnh Quảng Nam'),
	 (N'Thi', N'0128132611',N'thinguyen99@gmail.com', N'Huyện Hoà Xuân, TP Đà Nẵng'),
	 (N'Công', N'0905132616',N'congnguyen1999@gmail.com', N'Quận 1, TP Hồ Chí Minh'),
	 (N'Bảo Anh', N'0121132684',N'maybaoanh@gmail.com', N'Quận 7, Bình Dương'),
	 (N'Phúc', N'0122138597',N'phucnguyen@gmail.com', N'38 Yên Bái, TP Đà Nẵng');
	
	
GO


set dateformat dmy
INSERT INTO  [dbo].[Customers]
(
	[FirstName], 
	[LastName], 
	[PhoneNumber], 
	[Email], 
	[Address], 
	[Birthday]
)
VALUES
	 (N'Huỳnh', N'Hậu',N'0795134581', N'hau12345@gmail.com', N'Quảng Nam','27/02/2002'),
	 (N'Hữu', N'Hoà', N'0122138597', N'hoa12345@gmail.com', N'Đà Nẵng','16/06/2002'),
	 (N'Đức', N'Kiên', N'0795125768',N'kien12578@gmail.com', N'Nghệ An','11/03/2002'),
	 (N'Nguyễn', N'Chung', N'0165132680',N'chung1309@gmail.com', N'Quảng Nam','13/09/2002'),
	 (N'Kiều', N'Diểm', N'0769132612',N'diemnguyen@gmail.com', N'Hồ Chí Minh','16/03/2002'),
	 (N'Thanh', N'Hương', N'0869222613',N'huongphan@gmail.com', N'Bình Dương','13/05/2001'),
	 (N'Minh', N'Thi', N'0128132611',N'thinguyen99@gmail.com', N'Long Khánh','05/05/2000'),
	 (N'Văn', N'Công', N'0905132616',N'congnguyen1999@gmail.com', N'Quảng Bình','26/09/1999'),
	 (N'Bảo', N'Anh', N'0121132684',N'maybaoanh@gmail.com', N'Hà Tĩnh','04/08/2000'),
	 (N'Đức', N'Phúc', N'0795132686', N'phucnguyen@gmail.com', N'TP Vinh','29/09/2002');

GO


set dateformat dmy
INSERT INTO  [dbo].[Employees]
(
	[FirstName], 
	[LastName], 
	[Email], 
	[PhoneNumber], 
	[Address], 
	[Birthday]
)
VALUES
	 (N'Huỳnh', N'Hậu',N'hauuu123456@gmail.com', 0795134588,  N'Quảng Nam','27/02/2002'),
	 (N'Hữu', N'Hoà1',N'hoa123456@gmail.com', 0122138597,  N'Đà Nẵng','16/06/2002'),
	 (N'Đức', N'Kiên1',N'kien125789@gmail.com', 0795125768, N'Nghệ An','11/03/2002'),
	 (N'Nguyễn', N'Chung1', N'chung13092001@gmail.com', 0165132680, N'Quảng Nam','13/09/2002'),
	 (N'Kiều', N'Diểm1',N'diemnguyen123@gmail.com', 0769132612, N'Hồ Chí Minh','16/03/2002'),
	 (N'Thanh', N'Hương1', N'huongphan2345@gmail.com', 0869222613, N'Bình Dương','13/05/2001'),
	 (N'Minh', N'Thi1', N'thinguyen999@gmail.com', 0128132611, N'Long Khánh','05/05/2000'),
	 (N'Văn', N'Công1', N'congnguyen1998@gmail.com', 0905132616, N'Quảng Bình','26/09/1999'),
	 (N'Bảo', N'Anh1', N'maybaoanh2020@gmail.com', 0121132684, N'Hà Tĩnh','04/08/2000'),
	 (N'Đức', N'Phúc1', N'phucnguyen789@gmail.com', 0795132686, N'TP Vinh','29/09/2002');

GO

INSERT INTO  [dbo].[Products]
(
	[Name], 
	[Price], 
	[Discount], 
	[Stock], 
	[Description], 
	[CategoryId], 
	[SupplierId]
)
VALUES
	(N'Máy chiếu_H', 150.000, 5, 5.00, N'Máy chiếu LG', 1, 6),
	(N'Máy in_H', 150.000, 5, 5.00, N'Máy in LG', 1, 6),
	(N'Quần áo_H', 150.000, 60, 5.00, N'Quần áo Quảng Châu', 1, 6),
	(N'Máy tính_H', 15.000, 30, 7.00, N'Máy tính xách tay', 1, 2),
	(N'Micro_H', 3.000, 10, 2.00, N'Microphone thu âm', 1, 1),
	(N'Tivi_H', 900.000, 30, 5.00, N'Tivi Panasonic', 1, 6),
	(N'Bánh đậu xanh_H', 22.000, 10, 4.00, N'Bánh đậu xanh Rồng Vàng', 1, 2),
	(N'Trà Sữa_H', 35.000, 5, 5.00, N'Trà sữa Bông', 1, 1),
	(N'Balo_H', 680.000, 5, 5.00, N'Balo TokyoLife', 1, 2),
	(N'Đồng hồ thông minh_H', 200.000, 20, 4.00, N'ĐHTM Samsung Galaxy Watch5 ', 1, 6),
	(N'Chuột_H', 360.000, 20, 5.00, N'Chuột không dây', 1,2);

GO
select * from [dbo].[Products] where Name like '%_H%'

set dateformat dmy
INSERT INTO  [dbo].[Orders]
(
	[CreatedDate], 
	[ShippedDate], 
	[Status], 
	[Description], 
	[ShippingAddress], 
	[ShippingCity], 
	[PaymentType], 
	[CustomerId], 
	[EmployeeId]
)
VALUES
	 (N'2023-04-05 21:17:09.177', N'2023-04-10 00:00:00.000',N'COMPLETED', N'Hoàn Thành',  N'Hoán Mỹ', N'Đại Lộc', N'CASH', 1, 1),
	 (N'2023-05-05 21:17:09.133', N'2023-06-10 00:00:00.000',N'WAITING', N'Đang giao',  N'Duy Vinh', N'Duy Xuyên', N'CASH', 1, 2),
	 (N'2023-04-03 21:17:09.111', N'2023-06-10 00:00:00.000',N'CANCELED', N'Huỷ đơn',  N'NULL', N'Bình Dương', N'CASH', N'2', N'2'),
	 (N'2023-07-06 21:17:09.99', N'2023-08-07 00:00:00.000',N'COMPLETED', N'Hoàn thành',  N'Điện Bàn', N'Quảng Nam', N'CASH', 3, 3),
	 (N'2023-06-06 21:17:09.12', N'2023-06-10 00:00:00.000',N'CANCELED', N'Huỷ đơn',  N'NULL', N'Quảng Bình', N'CASH', 1, 3),
	 (N'2023-05-12 21:17:09.09', N'2023-06-12 00:00:00.000',N'CANCELED', N'Huỷ đơn',  N'NULL', N'Quảng Ngãi', N'CASH', 1, 2),
	 (N'2023-01-11 21:17:09.22', N'2023-01-12 00:00:00.011',N'COMPLETED', N'Hoàn thành',  N'Điện An', N'Điện Bàn', N'CASH', 1, 3),
	 (N'2023-05-09 21:17:09.133', N'2023-06-12 00:00:00.000',N'WAITING', N'Đang giao',  N'38 Yên Bái', N'Đà Nẵng', N'CASH', 2, 2),
	 (N'2023-01-10 21:17:09.22', N'2023-05-11 00:00:00.011',N'COMPLETED', N'Hoàn thành',  N'Điện Thọ', N'Điện Bàn', N'CASH', 3, 3),
	 (N'2023-05-03 21:17:09.133', N'2023-06-04 00:00:00.000',N'WAITING', N'Đang giao',  N'Hải Châu', N'Đà Nẵng', N'CASH', 1, 2);

	 GO

	 set dateformat dmy
INSERT INTO  [dbo].[OrderDetails]
(
	[OrderId],
	[ProductId], 
	[Quantity], 
	[Price], 
	[Discount]
)
VALUES
	(1360, 1968, 30.00, 50.00, 5.00),
	(1363, 1969, 20.00, 60.00, 1.00),
	(1368, 1970, 30.00, 70.00, 2.00),
	(1369, 1971, 30.00, 70.00, 3.00),
	(1370, 1972, 30.00, 80.00, 4.00),
	(1371, 1973, 30.00, 70.00, 5.00),
	(1372, 1974, 30.00, 80.00, 7.00),
	(1373, 1975, 10.00, 70.00, 1.00),
	(1374, 1976, 30.00, 90.00, 2.00),
	(1375, 1977, 30.00, 100.00, 6.00);