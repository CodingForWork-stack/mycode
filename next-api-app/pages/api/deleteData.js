// pages/api/deleteData.js

// The handler function manages incoming HTTP requests.
export default function handler(req, res) {
    // Check if the request method is DELETE
    if (req.method === 'DELETE') {
        // Send a JSON response confirming the deletion
        res.status(200).json({ message: 'DELETE request received' });
    } else {
        // Respond with a 405 (Method Not Allowed) if the method is not DELETE
        res.status(405).end();
    }
}

