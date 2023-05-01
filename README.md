README_CONTENT = '''# Project: *Mars Rover Test*

# Author: *Moises Cazé*

# Description

  A NodeJS + ReactJS + PostgresDB web app designed to mars rovers controlling. You can have an efficient management of all your rovers.


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
2. Create a new file called `.env` based on the `.env.sample` file provided. The `.env` file contains environment variables required by the application.
3. Run the following command to start the frontend container:

```
docker-compose up -d
```


4. The frontend container should now be running. You can access the application by opening your browser and going to `http://localhost:3000`.


**PostgresDB setup**

The installation guide does not include instructions for setting up and connecting to the PostgresDB. Therefore, you will need to follow the instructions specific to your system to set up the PostgresDB and connect it to the backend.

**Environment-specific configurations**

If there are any environment-specific configurations that need to be made before running the app, such as changing the port number, these should be specified in the `.env.sample` file. The `.env` file should be created based on the `.env.sample` file, and any necessary changes should be made there.'''

**Second step:**

To run the backend container, you must open the backend folder in a terminal and create a file named .env:

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