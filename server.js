const express = require('express');
const app = express();
const PORT = 3000
const YAML = require("js-yaml");
const fs = require('fs');

const raw = fs.readFileSync('test.yml');
const data = YAML.load(raw);
//console.log(data.servers.url)
 data.servers.forEach(element => {
    //  console.log(element)
 }); 

 let keys = Object.entries(data.paths);
 keys.forEach(([key,value])=> {
   console.log(key,value['get']['summary'])
   // let reqData=Object.entries(value)
   // reqData.forEach(([key,value]) => {
   //    console.log(key,value['summary'],value['description'])
   // });
 });
