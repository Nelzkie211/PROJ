const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

// create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'my_db'
})
db.connect(err=>{
  if (err) {
    throw err
    return
  }
  console.log('connection startedd')

})

const app = express()
app.use(bodyParser.json())

// create table
app.get('/createtable', (req,res)=>{
  let sql = 'create table posts(id int auto_increment, title varchar(255), body varchar(255), primary key(id))'
  db.query(sql, (err, result)=>{
    if (err) throw err
    console.log(result)
    res.send('posts table created')
  })
})


// select posts
app.get('/selectposts', (req, res)=>{
  let sql = 'select * from posts'
  let query = db.query(sql, (err, results) => {
    if (err) throw err
    console.log(results)
    res.send(results)
  })
})

// select 1
app.get('/selectposts/:id', (req, res)=>{
  let id = req.params.id
  let sql = 'select * from posts where id = ?'
  let query = db.query(sql, id, (err, results) => {
    if (err) throw err
    console.log(results)
    res.send(results)
  })
})

// updated 1
app.get('/updateposts/:id', (req, res)=>{
  let id = req.params.id
  let newtitle = 'new title'
  let sql = `update posts set title = '${newtitle}' where id = ?`
  let query = db.query(sql, id, (err, results) => {
    if (err) throw err
    console.log(results)
    res.send(results)
  })
})

// delete 1
app.get('/deleteposts/:id', (req, res)=>{
  let id = req.params.id
  let sql = `delete from posts where id = ?`
  let query = db.query(sql, id, (err, results) => {
    if (err) throw err
    console.log(results)
    res.send(results)
  })
})

app.listen('5000', ()=> {console.log('serever started at port 5000')})