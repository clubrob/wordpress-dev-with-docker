#!/bin/bash

echo
echo 'nginx has started on'
echo "http://${HOSTNAME} or https://${HOSTNAME}"

# start nginx
nginx -g 'daemon off;'