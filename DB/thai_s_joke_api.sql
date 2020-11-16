-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2020 at 10:57 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thai's joke api`
--

-- --------------------------------------------------------

--
-- Table structure for table `joke`
--

CREATE TABLE `joke` (
  `joke_id` int(11) NOT NULL,
  `joke_name` varchar(100) DEFAULT NULL,
  `like` int(1) DEFAULT 0,
  `dislike` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `joke`
--

INSERT INTO `joke` (`joke_id`, `joke_name`, `like`, `dislike`) VALUES
(1, 'ตลกไว้ก่อนพ่อสอนไว้', 0, 0),
(2, 'ตลกไว้ก่อนพ่อสอนไว้0', 1, 0),
(3, 'ตลกไว้ก่อนพ่อสอนไว้1', 0, 1),
(4, 'ตลกไว้ก่อนพ่อสอนไว้2', 1, 0),
(5, 'ตลกไว้ก่อนพ่อสอนไว้3', 0, 1),
(6, 'ตลกไว้ก่อนพ่อสอนไว้4', 1, 0),
(7, 'ตลกไว้ก่อนพ่อสอนไว้5', 0, 1),
(8, 'ตลกไว้ก่อนพ่อสอนไว้6', 1, 0),
(9, 'ตลกไว้ก่อนพ่อสอนไว้7', 0, 1),
(10, 'ตลกไว้ก่อนพ่อสอนไว้8', 1, 0),
(11, 'ตลกไว้ก่อนพ่อสอนไว้9', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `no` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`no`, `fname`, `lname`, `username`, `password`, `status`) VALUES
(1, 'กุ๊กไก่', 'นะจ๊ะ', '123', '$2b$10$pTevmd6sqt8Kt9bqdV2Eg.o.YtvT1VObPTJrfU2HlLfpqRLCMSjPq', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `joke`
--
ALTER TABLE `joke`
  ADD PRIMARY KEY (`joke_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `joke`
--
ALTER TABLE `joke`
  MODIFY `joke_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
