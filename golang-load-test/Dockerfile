#FROM golang:latest
#
#WORKDIR /app
#
#COPY . .
#
#RUN go build -o main .
#
#EXPOSE 5001
#
#CMD ["./main"]

# Base Image
#FROM golang:latest
#
## Set the Current Working Directory inside the container
#WORKDIR /app
#
## Copy everything from the current directory to the PWD(Present Working Directory) inside the container
#COPY . .
#
## Download all the dependencies
#RUN #go mod download
#
## Build the Go app
#RUN go build -o main .
#
#EXPOSE 5001
#
## Command to run the executable
#CMD ["./main"]


# Use the latest Golang image
FROM golang:latest

# Set the working directory
WORKDIR /app

# Copy go.mod and go.sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go application
RUN go build -o main .

# Expose port 5001
EXPOSE 5001

# Command to run the Go API
CMD ["./main"]