# DermaDetect

DermaDetect is a group project based on the [EpiDetect](https://github.com/fatimaazfar/EpiDetect) project by Fatima Azfar. It is a MERN stack web application designed to predict skin diseases from images captured using a web camera, utilizing a fine-tuned ResNet50 model.

## Features

- User profile management
- Skin disease prediction via image upload or webcam capture
- Blog creation and management
- Contact form for messages
- Prediction records viewing and download in PDF format

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB
- Python with TensorFlow and Keras

### Steps

1. Clone this repository:

git clone https://github.com/your-group-repo/DermaDetect.git



2. Navigate to the project directory.

3. Install backend dependencies:

cd server
npm install



4. Install frontend dependencies:

cd ../client
npm install



5. Setup environment variables in the `server` directory by creating a `.env` file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret



6. Run the backend server:

cd ../server
node server.js



7. Run the frontend server:

cd ../client
npm start



8. Open your browser at `http://localhost:3000` to access the application.

## License and Attribution

This project is based on [EpiDetect](https://github.com/fatimaazfar/EpiDetect) by Fatima Azfar.

The original project is licensed under the MIT License. See the LICENSE file for details.

---

## Usage Disclaimer

This project is used solely for **educational and practice purposes**. It is not intended for commercial use or public distribution without respecting the original author's license terms and permissions.

---

## Contributing

This is a group project. Please coordinate with your team members for any changes or contributions.

---

## Contact

For inquiries or contributions, contact the group members via GitHub.







