create database if not exists ProjetoIndividual;
use ProjetoIndividual;

create table heroi (
id			int auto_increment,
nome		varchar(20),
primary key	(id)
) auto_increment=1 ;

create table usuario (
id			int auto_increment,
nome		varchar(60),
email		varchar(60),
senha		varchar(60),
fkheroi		int,
primary key	(id),
foreign key fkheroi (fkheroi) references heroi (id)
) auto_increment=1 ;

insert into heroi (nome)
values  ('Abomination'),
        ('Antiquarian'),
        ('Arbalest'),
        ('Bounty Hunter'),
        ('Crusader'),
        ('Flagellant'),
        ('Grave Robber'),
        ('Hellion'),
        ('Highwayman'),
        ('Houndmaster'),
        ('Jester'),
        ('Leper'),
        ('Man-at-Arms'),
        ('Musketeer'),
        ('Occultist'),
        ('Plague Doctor'),
        ('Shieldbreaker'),
        ('Vestal');
        
select * from usuario;