import express from 'express'

const app = express()

app.get("/mountains", function (_req, res) {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.set({ "Content-Type": "application/json; charset=utf-8" });
  res.json([
    { title: "Mt.Fuji", continent: "Shizuoka", slug: "mtfuji" },
    { title: "Oyama", continent: "Kanagawa", slug: "oyama" }
  ])
});

module.export = app

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
