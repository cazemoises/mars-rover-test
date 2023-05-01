# Project: *Mars Rover Test*

# Author: *Moises Cazé*

# Description

This is a web application built using NodeJS, ReactJS, and PostgresDB. It allows efficient management of Mars rovers by providing rover controlling functionality.

# Installation Guide

The following section provides step-by-step instructions on how to install and run the application:

**First step:**

Docker is a prerequisite to run this project. You can access the official Docker page at https://www.docker.com/products/docker-desktop/ and download the appropriate version for your operating system.

**Second step:**

To run the backend container, navigate to the backend folder in a terminal and execute the following command:

```
docker-compose up -d
```

This will start the container and once it is up, the URL can be accessed at:
```
localhost:3001/
```

**Third step:**

After the backend is running, you must start the frontend container. Follow the steps below:

1. Open the frontend folder in a terminal.
2. Execute the docker-compose up -d command again.
3. Run the following three commands:
   
```
docker exec -it vite_docker sh
```

```
npm ci
```

```
npm run start
```
