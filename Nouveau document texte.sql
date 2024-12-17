CREATE DATABASE gestion_fut_champions;
USE gestion_fut_champions;

CREATE TABLE statistiqueGoalkeeper (
    Gk_id INT AUTO_INCREMENT PRIMARY KEY,
    diving INT,
    handling INT,
    kicking INT,
    reflexes INT,
    speed INT,
    positioning INT
);

CREATE TABLE statistiqueJoueur (
    joueurStatique_id INT AUTO_INCREMENT PRIMARY KEY,
    pace INT,
    shooting INT,
    passing INT,
    dribbling INT,
    defending INT,
    physical INT
);

CREATE TABLE nationalite (
    nationalite_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE club (
    club_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE joueurs (
    joueur_id INT AUTO_INCREMENT PRIMARY KEY,
    
    name VARCHAR(100) NOT NULL,
    position ENUM('GK','CB1','CB2','RB','LB','MR','CM','ML','RW','SA','LW'),
    rating int ,
    club_id INT NOT NULL,
    nationalite_id INT NOT NULL,
    joueurStatique_id INT,
    gk_statistique_id INT,
    FOREIGN KEY (joueurStatique_id) REFERENCES statistiqueJoueur(joueurStatique_id),
    FOREIGN KEY ( gk_statistique_id ) REFERENCES statistiqueGoalkeeper(Gk_id),
    FOREIGN KEY (club_id) REFERENCES club(club_id),
    FOREIGN KEY (nationalite_id) REFERENCES nationalite(nationalite_id)
);


