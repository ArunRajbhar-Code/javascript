import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("server is ready")

})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id": 2,
            "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
            "id": 4,
            "joke": "What do you call fake spaghetti? An impasta!"
        },
        {
            "id": 5,
            "joke": "Why did the bicycle fall over? Because it was two-tired!"
        }
    ]
    res.send(jokes)

})
app.listen(port, () => {
    console.log('server is listening at port ' + port);

})