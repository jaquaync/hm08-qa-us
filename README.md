PROJECT 8
The task for this project is to write automated tests to test the Urban Routes app. I wrote 8 tests to cover the full process of ordering a taxi. I used FireFox as the browser for the tests. I used Visual Studio Code to write and run the tests.

The tests include:
1. Setting the address
2. Selecting the supportive plan
3. Filling in the phone number
4. Adding a credit card
5. Writing a message for the driver
6. Ordering a blanket and handkerchiefs
7. Ordering 2 ice creams
8. Making sure the car search modal appears.

I used a page.js file to store the modules that I would import into the createAnOrder file. I got the css selectors from FireFox by inspecting the various elements of the app that needed to be included in the tests. I also stored functions in the page.js and the helper.js files to import into the tests, which helped shorten the code for the tests in the createAnOrder file. 

When writing the tests I started by importing the url from the wdio.conf file, then importing the css selectors into the code that I needed for each test. After the tests were written, run, and passed; I exported the tests to the page.js file and turned them into functions, so I could use just the function name which contained the code for the tests instead of using the entire code. 

I wrote checks for some of the tests to make sure certain elements were displayed or existed after the tests were run.

The tests were run using npm run wdio