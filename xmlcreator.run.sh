#!/bin/bash

docker run --rm --network cars-net --volume arkontru_data:/usr/src/app/xml -it xmltasks

#docker run --rm --network cars-net --volume ./xml/usr/src/appxml -it xmltasks