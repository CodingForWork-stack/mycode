// pages/api/postData.js

// The handler function manages incoming HTTP requests.
export default function handler(req, res) {
    // Check if the request method is POST
    if (req.method === 'POST') {
        // Destructure data from the request body
        const { data } = req.body;
        // Send a JSON response with the received data
        res.status(200).json({ message: 'POST request received', data: data });
    } else {
        // Respond with a 405 (Method Not Allowed) if the method is not POST
        res.status(405).end();
    }
}

