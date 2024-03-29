# Author: *Moises Cazé*

# Description

This is a web application built using NodeJS, ReactJS, and PostgresDB. It allows efficient management of Mars rovers by providing rover controlling functionality.

# Installation Guide

In this section, we will go through the steps to install and run the Mars Rover Test project.

**Prerequisites**

- Docker: you can download it from [Docker's official page](https://www.docker.com/products/docker-desktop/) according to your specific operating system.

**Backend setup**

1. Open a terminal and navigate to the backend folder.
2. Create a new file called `.env` based on the `.env.sample` file provided. The `.env` file contains environment variables required by the application, such as the server port and database information.
3. Run the following command to start the backend container:

```
docker-compose up -d
```

1. The backend container should now be running. You can access it at `http://localhost:<SERVER_PORT>`, where `<SERVER_PORT>` is the port specified in the `.env` file.

**Frontend setup**

1. Open a terminal and navigate to the frontend folder.
3. Run the following command to start the frontend container:

```
docker-compose up -d
```


4. The frontend container should now be running. You can access the application by opening your browser and going to `http://localhost:5173`.

**Environment-specific configurations**

If there are any environment-specific configurations that need to be made before running the app, such as changing the port number, these should be specified in the `.env.sample` file. The `.env` file should be created based on the `.env.sample` file, and any necessary changes should be made there.'''

**Second step:**

To run the backend container, you must open the backend folder in a terminal and create a file named .env:

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
