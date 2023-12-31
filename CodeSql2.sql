USE [master]
GO
/****** Object:  Database [DB_Apartment2]    Script Date: 11/20/2023 11:22:04 PM ******/
CREATE DATABASE [DB_Apartment2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DB_Apartment2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DB_Apartment2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DB_Apartment2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\DB_Apartment2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [DB_Apartment2] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DB_Apartment2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DB_Apartment2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DB_Apartment2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DB_Apartment2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DB_Apartment2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DB_Apartment2] SET ARITHABORT OFF 
GO
ALTER DATABASE [DB_Apartment2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DB_Apartment2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DB_Apartment2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DB_Apartment2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DB_Apartment2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DB_Apartment2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DB_Apartment2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DB_Apartment2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DB_Apartment2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DB_Apartment2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DB_Apartment2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DB_Apartment2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DB_Apartment2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DB_Apartment2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DB_Apartment2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DB_Apartment2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DB_Apartment2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DB_Apartment2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DB_Apartment2] SET  MULTI_USER 
GO
ALTER DATABASE [DB_Apartment2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DB_Apartment2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DB_Apartment2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DB_Apartment2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DB_Apartment2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DB_Apartment2] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [DB_Apartment2] SET QUERY_STORE = ON
GO
ALTER DATABASE [DB_Apartment2] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [DB_Apartment2]
GO
/****** Object:  Table [dbo].[Apartments]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Apartments](
	[id] [int] NOT NULL,
	[apartmentName] [nvarchar](255) NULL,
	[phoneNumber1] [nvarchar](50) NULL,
	[phoneNumber2] [nvarchar](50) NULL,
	[address] [nvarchar](50) NULL,
	[property] [nvarchar](255) NULL,
	[description] [nvarchar](255) NULL,
	[size] [int] NULL,
	[active] [bit] NULL,
	[createTime] [date] NULL,
	[userID] [int] NULL,
	[imgUrl] [nvarchar](255) NULL,
 CONSTRAINT [PK_Apartments] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Bills]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Bills](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[roomID] [int] NULL,
	[numberOfPeople] [int] NULL,
	[oldElectricityNumber] [int] NULL,
	[newElectricityNumber] [int] NULL,
	[amountOfElectricityUsed] [int] NULL,
	[priceOfElectricity] [float] NULL,
	[totalElectricity] [float] NULL,
	[oldWaterNumber] [int] NULL,
	[newWaterNumber] [int] NULL,
	[amountOfWaterUsed] [int] NULL,
	[priceOfWater] [float] NULL,
	[waterBill] [nchar](10) NULL,
	[totalWater] [float] NULL,
	[totalInternet] [float] NULL,
	[totalTrash] [float] NULL,
	[totalBill] [float] NULL,
 CONSTRAINT [PK_Bills] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NULL,
	[postID] [int] NULL,
	[parent_cmtID] [int] NULL,
	[reply_level] [int] NULL,
	[comment] [nvarchar](50) NULL,
	[createTime] [date] NULL,
	[updateTime] [date] NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Fees]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Fees](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[apartID] [int] NULL,
	[priceOfElectricity] [float] NULL,
	[priceOfWater] [float] NULL,
	[priceOfTrash] [float] NULL,
	[priceOfInternet] [float] NULL,
	[waterBill] [float] NULL,
 CONSTRAINT [PK_Fees] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Imgs]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Imgs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[url_img] [nvarchar](255) NULL,
 CONSTRAINT [PK_Imgs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Posts]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Posts](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NULL,
	[title] [nvarchar](255) NULL,
	[apartmentName] [nvarchar](50) NULL,
	[phoneNumber1] [nvarchar](50) NULL,
	[phoneNumbe2] [nvarchar](50) NULL,
	[address] [nvarchar](50) NULL,
	[property] [nvarchar](50) NULL,
	[description] [nvarchar](50) NULL,
	[size] [int] NULL,
	[url_img] [nvarchar](255) NULL,
	[createTime] [date] NULL,
	[updateTime] [date] NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Problems]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Problems](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[roomID] [int] NULL,
	[problem] [nvarchar](255) NULL,
	[createTime] [date] NULL,
	[updateTime] [date] NULL,
	[fix] [bit] NULL,
 CONSTRAINT [PK_Problems] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[role] [nvarchar](50) NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rooms]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rooms](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[apartID] [int] NULL,
	[room_name] [nvarchar](50) NULL,
	[sizeOfRoom] [int] NULL,
	[numberOfRenter] [int] NULL,
	[description] [nvarchar](255) NULL,
	[priceOfRoom] [float] NULL,
	[createTime] [date] NULL,
	[updateTime] [date] NULL,
	[active] [bit] NULL,
	[type] [nvarchar](50) NULL,
 CONSTRAINT [PK_Rooms] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Rooms_Imgs]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Rooms_Imgs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[roomID] [int] NULL,
	[imgID] [int] NULL,
 CONSTRAINT [PK_Rooms_Imgs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[roleID] [int] NULL,
	[username] [nvarchar](50) NULL,
	[password] [nvarchar](255) NULL,
	[fullName] [nvarchar](50) NULL,
	[phone] [nvarchar](50) NULL,
	[email] [nvarchar](50) NULL,
	[address] [nvarchar](255) NULL,
	[CCCD] [nvarchar](50) NULL,
	[avatar] [nvarchar](255) NULL,
	[createTime] [date] NULL,
	[updateTime] [date] NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users_Roles]    Script Date: 11/20/2023 11:22:04 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users_Roles](
	[id] [int] NOT NULL,
	[userID] [int] NULL,
	[roleID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Users_Roles] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Apartments]  WITH CHECK ADD  CONSTRAINT [FK_Apartments_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Apartments] CHECK CONSTRAINT [FK_Apartments_Users]
GO
ALTER TABLE [dbo].[Bills]  WITH CHECK ADD  CONSTRAINT [FK_Bills_Rooms] FOREIGN KEY([roomID])
REFERENCES [dbo].[Rooms] ([id])
GO
ALTER TABLE [dbo].[Bills] CHECK CONSTRAINT [FK_Bills_Rooms]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Comments] FOREIGN KEY([parent_cmtID])
REFERENCES [dbo].[Comments] ([id])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Comments]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Posts] FOREIGN KEY([postID])
REFERENCES [dbo].[Posts] ([id])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Posts]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Users]
GO
ALTER TABLE [dbo].[Fees]  WITH CHECK ADD  CONSTRAINT [FK_Fees_Apartments] FOREIGN KEY([apartID])
REFERENCES [dbo].[Apartments] ([id])
GO
ALTER TABLE [dbo].[Fees] CHECK CONSTRAINT [FK_Fees_Apartments]
GO
ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_Users]
GO
ALTER TABLE [dbo].[Problems]  WITH CHECK ADD  CONSTRAINT [FK_Problems_Rooms] FOREIGN KEY([roomID])
REFERENCES [dbo].[Rooms] ([id])
GO
ALTER TABLE [dbo].[Problems] CHECK CONSTRAINT [FK_Problems_Rooms]
GO
ALTER TABLE [dbo].[Rooms]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_Apartments] FOREIGN KEY([apartID])
REFERENCES [dbo].[Apartments] ([id])
GO
ALTER TABLE [dbo].[Rooms] CHECK CONSTRAINT [FK_Rooms_Apartments]
GO
ALTER TABLE [dbo].[Rooms_Imgs]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_Imgs_Imgs] FOREIGN KEY([imgID])
REFERENCES [dbo].[Imgs] ([id])
GO
ALTER TABLE [dbo].[Rooms_Imgs] CHECK CONSTRAINT [FK_Rooms_Imgs_Imgs]
GO
ALTER TABLE [dbo].[Rooms_Imgs]  WITH CHECK ADD  CONSTRAINT [FK_Rooms_Imgs_Rooms] FOREIGN KEY([roomID])
REFERENCES [dbo].[Rooms] ([id])
GO
ALTER TABLE [dbo].[Rooms_Imgs] CHECK CONSTRAINT [FK_Rooms_Imgs_Rooms]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Roles] FOREIGN KEY([roleID])
REFERENCES [dbo].[Roles] ([id])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Roles]
GO
ALTER TABLE [dbo].[Users_Roles]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_Users] FOREIGN KEY([userID])
REFERENCES [dbo].[Users] ([id])
GO
ALTER TABLE [dbo].[Users_Roles] CHECK CONSTRAINT [FK_Users_Roles_Users]
GO
USE [master]
GO
ALTER DATABASE [DB_Apartment2] SET  READ_WRITE 
GO
