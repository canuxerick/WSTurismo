/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.1.9-MariaDB : Database - db_turismo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_turismo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_turismo`;

/*Table structure for table `foto` */

DROP TABLE IF EXISTS `foto`;

CREATE TABLE `foto` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `archivo` varchar(255) NOT NULL,
  `idFoto` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `foto` */

/*Table structure for table `hotel` */

DROP TABLE IF EXISTS `hotel`;

CREATE TABLE `hotel` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `lugar` int(10) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `hotel` */

/*Table structure for table `lugar` */

DROP TABLE IF EXISTS `lugar`;

CREATE TABLE `lugar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `lugar` */

insert  into `lugar`(`id`,`nombre`) values (1,'go'),(2,'hello'),(3,'heo'),(4,'aklñsfj');

/*Table structure for table `region` */

DROP TABLE IF EXISTS `region`;

CREATE TABLE `region` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `region` */

/*Table structure for table `tipo` */

DROP TABLE IF EXISTS `tipo`;

CREATE TABLE `tipo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tipo` */

/*Table structure for table `usuario` */

DROP TABLE IF EXISTS `usuario`;

CREATE TABLE `usuario` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `usuario` */

insert  into `usuario`(`id`,`usuario`,`nombre`,`correo`,`password`) values (1,'eCanux','hola','erick@gmail.com','202cb962ac59075b964b07152d234b70'),(2,'erick','Catalino','catalino@gmail.com','81dc9bdb52d04dc20036dbd8313ed055'),(3,'hola','hola','hola@hola.hola','hola'),(4,'erick','Catalino','catalino@gmail.com','81dc9bdb52d04dc20036dbd8313ed055'),(5,'undefined','undefined','undefined','5e543256c480ac577d30f76f9120eb74'),(6,'hola1','hola1','hola@hola.com','5e543256c480ac577d30f76f9120eb74'),(7,'hola1','hola1','hola@hola.com','2e80a184267270fc8a50f3f9aef3902e'),(8,'david','Elvis','preuba@gmail.com','202cb962ac59075b964b07152d234b70'),(9,'hola1','juan','hola@gajksk.d','2e80a184267270fc8a50f3f9aef3902e');

/* Procedure structure for procedure `listarUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `listarUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `listarUsuario`()
BEGIN
		SELECT usua.usuario AS usuario, usua.nombre AS nombre, usua.correo AS correo
		FROM usuario AS usua;
	END */$$
DELIMITER ;

/* Procedure structure for procedure `loginUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `loginUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `loginUsuario`(IN _usuario VARCHAR(50),IN _password VARCHAR(255))
BEGIN
	SELECT usuario,nombre,correo FROM usuario WHERE usuario.`usuario`=_usuario AND usuario.`password`=MD5(_password);
    END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
