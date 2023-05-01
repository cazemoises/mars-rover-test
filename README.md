# Project: *Mars Rover Test*

# Author: *Moises Cazé*

# Description

  A NodeJS + ReactJS + PostgresDB web app designed to mars rovers controlling. You can have an efficient management of all your rovers.


# Installation Guide

In this section there will be the application's step-by-step:

**First step:**

Docker is a necessary application to run this project, you can access it's official page in the following link: [Docker's official page](https://www.docker.com/products/docker-desktop/) and download it according to your specific operational system.

**Second step:**

To run the backend container, you must open the backend folder in a terminal and run the following code:

```
docker-compose up -d
```

By doing this you are executing the container and once it is already up, it's url can be acessed at 
```
localhost:3001/
```

**Third step:**

Once the backend is running, you must now run the frontend container. To do it, do the following steps:

1. Open the frontend folder in a terminal.
2. Run the docker-compose up -d command again.
3. Run the following two commands:
   
```
docker exec -it vite_docker sh
```

```
npm ci
```

```
npm run start
```