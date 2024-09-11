// pages/api/getData.js

// The handler function manages incoming HTTP requests.
export default function handler(req, res) {
    // Check if the request method is GET
    if (req.method === 'GET') {
        // Send a JSON response with a status of 200 (OK)
        res.status(200).json({ message: 'GET request received' });
    } else {
        // Respond with a 405 (Method Not Allowed) if the method is not GET
        res.status(405).end();
    }
}

