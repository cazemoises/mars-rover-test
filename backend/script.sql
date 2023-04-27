CREATE TABLE IF NOT EXISTS public.grid (

	id serial NOT NULL,
	upper_limit int NOT NULL,
	right_limit int NOT NULL,
	PRIMARY KEY(id)
	
);

CREATE TABLE IF NOT EXISTS public.rover (

	id serial NOT NULL,
	x_pos int NOT NULL,
	y_pos int NOT NULL,
	direction char NOT NULL,
	grid_id int NOT NULL,
	PRIMARY KEY(id),
	FOREIGN KEY(grid_id) REFERENCES grid(id)
	
);