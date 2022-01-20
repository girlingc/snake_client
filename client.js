const net = require('net');
const host = '165.227.47.243'
const port = 50541
const connect = function() {
  const conn = net.createConnection({
    host,
    port
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to the server!");
    conn.write("Name: BRR")
  //   setInterval(func = () => {
  //     conn.write("Move: up")
  //   }, 1000);

  //   setInterval(func = () => {
  //     conn.write("Move: right")
  //   }, 500);
  // });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

const conn = connect();

module.exports = { connect }