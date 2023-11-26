# gunicorn_config.py

# Enable keep-alive with a timeout of 60 seconds
keepalive = 120

# Number of requests a worker will process before restarting
max_requests = 1000

# Maximum time, in seconds, that a worker can be busy before being recycled
timeout = 120
