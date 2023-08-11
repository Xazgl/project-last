#!/bin/bash

# connect to the remote host opel and pull the latest image from the GitLab registry
ssh opel "cd /home/arkont && docker compose -f docker-compose.prod.yml pull"

# connect to the remote host opel and restart the Docker containers
ssh opel "cd /home/arkont && docker compose -f docker-compose.prod.yml up -d"