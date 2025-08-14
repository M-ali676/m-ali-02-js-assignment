// Program 1: Check character type
        function checkCharacter() {
            const char = document.getElementById('charInput').value;
            const output = document.getElementById('charOutput');
            if (char.length !== 1) {
                output.textContent = 'Please enter exactly one character';
                return;
            }
            const ascii = char.charCodeAt(0);
            if (ascii >= 48 && ascii <= 57) {
                output.textContent = 'Input is a number';
            } else if (ascii >= 65 && ascii <= 90) {
                output.textContent = 'Input is an uppercase letter';
            } else if (ascii >= 97 && ascii <= 122) {
                output.textContent = 'Input is a lowercase letter';
            } else {
                output.textContent = 'Input is neither a number nor a letter';
            }
        }

        // Program 2: Compare two integers
        function compareNumbers() {
            const num1 = parseInt(document.getElementById('num1').value);
            const num2 = parseInt(document.getElementById('num2').value);
            const output = document.getElementById('compareOutput');
            if (isNaN(num1) || isNaN(num2)) {
                output.textContent = 'Please enter valid numbers';
            } else if (num1 > num2) {
                output.textContent = `${num1} is larger than ${num2}`;
            } else if (num2 > num1) {
                output.textContent = `${num2} is larger than ${num1}`;
            } else {
                output.textContent = 'Both numbers are equal';
            }
        }

        // Program 3: Check number sign
        function checkNumberSign() {
            const number = parseFloat(document.getElementById('numberInput').value);
            const output = document.getElementById('numberOutput');
            if (isNaN(number)) {
                output.textContent = 'Please enter a valid number';
            } else if (number > 0) {
                output.textContent = 'Number is positive';
            } else if (number < 0) {
                output.textContent = 'Number is negative';
            } else {
                output.textContent = 'Number is zero';
            }
        }

        // Program 4: Check if character is vowel
        function checkVowel() {
            const char = document.getElementById('vowelInput').value.toLowerCase();
            const output = document.getElementById('vowelOutput');
            if (char.length !== 1) {
                output.textContent = 'Please enter exactly one character';
                return;
            }
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                output.textContent = 'True: Character is a vowel';
            } else {
                output.textContent = 'False: Character is not a vowel';
            }
        }

        // Program 5: Password validation
        const correctPassword = 'secret123';
        function validatePassword() {
            const password = document.getElementById('passwordInput').value;
            const output = document.getElementById('passwordOutput');
            if (!password) {
                output.textContent = 'Please enter your password';
            } else if (password === correctPassword) {
                output.textContent = 'Correct! The password you entered matches the original password';
            } else {
                output.textContent = 'Incorrect password';
            }
        }

        // Program 6: Fixed greeting program
        function showGreeting() {
            let greeting;
            const hour = 13; // Fixed hour as per problem
            if (hour < 18) {
                greeting = "Good day";
            } else {
                greeting = "Good evening";
            }
            document.getElementById('greetingOutput').textContent = greeting;
        }

        // Program 7: Time-based greeting
        function timeGreeting() {
            const time = document.getElementById('timeInput').value;
            const output = document.getElementById('timeOutput');
            const hour = parseInt(time.substring(0, 2));
            const minute = parseInt(time.substring(2, 4));
            if (isNaN(hour) || isNaN(minute) || hour > 23 || minute > 59 || time.length !== 4) {
                output.textContent = 'Please enter a valid time in 24-hour format (e.g., 1900)';
                return;
            }
            if (hour >= 5 && hour < 12) {
                output.textContent = 'Good morning';
            } else if (hour >= 12 && hour < 17) {
                output.textContent = 'Good afternoon';
            } else if (hour >= 17 && hour < 21) {
                output.textContent = 'Good evening';
            } else {
                output.textContent = 'Good night';
            }
        }
