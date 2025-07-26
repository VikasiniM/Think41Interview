# Think41 Full-Stack Chat Application

## Overview

This is a full-stack chat application with a React frontend, Node.js/Express backend, and MongoDB database, fully containerized using Docker.

## Features

- Real-time chat between user and AI
- Persistent conversation history
- Full-stack Docker orchestration

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed

## Setup & Run

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-org/your-repo.git
    cd your-repo
    ```

2. **Start the application:**
    ```sh
    docker-compose up --build
    ```

3. **Access the app:**
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:5000](http://localhost:5000)

## Development Notes

- **Frontend** runs on port 3000 (served by Nginx).
- **Backend** runs on port 5000 (Node/Express).
- **MongoDB** runs on port 27017 with data persisted in a Docker volume.

## Customization

- Change DB credentials, API endpoints, and CORS settings as needed in the respective service configs.

## Troubleshooting

- Use `docker-compose logs` to view logs.
- Use `docker-compose down -v` to remove all containers and volumes.

---

## Milestones

- [x] Full-stack integration
- [x] Dockerization

---

## License

MIT