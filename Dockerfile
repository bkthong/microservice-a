FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# Add source code to the workding directory of the image
ADD src/ .

# Update file ownership to user and group 1001
USER root
RUN chown -R 1001:1001 .

# Install dependencies as user 1001
USER 1001 
RUN npm install

# Execute unit tests
# -- blank for now --

# CMD starts the application when the image is used to start a container
CMD ["npm" , "start"]