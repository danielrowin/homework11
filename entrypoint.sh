#!/bin/sh

# Apply database migrations
npx sequelize-cli db:migrate

# Start the application
exec "$@"
