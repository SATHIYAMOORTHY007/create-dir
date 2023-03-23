var express = require('express')
var app = express()
var date_time = new Date()
const time_stamp = date_time.toISOString()
const fs = require('fs')

const path = require('path')
const http = require('http')

app.get('/', (req, res) => {
  const currentdate = JSON.stringify(new Date())
  const name = JSON.parse(currentdate).concat('.txt')
  newStr = name.split('') // or newStr = [...str];
  newStr.splice(10, 14)
  newStr = newStr.join('')
  console.log(newStr)
  fs.writeFileSync(
    path.join(__dirname, 'sampleFolder', newStr),
    currentdate,
    'UTF8',
  )
  fs.readFile(`./sampleFolder/${newStr}`, 'UTF-8', (err, data) => {
    res.send(data)
    res.end()
  })
})

app.listen(3000)
