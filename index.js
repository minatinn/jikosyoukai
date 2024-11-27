const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

  let person = {
    name:"上谷夏七汰",//自分の名前
    nickname: "かーくん",//ニックネーム     
    birthday:"6月25日",//誕生日
    zodiac:"かに座",// 星座

  };

  console.log("ニックネーム: " + person.nickname);
  console.log("星座: " + person.zodiac);
  console.log("誕生日: " + person.zodiac);

for (let key in person) {
  console.log(key + ": " + person[key]);
}

app.get(`/api`, (req,res) => {
  res.json({"msg": "Hello world"});

});