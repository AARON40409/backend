const express = requuire('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        mess: 'hello backend'
    });
});
const port = 3000
app.listen(port);