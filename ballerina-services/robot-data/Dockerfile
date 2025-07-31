
FROM ballerina/ballerina
COPY . /app
WORKDIR /app
RUN bal build
CMD ["bal", "run", "target/bin/robot_data.jar"]