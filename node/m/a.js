const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password, confirm_password, email } = req.body;

    // validate the input data
    if (!username || !password || !confirm_password || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password !== confirm_password) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    // save the user data to the database
    // ...

    res.status(200).json({ message: 'User registered successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
