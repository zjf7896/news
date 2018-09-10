-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-04 07:30:47
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- 表的结构 `category`
--
DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `is_default` varchar(255) CHARACTER SET utf8 NOT NULL,   -- 1代表显示  0 代表不显示
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

INSERT INTO `category` (`id`,`name`,`is_default`) VALUES
(1, '推荐', '1'),
(2, '社会', '1'),
(3, '娱乐', '1'),
(4, '科技', '1'),
(5, '汽车', '1'),
(6, '体育', '1'),
(7, '财经', '1'),
(8, '军事', '1'),
(9, '美文', '1'),
(10, '故事', '1'),
(11, '热点', '0'),
(12, '国际', '0'),
(13, '时尚', '0'),
(14, '游戏', '0'),
(15, '旅游', '0'),
(16, '历史', '0'),
(17, '探索', '0'),
(18, '美食', '0'),
(19, '育儿', '0'),
(20, '养生', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
