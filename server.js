const express = require('express');
const PORT = process.env.PORT || 5000;

const app = express();

// Serve static files
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
