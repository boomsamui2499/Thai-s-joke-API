-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2020 at 05:35 PM
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
-- Database: `testnodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_person`
--

CREATE TABLE `contact_person` (
  `Contact_person_id` int(100) NOT NULL,
  `First_name` varchar(50) DEFAULT NULL,
  `Last_name` varchar(50) DEFAULT NULL,
  `Relationship` varchar(20) DEFAULT NULL,
  `Telephone` int(10) DEFAULT NULL,
  `ID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_person`
--

INSERT INTO `contact_person` (`Contact_person_id`, `First_name`, `Last_name`, `Relationship`, `Telephone`, `ID`) VALUES
(1, 'วสันต์', 'มานะเวทย์', 'บิดา', 102030405, 1),
(2, 'มานี', 'มานะเวทย์', 'มารดา', 987654321, 1);

-- --------------------------------------------------------

--
-- Table structure for table `medical_information`
--

CREATE TABLE `medical_information` (
  `Medical_ID` int(100) NOT NULL,
  `Blood` varchar(5) DEFAULT NULL,
  `Be_allergic` text DEFAULT NULL,
  `Disease_Identity` text DEFAULT NULL,
  `History_surgery` text DEFAULT NULL,
  `Pregnant` int(1) DEFAULT 0,
  `Routine_medication` text DEFAULT NULL,
  `Injured` int(1) DEFAULT 0,
  `Exercise` int(1) DEFAULT 0,
  `Pain_during_exercise` int(1) DEFAULT 0,
  `ID` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `medical_information`
--

INSERT INTO `medical_information` (`Medical_ID`, `Blood`, `Be_allergic`, `Disease_Identity`, `History_surgery`, `Pregnant`, `Routine_medication`, `Injured`, `Exercise`, `Pain_during_exercise`, `ID`) VALUES
(1, 'A', 'ไม่มี', 'ไม่มี', 'ไม่มี', 0, 'ไม่มี', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `member_info`
--

CREATE TABLE `member_info` (
  `ID` int(100) NOT NULL,
  `Prefix` varchar(10) DEFAULT NULL,
  `FirstName_th` varchar(50) DEFAULT NULL,
  `LastName_th` varchar(50) DEFAULT NULL,
  `FirstName_en` varchar(50) DEFAULT NULL,
  `LastName_en` varchar(50) DEFAULT NULL,
  `Birthday` date DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `ID_card` varchar(13) DEFAULT NULL,
  `Address` text DEFAULT NULL,
  `Telephone` int(10) DEFAULT NULL,
  `Image` varchar(30) DEFAULT NULL,
  `Number_BIB` int(10) DEFAULT NULL,
  `Running_id` int(100) NOT NULL,
  `Run_Time` time(6) DEFAULT NULL,
  `Size` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member_info`
--

INSERT INTO `member_info` (`ID`, `Prefix`, `FirstName_th`, `LastName_th`, `FirstName_en`, `LastName_en`, `Birthday`, `Email`, `ID_card`, `Address`, `Telephone`, `Image`, `Number_BIB`, `Running_id`, `Run_Time`, `Size`) VALUES
(1, 'นาย', 'ทศวรรษ', 'มานะเวทย์', 'Tossawat', 'Manaweat', '1997-12-20', 'boom_manawat@hotmail.com', '1234567891234', '1/1 ม.3', 123456789, 'image.jpg', 1, 1, '30:10:00.000000', 'XL');

-- --------------------------------------------------------

--
-- Table structure for table `running`
--

CREATE TABLE `running` (
  `Running_id` int(100) NOT NULL,
  `Run_name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `running`
--

INSERT INTO `running` (`Running_id`, `Run_name`) VALUES
(1, 'Mini Marathon'),
(2, 'Half Marathon'),
(3, 'Full Marathon');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `no` int(10) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`no`, `fname`, `lname`, `username`, `password`) VALUES
(1, 'บูม', 'สมุย', '1234', 1234);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_person`
--
ALTER TABLE `contact_person`
  ADD PRIMARY KEY (`Contact_person_id`),
  ADD KEY `ID` (`ID`);

--
-- Indexes for table `medical_information`
--
ALTER TABLE `medical_information`
  ADD PRIMARY KEY (`Medical_ID`),
  ADD KEY `ID` (`ID`);

--
-- Indexes for table `member_info`
--
ALTER TABLE `member_info`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `Running_id` (`Running_id`);

--
-- Indexes for table `running`
--
ALTER TABLE `running`
  ADD PRIMARY KEY (`Running_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_person`
--
ALTER TABLE `contact_person`
  MODIFY `Contact_person_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `medical_information`
--
ALTER TABLE `medical_information`
  MODIFY `Medical_ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `member_info`
--
ALTER TABLE `member_info`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `running`
--
ALTER TABLE `running`
  MODIFY `Running_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `no` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `contact_person`
--
ALTER TABLE `contact_person`
  ADD CONSTRAINT `contact_person_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `member_info` (`ID`);

--
-- Constraints for table `medical_information`
--
ALTER TABLE `medical_information`
  ADD CONSTRAINT `medical_information_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `member_info` (`ID`);

--
-- Constraints for table `member_info`
--
ALTER TABLE `member_info`
  ADD CONSTRAINT `member_info_ibfk_1` FOREIGN KEY (`Running_id`) REFERENCES `running` (`Running_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
