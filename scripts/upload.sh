#!/bin/bash

# If there is no docker-compose.prod.yml in the current directory, cd to the parent directory
if [ ! -f docker-compose.prod.yml ]; then
  cd ..
fi

# Create the /home/arkont/ directory on the remote host opel if it doesn't exist
ssh opel "mkdir -p /home/arkont"

# Upload the docker-compose.prod.yml file to the remote host opel
# Check if no diff between last commit and current state of docker-compose.prod.yml in working directory
# If there is no diff, then do not upload the file
# if [ -z "$(git diff --name-only HEAD docker-compose.prod.yml)" ]; then
#   echo "No changes detected in docker-compose.prod.yml, skipping upload."
# else
  scp docker-compose.prod.yml opel:/home/arkont/
# fi


# Upload the .env.prod file to the remote host opel
scp .env.prod opel:/home/arkont/

# Set file permissions on the remote host opel
ssh opel "chmod 600 /home/arkont/.env.prod"

# Upload nginx folder to the remote host opel
# scp -r nginx opel:/home/arkont/

# Restart the Docker containers on the remote host opel
ssh opel "cd /home/arkont/ && docker compose -f docker-compose.prod.yml up -d"