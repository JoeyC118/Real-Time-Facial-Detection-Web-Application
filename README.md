# Real-Time Face Detection Web Application

A real-time face detection web application that uses OpenCV Haar Cascades for computer vision processing with a Flask backend and React frontend.

🌐 **[Try the Application Here!](https://josephcusumanofacedetect.com/)**

## About The Project

This project implements a real-time face detection system using computer vision techniques. The application captures video from the user's webcam, processes frames using OpenCV Haar Cascade classifiers, and displays bounding boxes around detected faces, eyes, and smiles. The system features a Flask backend for image processing and a React frontend for the user interface, providing seamless real-time detection capabilities. The application is deployed on AWS and accessible worldwide via the web.

### Key Features

- **Real-time face detection** - Processes webcam feed for immediate face recognition
- **Multi-feature detection** - Detects faces, eyes, and smiles simultaneously
- **Live bounding boxes** - Visual feedback with labeled detection boxes
- **Responsive design** - Clean Bootstrap-based UI that adapts to different screen sizes
- **Cloud deployment** - Hosted on AWS for global accessibility and scalability

### Built With

- [Flask](https://flask.palletsprojects.com/) - Python web framework for backend API
- [OpenCV](https://opencv.org/) - Computer vision library for image processing
- [React](https://reactjs.org/) - Frontend JavaScript library
- [React Bootstrap](https://react-bootstrap.github.io/) - UI component library
- [React Webcam](https://www.npmjs.com/package/react-webcam) - Webcam integration for React
- [AWS](https://aws.amazon.com/) - Cloud hosting and deployment platform

## Getting Started

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/face-detection-web-app.git
   cd face-detection-web-app
   ```

2. Install Python dependencies
   ```bash
   pip install flask opencv-python numpy flask-cors
   ```

3. Install Node.js dependencies
   ```bash
   npm install react react-bootstrap bootstrap react-webcam
   ```

4. Ensure Haar cascade files are in the cascades directory
   ```
   cascades/
   ├── haarcascade_frontalface_default.xml
   ├── haarcascade_eye.xml
   └── haarcascade_smile.xml
   ```

## Usage

### Live Application

**🚀 [Try it now at josephcusumanofacedetect.com](https://josephcusumanofacedetect.com/)**

- **Grant webcam permissions** when prompted by your browser
- **Position yourself** in front of the camera for optimal detection
- **View real-time results** with bounding boxes around detected features:
  - Green boxes around faces labeled "face"
  - Green boxes around eyes labeled "eye"  
  - Green boxes around smiles labeled "smile"

### Run Locally (For Development)

If you want to modify or develop the application locally:

#### 1. Start the Flask Backend

Run the Flask server for image processing:

```bash
python app.py
```

The backend will start on `http://localhost:3000` and provide the `/detect` endpoint for face detection processing.

#### 2. Start the React Frontend

In a separate terminal, start the React development server:

```bash
npm start
```

The frontend will start on `http://localhost:3001` (or the next available port) and automatically open in your browser.

#### 3. Development Usage

- **Grant webcam permissions** when prompted by your browser
- **Position yourself** in front of the camera for optimal detection
- **View real-time results** with bounding boxes around detected features
- **Make modifications** to the code and see changes in real-time

## Project Structure

```
├── app.py                     # Flask backend server
├── cascades/                  # Haar cascade classifier files
│   ├── haarcascade_frontalface_default.xml
│   ├── haarcascade_eye.xml
│   └── haarcascade_smile.xml
├── src/
│   ├── App.js                 # Main React application component
│   ├── components/
│   │   ├── WebcamCapture.js   # Webcam capture and detection component
│   │   └── navbar.js          # Navigation bar component
│   └── index.js               # React entry point
├── package.json               # Node.js dependencies
└── README.md                  # Project documentation
```

## Detection Algorithm

The application uses OpenCV Haar Cascade classifiers for feature detection:

- **Face Detection**: Uses `haarcascade_frontalface_default.xml` with scale factor 1.09 and min neighbors 5
- **Eye Detection**: Uses `haarcascade_eye.xml` with scale factor 1.1 and min neighbors 8
- **Smile Detection**: Uses `haarcascade_smile.xml` with scale factor 4.1 and min neighbors 45

The backend processes base64-encoded images from the frontend and returns JSON with bounding box coordinates and labels.

## Known Issues (Work In Progress)

- Working on improvements in smile detection

## 📫 Contact Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Joseph%20Cusumano-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/josephmcusumano)
