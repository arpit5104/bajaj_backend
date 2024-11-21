const express = require('express');
const { isPrime, findHighestLowercase } = require('../helpers/utils');
const router = express.Router();

// POST endpoint
router.post('/', (req, res) => {
    try {
        const { data, file_b64 } = req.body;

        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({ is_success: false, error: 'Invalid input' });
        }

        // Extract numbers and alphabets from the data
        const numbers = data.filter((item) => !isNaN(item));
        const alphabets = data.filter((item) => isNaN(item));

        // Find the highest lowercase alphabet
        const highestLowercase = findHighestLowercase(alphabets);

        // Check if any number is prime
        const primeFound = numbers.some((num) => isPrime(Number(num)));

        // Default values for file validation (simulate file handling)
        let fileDetails = {
            file_valid: false,
            file_mime_type: null,
            file_size_kb: null,
        };

        // Simulate file validation if `file_b64` is provided
        if (file_b64) {
            try {
                const buffer = Buffer.from(file_b64, 'base64');
                fileDetails.file_valid = true;
                fileDetails.file_size_kb = (buffer.length / 1024).toFixed(2);  // Convert bytes to KB
                // Simulate MIME type detection (simple check)
                fileDetails.file_mime_type = 'image/png'; // Assume it's an image for this example
            } catch (err) {
                fileDetails.file_valid = false;
            }
        }

        // Prepare the response data
        const response = {
            is_success: true,
            user_id: 'john_doe_17091999',
            email: 'john@xyz.com',
            roll_number: 'ABCD123',
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercase,
            is_prime_found: primeFound,
            ...fileDetails,
        };

        // Return the formatted response
        res.json(response);
    } catch (error) {
        res.status(500).json({ is_success: false, error: 'Server error' });
    }
});

// GET endpoint for checking operation code
router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
