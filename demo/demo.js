const fs = require('fs')
const path = require('path')
const os = require('os')
const EventEmitter = require('events')
const http = require('http')

console.log(os.homedir())

// let free_memory = os.freemem();
// let free_mem_in_kb = free_memory/1024;
// let free_mem_in_mb = free_mem_in_kb/1024;
// let free_mem_in_gb = free_mem_in_mb/1024;
//
// free_mem_in_kb = Math.floor(free_mem_in_kb);
// free_mem_in_mb = Math.floor(free_mem_in_mb);
// free_mem_in_gb = Math.floor(free_mem_in_gb);
//
// free_mem_in_mb = free_mem_in_mb%1024;
// free_mem_in_kb = free_mem_in_kb%1024;
// free_memory = free_memory%1024;
//
// console.log("Свободно оперативной памяти: " + free_mem_in_gb + "ГБ "
//     + free_mem_in_mb + "MБ " + free_mem_in_kb
//     + "KБ и " + free_memory + "Байт");
// const server = http.createServer((rew, res) => {
//     res.end('hello node')
// })
//
// server.listen(3000, () => {
//     console.log('Сервер запущен')
// })

// const emitter = new EventEmitter()
//
// emitter.on('onClick', data => {
//     console.log(data)
// })
//
// emitter.emit('onClick', [1,2,3,4,5])
// console.log(os.totalmem())
// fs.mkdir(path.join(__dirname, 'test'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log('Папка создана')
// })
const filePath = path.join(__dirname, 'test', 'test.txt')
//
// fs.writeFile(filePath, 'Hello node', err => {
//     if (err) {
//         throw err
//     }
//     console.log('File created')
// })

// fs.readFile(filePath, 'utf-8',(err, ctx) => {
//     console.log(ctx)
// })
