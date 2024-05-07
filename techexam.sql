-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2024 at 06:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sql6704663`
--

-- --------------------------------------------------------

--
-- Table structure for table `money_value`
--

CREATE TABLE `money_value` (
  `treasure_id` int(11) NOT NULL,
  `amt` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `money_value`
--

INSERT INTO `money_value` (`treasure_id`, `amt`) VALUES
(100, 15),
(101, 10),
(102, 15),
(103, 15),
(104, 10),
(105, 15),
(106, 15),
(107, 10),
(108, 15),
(109, 15),
(110, 10),
(111, 15),
(112, 15),
(113, 10),
(114, 15),
(115, 15),
(116, 10),
(117, 15),
(100, 20),
(101, 25),
(102, 20),
(103, 25),
(107, 30),
(108, 30),
(109, 30);

-- --------------------------------------------------------

--
-- Table structure for table `treasures`
--

CREATE TABLE `treasures` (
  `id` int(11) NOT NULL,
  `latitude` decimal(20,16) NOT NULL,
  `longitude` decimal(20,16) NOT NULL,
  `Name` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `treasures`
--

INSERT INTO `treasures` (`id`, `latitude`, `longitude`, `Name`) VALUES
(100, 14.5437648051331000, 121.0199116783110000, 'T1'),
(101, 14.5532076554883000, 121.0557745324210000, 'T2'),
(102, 14.5446435656183000, 121.0203656298710000, 'T3'),
(103, 14.5872615919051000, 120.9795047946550000, 'T4'),
(104, 14.5732032723718000, 121.0230903761560000, 'T5'),
(105, 14.5231131289849000, 121.0194573195160000, 'T6'),
(106, 14.6024229153284000, 121.0115133789390000, 'T7'),
(107, 14.6085746293116000, 121.0185513957940000, 'T8'),
(108, 14.4911143426092000, 121.0437482061970000, 'T9'),
(109, 14.5445595272478000, 121.1060882822340000, 'T10'),
(110, 14.5879814117365000, 121.0582080297630000, 'T11'),
(111, 14.5488649285797000, 121.0336392975500000, 'T12'),
(112, 14.5371505894201000, 120.9904302379150000, 'T13'),
(113, 14.5257966600328000, 121.0208688441030000, 'T14'),
(114, 14.5170998780454000, 120.9810021062010000, 'T15'),
(115, 14.5020068710580000, 120.9916181275340000, 'T16'),
(116, 14.5211244090490000, 121.0427713687040000, 'T17'),
(117, 14.4772076562187000, 120.9867927240640000, 'T18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` int(20) NOT NULL,
  `age` int(3) NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `age`, `password`, `email`) VALUES
(3000, 0, 21, '123123', 'u1@kitra.abc'),
(3001, 0, 51, '234234', 'u2@kitra.abc'),
(3002, 0, 31, '345345', 'u3@kitra.abc'),
(3003, 0, 18, '456456', 'u4@kitra.abc'),
(3004, 0, 21, '567567', 'u5@kitra.abc'),
(3005, 0, 35, '678678', 'u6@kitra.abc');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `treasures`
--
ALTER TABLE `treasures`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `treasures`
--
ALTER TABLE `treasures`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3006;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
