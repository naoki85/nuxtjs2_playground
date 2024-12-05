import express from 'express'

const app = express()

const MOUNTAINS = [
  { title: "Mt.Fuji", continent: "Shizuoka", slug: "mtfuji", image: "https://t3.ftcdn.net/jpg/02/18/73/02/360_F_218730281_RItTMm6rx6erscMsbPrIc7iqcGAiv1tD.jpg" },
  { title: "Oyama", continent: "Kanagawa", slug: "oyama", image: "https://t4.ftcdn.net/jpg/01/57/63/77/360_F_157637760_DUNwfpHi7kZnk71xP5YSVypYVvKCvkVy.jpg" }
]

app.get("/mountains", function (_req, res) {
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.set({ "Content-Type": "application/json; charset=utf-8" });
  res.json(MOUNTAINS)
});

app.get("/mountains/:slug", function (req, res) {
  const slug = req.params.slug
  res.set({ "Access-Control-Allow-Origin": "*" });
  res.set({ "Content-Type": "application/json; charset=utf-8" });
  const mountain = MOUNTAINS.find((el) => el.slug === slug)
  res.json(mountain)
});

module.export = app

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
