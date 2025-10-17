# Captcha Solver Web Application

This simple web app fetches a captcha image from a specified URL query parameter (?url=...), or defaults to a sample base64-encoded image if no parameter is provided. It then simulates solving the captcha by attempting various guesses (simulated brute-force). 

## Features:
- Load captcha image via URL parameter or default image
- Interactive form to input a different URL
- Simulated captcha solving process with progress updates

## How to Run:
1. Save the provided files together in a folder.
2. Open `index.html` in your web browser.
3. To specify a captcha image URL, append `?url=YOUR_URL` to the URL in your browser address bar.
4. You can also input a custom URL or data URI in the form and click "Load and Solve".

## Note:
- The solving process is simulated and for demonstration purposes only.
- The default image is embedded as a base64-encoded PNG.

---

## License

This project is licensed under the MIT License.


## License file: `LICENSE`

