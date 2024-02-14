
# SecureSnaps

SecureSnaps is a simple web application that enables users to sign up, log in, and securely upload images. The application implements basic authentication and authorization mechanisms to ensure the protection of user data.

## Features

- User authentication (signup and login)
- Image upload functionality
- Secure access to user data
- Simple and clean UI

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Deeksha0301/SecureSnaps
   ```

2. **Navigate to the project directory:**

   ```bash
   cd SecureSnaps
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

2. **Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.**

## File Structure

```
SecureSnaps/
|-- public/
|   |-- css/
|   |   |-- style.css
|   |-- js/
|   |-- uploads/
|-- routes/
|   |-- auth.js
|   |-- upload.js
|-- views/
|   |-- dashboard.html
|   |-- login.html
|   |-- signup.html
|-- app.js
|-- package.json
|-- README.md
```

## Dependencies

- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Multer](https://www.npmjs.com/package/multer)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
