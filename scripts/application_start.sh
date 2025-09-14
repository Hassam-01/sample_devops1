#!/bin/bash
# This script starts our application
cd /home/ec2-user/my-node-app
npm install
# Use pm2 or another process manager to keep it running
pm2 stop all || true
pm2 start app.js --name "my-app"