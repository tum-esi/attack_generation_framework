#!/bin/bash

start_time=$(($(date +%s%N)/1000000))
# echo "sleep 1 second"
# sleep 1
# echo "wake up"

# execute command to measure

# 1.
# docker commit recovery-toolkit_recovery-toolkit_1 recovery_image:1.0
# 2.
# docker save --output niove_recover.tar recovery_image:1.0
# 3.
# docker load --input niove_recover.tar
# 4.
# curl -F "userid=1" -F "filecomment=This is an tar file" -F "tar=@/home/jp/Documents/coding/gitlab.com/WP5-response-toolkit-TUM/testing/recovery-toolkit/niove_recover.tar" localhost:5000/upload-checkpoint
# 5. make sure to collect object id by manually connecting to gridfs over mongo container
# curl --header "Content-Type: application/json" --request POST -o recovery-test.tar --data '{"file_id":"6027241a2ffce167a3e37e5f"}' http://localhost:5000/checkpoint-rollback 2> error-recovery.txt

# fetch data down...

end_time=$(($(date +%s%N)/1000000))

echo "execution took:" $(($end_time - $start_time)) "ms"


# 1. command result in ms: 1011 ms, with image size: 57.6MB, container info: "ShmSize": 67108864
# as reference, default python image has a size of 41.8MB (python:3.7-alpine)

# 2. command result in ms: 2427 ms, tar file has size: 58M in total

# 3. command result in ms: 362 ms, image in between: 
# jp@jplenovo> ./performance.sh                                                                      ~/Documents/coding/gitlab.com/WP5-response-toolkit-TUM/testing/recovery-toolkit
# 7cf8ea7821c2: Loading layer [==================================================>]  354.3kB/354.3kB
# Loaded image: recovery_image:1.0
# execution took: 362 ms

# 4. command result in ms: 27451 ms
# jp@jplenovo> ./performance.sh
# {"gridfs_id": "60272040ecf37fa8e9964ee5", "filename": "test.tar"}execution took: 27451 ms

# 5. command result in ms: 470 ms


# ----------------------------------------------------------
## Single container build
# - docker build -t recovery_image:0.1 .
# - docker run -p 5000:5000 recovery_image:0.1

# ## Docker backup commands
# - docker commit container_name repository:tag (e.g. docker commit recovery recovery_image:1.0)
# - docker save recovery_image:1.0
# - docker load recovery_image:1.0

########### USER INTERFACE EVALUATION

# Title: End to End recovery actions of toolkit UI

# Container commit to image: python:3.7-apline image with data generation application (65.3MB) : 
# -> Container to Image (65.3MB) took 438.7000000476837 milliseconds

# Image to tar handler: (65.3MB) image to tar (gen2) (65.3MB)  :
# -> Image to Tar took 53.199999928474426 milliseconds
# -> Image to Tar (evluation2) took 9.600000023841858 milliseconds.
# -> Image (busybox) to Tar () took 34.199999928474426 milliseconds. _> not working even though exactly following the docs

# Tar to image load : 
# -> Tar (65.3MB) to Image (68.7MB) took 651.8000000715256 milliseconds.

# Tar (65.5 MiB) checkpoint2 to GridFS:
# -> Tar to GridFS took 836 milliseconds.

# Database GRIDFS  tar (65.5 MiB) download to browser : 
# -> Snapshot GridFS Tar Download took 1009.6999999284744 milliseconds.

# FS Tar download:
# downloading checkpoint_gen2.tar, -> Checkpoint FS Tar (65.5 MiB) Download took 980.1999999284744 milliseconds

# Checkpoint (tar + configs) upload : 
# -> Upload Tar and Configs (configs to MDB, Tar  (gen2 65.5 MiB<->checkpoint gen2 65.5 MB) to FS) took 325.8000000715256 milliseconds

# Database csv (165 bytes) logs upload :
# -> CSV Logfile upload took 35.89999997615814 milliseconds.

# Database csv logs read :
# -> CSV Logfile download took 34.60000002384186 milliseconds.

# Container Recovery (upload tar, convert to image, restart container with checkpoint configurations)  : 
# addition: 325.80 ms (upload tar) + 651.80 ms (tar to image) + 598.29 ms (container new start) + 664.80 ms (container restart) + container stop (modal submit request took 10619.60 ms)



