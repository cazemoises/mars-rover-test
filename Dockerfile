FROM node:14

WORKDIR /mars-rover-test

COPY backend/package*.json ./backend/

COPY frontend/package*.json ./frontend/

RUN npm install --prefix ./backend

RUN cd frontend && npm install

COPY backend/ ./backend/

COPY frontend/ ./frontend/

RUN cd frontend && npm run build

EXPOSE ${SERVER_PORT}

ENV PGUSER=${PG_USER}
ENV PGDATABASE=${PG_DB}
ENV PGPASSWORD=${PG_PW}
ENV PGPORT=${PG_PORT}

CMD ["npm", "start"]