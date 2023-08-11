#!/bin/bash

# docker run --rm --network cars-net --volume arkontru_data:/usr/src/app/xml -it xmltasks
if [ ! "$(docker network ls | grep arkont-net)" ]; then
    docker network create arkont-net
fi
if [ "$(docker ps -q -f name=xml_test)" ]; then
    docker stop xml_test
    # docker rm xml_test
fi

# if [ ! "$(docker volume ls | grep xml_test_volume)" ]; then
#     docker volume create xml_test_volume
# fi

docker run --rm --network arkont-net --name xml_test -d xmltasks 



