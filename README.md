# CAPTCHA Solver

This is a simple web application that loads a captcha image from a URL, and uses a backend API to attempt to solve the captcha.

## Features
- Enter a URL to load a captcha image (defaults provided).
- View the loaded captcha.
- Click 'Solve' to get the predicted text (currently a dummy implementation).

## How to run
1. Clone the repository.
2. Install dependencies:

```bash
npm install
```
3. Start the server:

```bash
npm start
```
4. Open `http://localhost:3000` in your browser.

## Notes
- The current backend implementation returns a placeholder text ('ABCD123') for the captcha. Integration with an OCR API (like Tesseract.js or external OCR services) can be added to perform real solving.
- To use your own captcha images, simply update the URL in the input box.

## License

MIT License

---

The MIT License (MIT)

Copyright (c) 2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
