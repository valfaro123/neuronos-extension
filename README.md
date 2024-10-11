# NeuronOS Chrome Extension challenge

This is a simple chrome extension built as part of a coding challenge for NeuronOS

For a detailed walkthrough on how to quickly get the application setup, please refer to this tutorial I made here: https://www.loom.com/share/a7d788d267ad4b358113063680058735?sid=0c109b18-6637-4eff-8577-8da7024e9183

## Features

- React
- JSON-server (for making API calls)
- Tailwind CSS (for styling)

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/valfaro123/neuronos-extension.git

   ```

2. Navigate to project directory

   ```bash
   cd neuronos-extension

   ```

3. Install all dependencies

   ```bash
   npm i

   ```

4. Build application

   ```bash
   npm run build

   ```

5. Spin up the mock server

   ```bash
   json-server --watch data.json --port 8000

   ```

6. The extension is now ready to use on chrome! Navigate to the extensions tab and manually import the dist folder by clicking the "Load unpacked" button. Once added in, you are able to access the extension in your extensions folder.
