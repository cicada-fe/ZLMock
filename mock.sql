/*
 Navicat Premium Data Transfer

 Source Server         : localHost
 Source Server Type    : MySQL
 Source Server Version : 50713
 Source Host           : localhost
 Source Database       : mock

 Target Server Type    : MySQL
 Target Server Version : 50713
 File Encoding         : utf-8

 Date: 06/23/2016 15:46:03 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `path`
-- ----------------------------
DROP TABLE IF EXISTS `path`;
CREATE TABLE `path` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` int(11) DEFAULT '0',
  `path` varchar(255) NOT NULL,
  `responseData` varchar(255) NOT NULL,
  `lastModDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
