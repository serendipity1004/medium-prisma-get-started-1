const express = require('express');
const bodyParser = require('body-parser');
const {prisma} = require('./generated/prisma-client');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/all/users', async (req, res) => {
    const allUsers = await prisma.users();

    res.json({
        success: true,
        data: allUsers
    });
});

app.post('/new/user', async (req, res) => {
    const newUser = await prisma.createUser({
        name: req.body.name
    });

    res.json({
        success: true,
        data: newUser
    });
});

app.listen(3000, () => {
    console.log('server started at 3000');
});