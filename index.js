const express = require('express')
cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())

const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello from my first node server');
})
app.listen(port, () => {
    // console.log('listening to port', port);
});

const users = [
    { id: 0, name: "shabana,", email: "shabana@gmail.com", phone: "01754435435" },
    { id: 1, name: "mishu,", email: "shabana@gmail.com", phone: "01754156435" },
    { id: 2, name: "alamgir,", email: "shabana@gmail.com", phone: "01754156248" },
    { id: 3, name: "sumon,", email: "shabana@gmail.com", phone: "01754156248" },
    { id: 4, name: "jahangir,", email: "shabana@gmail.com", phone: "017541562435" },
]

// app.get('/users', (req, res)=>{
//     res.send(users)
// })

// app.get('/users/:id', (req, res)=>{
//     const id= req.params.id;
//     const user= users[id]
//     res.send(user)
// })

app.get('/users', (req, res)=>{
    const search = req.query.search
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

app.post('/users', (req, res)=>{
    const newUser=req.body;
    newUser.id= users.length;
    users.push(newUser);
    console.log('hiting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})