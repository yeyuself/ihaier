-- phpMyAdmin SQL Dump
-- version 3.2.0.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 06 月 15 日 09:40
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- 数据库: `haier`
--

-- --------------------------------------------------------

--
-- 表的结构 `bingxiang`
--

CREATE TABLE IF NOT EXISTS `bingxiang` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `bingxiang`
--

INSERT INTO `bingxiang` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn21.ehaier.com/file/59a3ac4a58e116c813cc0c73.png', '470升全空间保鲜十字对开', '￥4699.00'),
(2, 'http://cdn21.ehaier.com/file/5a12b1a2b70259571863c3cf.png', '335升法式彩晶变频多门', '￥3799.00'),
(3, 'http://cdn22.ehaier.com/file/5a7034fcfac038c4b9c76451.png', '258升干湿分储静谧金', '￥2899.00'),
(4, 'http://cdn22.ehaier.com/file/5b04dd08fac04b66d0b403dd.png', '卡萨帝629升十字对开', '￥9999.00'),
(5, 'http://cdn21.ehaier.com/file/5a6acd69b702e15fd420a18e.png', '651升全空间保鲜对开门', '￥5699.00'),
(6, 'http://cdn22.ehaier.com/file/5b04dd42b702481a6ffe2986.png', '440升全空间保鲜四门冰箱', '￥5299.00'),
(7, 'http://cdn22.ehaier.com/file/59a3adc758e116c813cc0c76.png', '329升静谧金全空间保鲜', '￥3599.00'),
(8, 'http://cdn21.ehaier.com/file/5b04de1258e1284453bd8213.png', '531升智能十字对开双变频冰箱', '￥4799.00');

-- --------------------------------------------------------

--
-- 表的结构 `caidian`
--

CREATE TABLE IF NOT EXISTS `caidian` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `caidian`
--

INSERT INTO `caidian` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn22.ehaier.com/file/5b0bbb203e7e48ffc5a22dc1.png', '42英寸海尔幼儿教育电视', '￥1699.00'),
(2, 'http://cdn21.ehaier.com/file/5b0bba73fac04b66d0b404ee.png', '55英寸海尔幼儿教育电视 ', '￥3299.00'),
(3, 'http://cdn22.ehaier.com/file/5b0bb9d0b702481a6ffe2aa0.png', '65英寸海尔幼儿教育电视', '￥6599.00'),
(4, 'http://cdn21.ehaier.com/file/5b0bb92dfac04b66d0b404eb.png', '55吋海尔幼儿教育电视 ', '￥4299.00'),
(5, 'http://cdn22.ehaier.com/file/5b0bb797b702481a6ffe2a9d.png', ' 55英寸4K超高清液晶电视机', '￥3999.00'),
(6, 'http://cdn21.ehaier.com/file/5b0bb5eefac04b66d0b404e8.png', '65英寸超高清人工智能电视机', '￥3999.00'),
(7, 'http://cdn22.ehaier.com/file/5b0bb522b702481a6ffe2a9a.png', '75英寸超高清屏大智能网络电视机', '￥10999.00'),
(8, 'http://cdn22.ehaier.com/file/5b0bb4cf3e7e48ffc5a22dbe.png', '50英寸超高清网络智能电视机', '￥1999.00');

-- --------------------------------------------------------

--
-- 表的结构 `chudian`
--

CREATE TABLE IF NOT EXISTS `chudian` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `chudian`
--

INSERT INTO `chudian` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn21.ehaier.com/file/5b066b05b702481a6ffe29f3.png', '灵动自开合烟机+高效猛火燃气灶', '￥2499.00'),
(2, 'http://cdn22.ehaier.com/file/5a27b8d9fac0e65bc7ccbfff.png', '智能自净芯烟机+智能防干烧灶具', '￥4999.00'),
(3, 'http://cdn21.ehaier.com/file/5a27b9c33e7e0bb70d7d247d.png', '自净芯烟机+大火力灶具', '￥2299.00'),
(4, 'http://cdn21.ehaier.com/file/5a27bb323e7e0bb70d7d2480.png', '自净芯自清洗+大火力鸳鸯灶', '￥2099.00'),
(5, 'http://cdn21.ehaier.com/file/5b0667affac04b66d0b40446.png', '海尔顶吸式自清洗吸油烟机', '￥3599.00'),
(6, 'http://cdn22.ehaier.com/file/5b0668f8b702481a6ffe29f0.png', '4.5KW大火力防干烧燃气灶', '￥2499.00'),
(7, 'http://cdn22.ehaier.com/file/59a3ba2458e116c813cc0c9d.png', '巴氏光波、纯物理消毒', '￥1899.00'),
(8, 'http://cdn21.ehaier.com/file/59a3bb02fac0ebbd61bece16.png', '一体集成，烟灶联动', '￥7599.00');

-- --------------------------------------------------------

--
-- 表的结构 `everyone`
--

CREATE TABLE IF NOT EXISTS `everyone` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL COMMENT '链接',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `price` varchar(10) NOT NULL COMMENT '价格',
  `appraise` varchar(100) NOT NULL COMMENT '评价',
  `time` varchar(10) NOT NULL COMMENT '时间',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `everyone`
--

INSERT INTO `everyone` (`sid`, `url`, `title`, `price`, `appraise`, `time`) VALUES
(2, 'http://cdn21.ehaier.com/file/5b0e0f873e7e48ffc5a22dff.png', 'LS65A51  65英寸超高清人工智能电视机', '￥3999.00', '电视美美哒，攒劲的很，超值', '2018-05-28'),
(3, 'http://cdn22.ehaier.com/file/5b0e0f25b702481a6ffe2af0.png', 'JSQ25-13WD6(12T) 13升专利CO安防家用燃气热水器', '￥2199.00', '比想象中的要好.恒温效果棒棒的.这个价格买到这么好的机器值得.外观高大尚.海尔大品牌值得信赖', '2018-05-26'),
(4, 'http://cdn21.ehaier.com/file/5b0e0f5afac04b66d0b40540.png', 'KFR-72LW/22HBA22AU1套机 3匹瑶光自清洁智能空调/二级能效/节能省电', '￥7299.00', '空调外观漂亮，大气，物流师傅态度好，非常满意', '2018-05-16'),
(5, 'http://cdn21.ehaier.com/file/5b0e0ea8b702481a6ffe2aed.png', 'BCD-651WDEC 651升对开门双变频风冷无霜彩晶面板节能冰箱', '￥5699.00', '冰箱收到非常满意 外观很漂亮 全家都喜欢', '2018-05-28'),
(6, 'http://cdn21.ehaier.com/file/5b0e0ee53e7e48ffc5a22dfc.png', 'EG8014HB88LGU1 8公斤直驱变频洗烘一体滚筒洗衣机', '￥5499.00', '体积不大不小正好，静音，烘干，颜色也好看。', '2018-04-26'),
(7, 'http://cdn22.ehaier.com/file/5b0e0fb0b702481a6ffe2af3.png', '集成灶JE9C天然气/4.2KW/4合一', '￥7599.00', '物流很快服务态度也很好，产品包装很好', '2018-04-24');

-- --------------------------------------------------------

--
-- 表的结构 `jiadian`
--

CREATE TABLE IF NOT EXISTS `jiadian` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `jiadian`
--

INSERT INTO `jiadian` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn22.ehaier.com/file/59a3be85fac0ebbd61bece28.png', '6级吸附过滤空气净化器', '￥999.00'),
(2, 'http://cdn21.ehaier.com/file/59a3be98fac0ebbd61bece2b.png', '恒温即热智能洁身器', '￥2099.00'),
(3, 'http://cdn22.ehaier.com/file/5a0c1b16b70259571863c34e.png', '美国陶氏RO膜，智能WiFi', '￥1499.00'),
(4, 'http://cdn21.ehaier.com/file/59a3bfa73e7e45ae86e06594.png', '5L精准烹饪电压力锅', '￥399.00'),
(5, 'http://cdn22.ehaier.com/file/5a13fd2afac0e37eb4b1cce4.png', '2000W快速熨烫；10档清新护理', '￥258.00'),
(6, 'http://cdn22.ehaier.com/file/5a13fce5fac0e37eb4b1cce1.png', '新品家用蒸汽挂烫机手持式熨斗烫衣服', '￥198.00'),
(7, 'http://cdn21.ehaier.com/file/5a0c1b49b70259571863c351.png', '无桶大通量，无泵静音', '￥1298.00'),
(8, 'http://cdn21.ehaier.com/file/5ac9f83efac0f6c70c9d713b.png', '海尔施特劳斯净水机', '￥6999.00');

-- --------------------------------------------------------

--
-- 表的结构 `jingpin`
--

CREATE TABLE IF NOT EXISTS `jingpin` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL COMMENT '标题',
  `url` varchar(999) NOT NULL COMMENT '图片链接',
  `price` varchar(10) NOT NULL COMMENT '价格',
  `discounts` varchar(20) NOT NULL COMMENT '优惠',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- 转存表中的数据 `jingpin`
--

INSERT INTO `jingpin` (`sid`, `title`, `url`, `price`, `discounts`) VALUES
(1, '572升变频风冷无霜对开门冰箱', 'http://cdn02.ehaier.com/product/5715e99757d79e6b6c8b4ae8_1200_1200.jpg,http://cdn02.ehaier.com/product/5b20925d1671c4b0128b4650_1200_1200.jpg,http://cdn02.ehaier.com/product/5715e99857d79e536c8b4b13_1200_1200.jpg,http://cdn02.ehaier.com/product/5715e99957d79e5d6c8b4acd_1200_1200.jpg,http://cdn02.ehaier.com/product/5715e99657d79e636c8b4afb_1200_1200.jpg,http://cdn02.ehaier.com/product/5715e99757d79e6b6c8b4ae8_1200_1200.jpg', '￥3299.00', '限量下单立减200元'),
(2, ' 2匹智能帝樽空调', 'http://cdn21.ehaier.com/file/5b1d3db43e7ed0c1908124ad.png', '￥4499.00', '下单立减50元'),
(3, '10公斤洗烘一体变频滚筒洗衣机', 'http://cdn21.ehaier.com/file/5b1d3df6fac0ddad19347f0b.png', '￥3699.00', '限量下单立减600元'),
(4, '50英寸超高清网络智能电视机', 'http://cdn22.ehaier.com/file/5b1116513e7e0ba13c9345e3.png', '￥1999.00', '限量下单立减100元'),
(5, '13升防风恒温家用燃气热水器', 'http://cdn22.ehaier.com/file/5b0fdc4758e1353d2837da55.png', '￥1899.00', '购买晒图赠好礼'),
(6, '灵动自开合+六翼涡流增氧', 'http://cdn22.ehaier.com/file/5b1d3f4b3e7ed0c1908124b0.png', '￥2499.00', '晒图评论赠料理机');

-- --------------------------------------------------------

--
-- 表的结构 `kongtiao`
--

CREATE TABLE IF NOT EXISTS `kongtiao` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `url` varchar(300) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `kongtiao`
--

INSERT INTO `kongtiao` (`sid`, `title`, `url`, `price`) VALUES
(1, '1.5匹海尔智能变频空调', 'http://cdn21.ehaier.com/file/5af01724fac0d058d4bd0daa.png', '￥2799.00'),
(2, '1.5匹内机自清洁挂式空调', 'http://cdn21.ehaier.com/file/5b091d2758e1284453bd82ee.png', '￥3399.00'),
(3, '1.5匹自清洁一级能效空调', 'http://cdn22.ehaier.com/file/5b064c08fac04b66d0b40427.png', '￥3799.00'),
(4, '2匹大风量挂式空调', 'http://cdn22.ehaier.com/file/5b091dd558e1284453bd82f1.png', '￥4299.00'),
(5, '卡萨帝天玺空调', 'http://cdn22.ehaier.com/file/5b07d4f6b702481a6ffe2a48.png', '￥36999.00'),
(6, '3匹变频一键自清洁', 'http://cdn22.ehaier.com/file/59a3b51358e116c813cc0c8e.png', '￥7299.00'),
(7, '2匹智能帝樽空调', 'http://cdn22.ehaier.com/file/59a3b637b7021e41193dae18.png', '￥4499.00'),
(8, '3匹云净变频空调', 'http://cdn21.ehaier.com/file/59a3b67db7021e41193dae1b.png', '￥7899.00');

-- --------------------------------------------------------

--
-- 表的结构 `lenggui`
--

CREATE TABLE IF NOT EXISTS `lenggui` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `lenggui`
--

INSERT INTO `lenggui` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn22.ehaier.com/file/5b064d1858e1284453bd8276.png', '102升彩晶低霜家用小冰柜冷藏冷冻转换柜', '￥1399.00'),
(2, 'http://cdn21.ehaier.com/file/5b065d57b702481a6ffe29e9.png', '331升圆弧玻璃门冷藏冷冻转换柜', '￥2399.00'),
(3, 'http://cdn21.ehaier.com/file/5b065b4ffac04b66d0b40433.png', '151升智能无霜立式冷柜', '￥3299.00'),
(4, 'http://cdn21.ehaier.com/file/5b065eeb3e7e48ffc5a22cf9.png', '518升大冷冻力商用大容量', '￥2999.00'),
(5, 'http://cdn21.ehaier.com/file/5b065c8158e1284453bd8279.png', '卡萨帝366升博芬系列酒柜', '￥10999.00'),
(6, 'http://cdn21.ehaier.com/file/59a3bbd5b7021e41193dae25.png', '52瓶精准控温酒柜', '￥2599.00'),
(7, 'http://cdn21.ehaier.com/file/59a3bbf0b7021e41193dae28.png', '242升高效节能冷藏展示柜', '￥1899.00'),
(8, 'http://cdn21.ehaier.com/file/59a3bc0cb7021e41193dae2b.png', '120升梯度变温冰吧', '￥2799.00');

-- --------------------------------------------------------

--
-- 表的结构 `lunbo`
--

CREATE TABLE IF NOT EXISTS `lunbo` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL COMMENT '链接',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `lunbo`
--

INSERT INTO `lunbo` (`sid`, `url`) VALUES
(1, 'http://cdn22.ehaier.com/file/5b1b59d5fac0ddad19347edf.png'),
(2, 'http://cdn21.ehaier.com/file/5b17c12db702ba97c868bcab.png'),
(3, 'http://cdn22.ehaier.com/file/5b1a4b02fac0ddad19347eca.png'),
(4, 'http://cdn21.ehaier.com/file/5abf403bfac0f6c70c9d7007.png'),
(5, 'http://cdn21.ehaier.com/file/5b16773bb702ba97c868bc6c.png');

-- --------------------------------------------------------

--
-- 表的结构 `notice`
--

CREATE TABLE IF NOT EXISTS `notice` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `notice`
--

INSERT INTO `notice` (`sid`, `title`) VALUES
(1, '海南因台风订单配送受影响公告'),
(2, '青岛受峰会管控影响物流配送通知'),
(3, '因5.27号长春地区举行国际马拉松配送受影响通知'),
(4, '因上合峰会青岛全面进入交通管制通知');

-- --------------------------------------------------------

--
-- 表的结构 `reshuiqi`
--

CREATE TABLE IF NOT EXISTS `reshuiqi` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `reshuiqi`
--

INSERT INTO `reshuiqi` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn21.ehaier.com/file/59a3b834b7021e41193dae1e.png', '60升健康抑菌一级能效', '￥1499.00'),
(2, 'http://cdn21.ehaier.com/file/59a3b834b7021e41193dae1e.png', '60升水温恒定预约洗', '1199.00'),
(3, 'http://cdn22.ehaier.com/file/59a3b85e3e7e45ae86e06579.png', '60升净水洗热水器', '3199.00'),
(4, 'http://cdn22.ehaier.com/file/5a9765a3b702e1798d9947cf.png', '60升3D速热型防电墙电热水器', '￥2599.00'),
(5, 'http://cdn21.ehaier.com/file/59a3b8a83e7e45ae86e06582.png', '12升防一氧化碳高抗风系列热水器', '￥2999.00'),
(6, 'http://cdn22.ehaier.com/file/5a976510fac0390ee9ac7aaa.png', '13升水气双调燃气热水器', '￥2199.00'),
(7, 'http://cdn22.ehaier.com/file/59a661d93e7ec55fb176ad04.png', '12升专利安防智能恒温', '￥1799.00'),
(8, 'http://cdn21.ehaier.com/file/5b0666cf3e7e48ffc5a22d01.png', '13升智能变升家用燃气热水器', '￥1699.00');

-- --------------------------------------------------------

--
-- 表的结构 `tuijian`
--

CREATE TABLE IF NOT EXISTS `tuijian` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `tuijian`
--

INSERT INTO `tuijian` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn22.ehaier.com/file/5b10aca7fac03251b2e1a8e0.png', '470升十字对开变频静音节能干湿分储电冰箱', '￥4699.00'),
(2, 'http://cdn21.ehaier.com/file/5b0fdd48b702fcbe7691fc7f.png', '8公斤iMate8智能变频滚筒洗衣机', '￥2199.00'),
(3, 'http://cdn22.ehaier.com/file/5b1d3fb258e17dcad0138458.png', '1.5匹智能变频自清洁空调', '￥2799.00'),
(4, 'http://cdn21.ehaier.com/file/5b165dc558e11cde36fca0a4.png', '65英寸超高清人工智能电视机', '￥3999.00'),
(5, 'http://cdn22.ehaier.com/file/5b0614e23e7e48ffc5a22ce9.png', '215升大冷冻力冷柜', '￥1199.00'),
(6, 'http://cdn21.ehaier.com/file/5b0fde39b702fcbe7691fc82.png', '458升风冷无霜十字对开门 变频干湿分储 WIFI智能家用冰箱', '￥3999.00'),
(7, 'http://cdn21.ehaier.com/file/5b0fdec458e1353d2837da5e.png', '8公斤变频全自动洗烘一体滚筒洗衣机', '￥3499.00'),
(8, 'http://cdn22.ehaier.com/file/5b0fdf01b702fcbe7691fc85.png', '318升商用冰箱 卧式大冷冻柜 冷藏冷冻转换柜 变温冷柜', '￥1599.00'),
(9, 'http://cdn22.ehaier.com/file/5b061f5358e1284453bd8265.png', '12升宽频智能恒温燃气热水器', '￥1799.00'),
(10, 'http://cdn21.ehaier.com/file/5b0fdfa358e1353d2837da61.png', '2匹小超人大风量智能空调', '￥3499.00');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `sid` int(2) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`sid`, `phone`, `password`) VALUES
(2, '13111111111', '96e79218965eb72c92a549dd5a330112'),
(3, '13222222222', '96e79218965eb72c92a549dd5a330112');

-- --------------------------------------------------------

--
-- 表的结构 `xiyiji`
--

CREATE TABLE IF NOT EXISTS `xiyiji` (
  `sid` int(1) NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(50) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 转存表中的数据 `xiyiji`
--

INSERT INTO `xiyiji` (`sid`, `url`, `title`, `price`) VALUES
(1, 'http://cdn22.ehaier.com/file/59a3ae1558e116c813cc0c7c.png', '8公斤智能洗烘一体', '￥3499.00'),
(2, 'http://cdn22.ehaier.com/file/5b0661edfac04b66d0b40437.png', '10公斤直驱变频滚筒洗衣机', '￥4399.00'),
(3, 'http://cdn22.ehaier.com/file/59a3aedf3e7e45ae86e06576.png', '8公斤直驱变频智能水晶', '￥4199.00'),
(4, 'http://cdn22.ehaier.com/file/5b066222fac04b66d0b4043a.png', '8公斤直驱变频洗烘一体滚筒洗衣机', '￥5499.00'),
(5, 'http://cdn22.ehaier.com/file/5a45f9333e7eba38f3674e61.png', '9公斤直驱变频波轮洗衣机', '￥1599.00'),
(6, 'http://cdn21.ehaier.com/file/5b0662ea3e7e48ffc5a22cfe.png', '8公斤变频幂动力波轮洗衣机', '￥2099.00'),
(7, 'http://cdn21.ehaier.com/file/5b0662bbfac04b66d0b4043d.png', 'YOUNG-9 9公斤智能直驱变频洗衣机', '￥1499.00'),
(8, 'http://cdn22.ehaier.com/file/59a3af85fac0ebbd61becdfa.png', '8.5公斤变频智能波轮', '￥1799.00');
