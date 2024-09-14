# Simple Registration App

## Description

This is a basic web application where users can fill out a registration form. The app saves the registration data to a MongoDB database.

## Prerequisites

To run this app, you need to have the following installed:

1.  **Node.js**: This tool allows you to run JavaScript code on your computer.
2.  **Docker Desktop**: This tool helps you package and run applications in a container.

### Install Node.js

Download and install Node.js from:

- [Node.js](https://nodejs.org/)

### Install Docker Desktop

1.  **Download Docker Desktop**: Go to the Docker website and download Docker Desktop for your operating system:

    - Docker Desktop for Windows
    - Docker Desktop for Mac

2.  **Install Docker Desktop**: Follow the installation instructions provided on the Docker website.

3.  **Start Docker Desktop**: After installation, open Docker Desktop and make sure it is running.

## Steps to Run the App

1.  **Clone the Repository**

    Get the code for the app by running this command in your terminal:

    `git clone https://github.com/jitsingfow/webinar-registration-app.git`

2.  **Navigate to the App Directory**

    Change to the app directory:

    `cd webinar-registration-app`

3.  **Build and Run the App**

    Start the app using Docker:

    `docker-compose up`

    This command builds the app and starts both the app and the MongoDB database.

4.  **Open the App**

    Open your web browser and go to:

    arduino

    Copy code

    `http://localhost:3000`

    You'll see the registration form.

5.  **Use the Registration Form**

    Fill out the form and submit it. The data will be saved to the MongoDB database.

## How It Works

- **Registration Form**: Users enter their information into a form on the website.
- **Express.js**: Handles the server-side logic and routes for the form submission.
- **MongoDB**: Stores the registration data.
- **Docker**: Runs the app and MongoDB in isolated containers for easy setup and management.

## Troubleshooting

If you encounter any issues:

1.  Ensure Node.js and Docker are properly installed.
2.  Run `docker-compose up` from the root directory of the app.
3.  Check the terminal for any error messages and make sure MongoDB starts correctly.

For additional help, feel free to ask!
