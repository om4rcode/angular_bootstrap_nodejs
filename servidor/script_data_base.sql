--CREAMOS LA BASE DE DATOS
	CREATE DATABASE registro_personas
		WITH 
		OWNER = postgres
		ENCODING = 'UTF8'
		CONNECTION LIMIT = -1;
--CREAMOS LA TABLA PERSONA
	CREATE TABLE public.persona
	(
		id_persona serial,
		nom_persona character varying(50),
		ape_paterno character varying(50),
		ape_materno character varying(50),
		edad character varying(3),
		correo character varying(60),
		PRIMARY KEY (id_persona)
	)
	WITH (
		OIDS = FALSE
	);

	ALTER TABLE public.persona
		OWNER to postgres;