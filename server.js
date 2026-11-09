const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const PORT = process.env.PORT || 3000;
const file = path.join(__dirname, 'index.html');
http.createServer((req,res)=>{
  if(req.method !== 'GET' || !['/','/index.html'].includes(req.url.split('?')[0])) {res.writeHead(404); return res.end('Not found');}
  res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Content-Security-Policy':"default-src 'self' 'unsafe-inline'; img-src 'self' data:;"});
  fs.createReadStream(file).pipe(res);
}).listen(PORT,'0.0.0.0',()=>console.log(`NOIR BLOOD running on ${PORT}`));
