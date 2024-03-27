const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        mess: 'Hello backend'
    });
});
const port = 3000
app.listen(port);