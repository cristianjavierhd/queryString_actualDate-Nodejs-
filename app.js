const http = require('http');
const url = require('url');
const querystring = require('querystring');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const parsedQuery = querystring.parse(parsedUrl.query);
  
    if (!parsedQuery.year || !parsedQuery.month || !parsedQuery.day) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);
        const redirectUrl = `http://localhost:8080?year=${year}&month=${month}&day=${day}`;
      res.writeHead(302, { 'Location': redirectUrl });
      res.end();
      return;
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    const responseText = `La fecha actual es:\nYear:${year}\nMonth:${month}\nDay:${day}`;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(responseText);
    res.end();
    }).listen(8080);