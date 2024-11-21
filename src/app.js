const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhl');

const app = express();
const cors = require('cors');
app.use(cors());


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
