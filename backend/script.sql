CREATE TABLE IF NOT EXISTS public.grid (

	id serial NOT NULL,
    title varchar(100) UNIQUE NOT NULL,
	x_limit int NOT null,
	y_limit int NOT NULL,    
	PRIMARY KEY(id)
	
);

CREATE TABLE IF NOT EXISTS public.rover (

	id serial NOT NULL,
    rover_label varchar NOT NULL,
	x_pos int NOT NULL,
	y_pos int NOT NULL,
	direction char NOT NULL,
	grid_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(grid_id) REFERENCES grid(id)
	
);