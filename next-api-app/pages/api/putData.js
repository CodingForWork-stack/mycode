// pages/api/putData.js

// The handler function manages incoming HTTP requests.
export default function handler(req, res) {
    // Check if the request method is PUT
    if (req.method === 'PUT') {
        // Destructure data from the request body
        const { data } = req.body;
        // Send a JSON response confirming the update
        res.status(200).json({ message: 'PUT request received', data: data });
    } else {
        // Respond with a 405 (Method Not Allowed) if the method is not PUT
        res.status(405).end();
    }
}

