# Image Manipulation API

This Node.js API allows you to manipulate third-party image URLs by resizing, cropping, applying filters, and converting formats using the Sharp.js library.

## Setup

Before running the API, make sure you have Node.js installed on your machine. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

## Installation

To install the required dependencies, follow these steps:

1. Clone this repository to your local machine or download the source code.
  - git clone https://github.com/itsmohitnamdeo/Image-Manipulation-API.git
2. Open a terminal or command prompt and navigate to the project directory.
  - cd Image-Manipulation-API
4. Run the following command to install the dependencies:
  - npm install

## Running the API

To start the API server, follow these steps:

1. Make sure you are in the project directory in your terminal or command prompt.
2. Run the following command:
  - node app.js
    
The server should now be running and listening on port 3000.

## API Endpoint

The API provides a single endpoint for manipulating images:

GET /manipulate-image

arduino
Copy code

### URL Parameters

- `url` (required): The URL of the third-party image to be manipulated.
- `width` (optional): The desired width of the manipulated image.
- `height` (optional): The desired height of the manipulated image.
- `crop` (optional): A boolean parameter indicating whether the image should be cropped or resized to fit the specified dimensions.
- `bw` (optional): A boolean parameter indicating whether the output should be black and white or not.
- `format` (optional): The desired format of the manipulated image (e.g., jpg, png, webp, etc.).

## Usage Examples

Here are some examples of how to make API requests to manipulate images using different combinations of URL parameters:

1. Resizing the image to a width of 500 pixels:

  - GET /manipulate-image?url=<IMAGE_URL>&width=500

2. Resizing the image to a height of 300 pixels:

  - GET /manipulate-image?url=<IMAGE_URL>&height=300

3. Resizing the image to a width of 400 pixels and a height of 300 pixels, with cropping enabled:

  - GET /manipulate-image?url=<IMAGE_URL>&width=400&height=300&crop=true

4. Converting the image to black and white:

  - GET /manipulate-image?url=<IMAGE_URL>&bw=true

5. Resizing the image to a width of 200 pixels, converting it to PNG format, and enabling cropping:

  - GET /manipulate-image?url=<IMAGE_URL>&width=200&format=png&crop=true


Replace `<IMAGE_URL>` with the actual URL of the image you want to manipulate.


## Example Images
![Resizing-image-300-pixels-black-white](https://github.com/itsmohitnamdeo/Image-Manipulation-API/assets/85800451/8e5bbd79-9525-4a33-8c35-6aaa8bcb93e9)
![Resizing-image-300-pixels](https://github.com/itsmohitnamdeo/Image-Manipulation-API/assets/85800451/85fe1743-07e2-466c-b301-87f5291944b4)


## Error Handling

The API handles potential errors gracefully and provides meaningful error messages to aid in troubleshooting. Here are some possible error scenarios:

- If the `url` parameter is missing, the API will respond with a `400 Bad Request` error and the message "Missing URL parameter".
- If the `url` parameter points to an invalid or unavailable image, the API will respond with a `400 Bad Request` error and the message "Invalid or unavailable image URL".
- If any other errors occur during the image manipulation process, the API will respond with a `500 Internal Server Error` and the message "Internal server error".

## Testing and Validation

To test and validate the image manipulation tasks, follow these steps:

1. Ensure that the API server is running (`node app.js`).
2. Use a tool like cURL, Postman, or your preferred HTTP client to make requests to the API endpoint (`http://localhost:3000/manipulate-image`).
3. Test different combinations of URL parameters, including varying input parameters, different image formats, and edge cases.
4. Verify that the image manipulations are executed correctly and that error handling works as expected.

## Contact Information

- MailId - namdeomohit198@gmail.com
- Mob No. - 9131552292
- Portfolio : https://itsmohitnamdeo.github.io
- Linkedin : https://www.linkedin.com/in/mohit-namdeo
