# Use the official Bun image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy the Bun.js API code to the container
COPY . .

# Expose port 5001
EXPOSE 5001

# Command to run the Bun.js API
CMD ["bun", "index.js"]