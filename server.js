const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(Server running at http://localhost:${PORT});
});


