const express = require("express")
const app = express()

const db = require("./db")
app.use(express.json())
app.use(express.static(__dirname + "/src"))
app.use(express.urlencoded({ extended: true }))

const nunjucks = require("nunjucks")
nunjucks.configure("pages", {
    express: app,
    noCache: true
})

app.get("/", (req, res) => {
    db.all(`SELECT * FROM transactions`, function(err, rows) {
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados!")
        }

        const reversedTransactions = [...rows].reverse()

        let lastTransactions = []

        for(let transaction of reversedTransactions) {
            lastTransactions.push(transaction)
        }

        return res.render("index.html", { transactions: lastTransactions })
    })
})

app.post("/", function(req, res) {
    const { description, amount, date } = req.body
    const reversedDate = date.replace(/-/g, "/").split("/").reverse().join("/")
    const query = `
        INSERT INTO transactions(
            description,
            amount,
            date
        ) VALUES (?, ?, ?)
    `

    const values = [description, amount, reversedDate]

    db.run(query, values, function(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        return res.redirect("/")
    })
})

app.get("/:id", (req, res) => {
    db.all(`DELETE FROM transactions WHERE id = ${req.params.id}`, function(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no banco de dados")
        }

        console.log("transação número " + req.params.id + " foi deletado")
        return res.redirect("/")
    })
})

// app.get("/edit/:id", (req, res) => {
//     db.all(`SELECT * FROM transactions WHERE id = ${req.params.id}`, function(err, rows) {
//         if(err) {
//             console.log(err)
//             return res.send("Erro no banco de dados")
//         }
//         console.log(rows)
//         console.log(`editando transação com id ${req.params.id}`)
//     })
// })

app.listen(process.env.PORT || 3333, () => console.log("http://127.0.0.1:3333 ou htttp://localhost:3333"))