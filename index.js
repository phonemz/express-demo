import express  from "express";

const app = express()

app.use(express.urlencoded({ extended: true }))

const people = [
        { name: 'Flavio' },
        { name: 'Roger' }
]

app.get('/', (req, res) => {
        const page = `
        <html>
        <body>
        <h1>Enter a new person</h1>
        <form action='/person' method='POST'>
        <input type='text' name='name'>
        <button type='submit'>Submit</button>
        </form>
        <p>${people.map(person => `<li>${person.name}</li>`).join('')}</p>
        </body>
        </html>`

        res.send(page)
})

app.post('/person', (req, res) => {
        const name = req.body.name
        people.push({name: name})
      
        res.redirect('/')
      })

app.listen(3000, ()=> console.log('Server ready'))