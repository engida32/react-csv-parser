# CSV Uploader (React + Vite + Tailwind)

A modern and responsive frontend for uploading large departmental CSV files and downloading the processed result.

## Features

- Drag & drop CSV uploader with file preview
- Uploads file to backend API
- Displays processing metrics and download link
- Toast notifications for success and errors
- Mobile-friendly, built with Tailwind CSS

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- `axios` for API requests
- `react-hot-toast` for notifications
- `react-dropzone` for drag-and-drop support

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env` file in the root directory and add your API endpoint:

```env
VITE_API_ENDPOINT=http://localhost:3000/
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

Navigate to `http://localhost:5173` in your browser.

## Usage

1. Drag and drop your CSV file or click to select it.
2. Click "Upload & Process" to send the file to the backend.
3. Wait for processing to complete.
4. Download the processed file using the provided link.
