create if not exists database ProjetoIndividual;
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