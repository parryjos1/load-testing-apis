from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def test_health_endpoint(self):
        self.client.get("/health")