USE bundles;

DROP TABLE package;

CREATE TABLE `package` (
	`name` varchar(45),
	`bundle` varchar(45),
	`company` varchar(45),
	`email` varchar(45),
    `active` TINYINT,
    `category` varchar(45),
    PRIMARY KEY (`bundle`)
);

INSERT INTO `package` VALUES 
	("Tappx App","com.tappx.app","Tappx","info@tappx.es", TRUE, "Tool"), 
	("Skyscanner App",'com.skyscanner.app',"Skyscanner","info@skyscanner.com", TRUE, 'Social'), 
	("Angry Birds",'com.angrybirds.app',"Rovio","info@Rovio.es", FALSE, 'Games'), 
	("Spotify",'net.spotify.app',"Tappx","info@tappx.es", TRUE, 'Music');