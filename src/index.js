const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.post('/signup', (req, res) => {
    res.send({accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRfaWQiOiJtZWxpdXotY2xpZW50LXNpdGUtcHJvZHVjdGlvbiIsImN1c3RvbWVyX2lkIjo1OTQwNjYzLCJvYXV0aF9lbnRpdHlfaWQiOjkyMDY5MjQsImRldmljZV9pZCI6MzY1NzYzNSwiZ3JvdXBzIjpbMyw1LDEwLDExLDEyXSwiaWF0IjoxNjMwNDE2NTM3LCJleHAiOjE2MzA0NTk3Mzd9.EsNwJ7TvTOynmD8M7lAMqfw0mLZSoIK2aii8otZQHq5gY2JIwXayu_g-"})
})

app.post('/auth', (req, res) => {
    res.send({accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJjbGllbnRfaWQiOiJtZWxpdXotY2xpZW50LXNpdGUtcHJvZHVjdGlvbiIsImN1c3RvbWVyX2lkIjo1OTQwNjYzLCJvYXV0aF9lbnRpdHlfaWQiOjkyMDY5MjQsImRldmljZV9pZCI6MzY1NzYzNSwiZ3JvdXBzIjpbMyw1LDEwLDExLDEyXSwiaWF0IjoxNjMwNDE2NTM3LCJleHAiOjE2MzA0NTk3Mzd9.EsNwJ7TvTOynmD8M7lAMqfw0mLZSoIK2aii8otZQHq5gY2JIwXayu_g-"})
})

app.post('/create/purchase', (req, res) => {
    res.send({statusCode: 200})
})

app.get('/statement', (req, res) => {
    res.send({
        balance: "R$ 472,38",
        statements: [
            {
                id: 1,
                date: "25/07/2021",
                value: "R$ 23,57"
            },
            {
                id: 2,
                date: "25/07/2021",
                value: "R$ 23,57"
            },
            {
                id: 3,
                date: "25/07/2021",
                value: "R$ 23,57"
            },
            {
                id: 4,
                date: "25/07/2021",
                value: "R$ 23,57"
            },
            {
                id: 5,
                date: "25/07/2021",
                value: "R$ 23,57"
            },
            {
                id: 6,
                date: "25/07/2021",
                value: "R$ 23,57"
            }
        ]
    })
})

app.get('/purchase', (req, res) => {
    res.send(
    [
        {
            id: 1,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 2,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 3,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 4,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 5,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 6,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 7,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 8,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 9,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 10,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 11,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 12,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 13,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 14,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 15,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 16,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 17,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 18,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 19,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 20,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 21,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 22,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
        {
            id: 23,
            amount: "R$ 200,00",
            date: '24/03/2000',
            percentageCashback: "5%",
            valueCashback: "R$ 10,00",
            status: 'Aprovado'
        },
    ]
    )
})


app.listen(3001)