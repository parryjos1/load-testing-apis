# Load Testing with Locust

This project uses Locust to load test how many users and requests per second various backend frameworks can handle.

## Getting Started

To set up the environment and start Locust, follow these steps:

1. Activate the virtual environment:
    ```sh
    source venv-load-test/bin/activate
    ```

2. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Navigate into the backend directory and start the server using Docker Compose:
    ```sh
    docker compose up --build
    ```

## Running Locust

Once the server is up and running, you can start Locust to begin load testing. Open your browser and navigate to `http://localhost:8089` to access the Locust web interface.

From there, you can configure the number of users and spawn rate to simulate different load scenarios and observe how your backend handles the traffic.

## Conclusion

This setup allows you to effectively measure the performance of various backend frameworks under load, helping you identify bottlenecks and optimize your application for better scalability.