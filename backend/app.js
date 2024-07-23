import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.get("/news", async (req, res) => {
  const { max, search } = req.query;
  const newsFileContent = await fs.readFile("./data/news.json");
  let news = JSON.parse(newsFileContent);

  if (search) {
    news = news.filter((haber) => {
      const searchableText = `${haber.type}`;
      return searchableText.toLowerCase().includes(search.toLowerCase());
    });
  }

  if (max) {
    news = news.slice(news.length - max, news.length);
  }

  res.json({
    news: news.map((haber) => ({
      id: haber.id,
      title: haber.title,
      details: haber.details,
      type: haber.type,
      description: haber.description,
      date: haber.date,
      image: haber.image,
    })),
  });
});

app.get("/news/images", async (req, res) => {
  const imagesFileContent = await fs.readFile("./data/images.json");
  const images = JSON.parse(imagesFileContent);

  res.json({ images });
});

app.get("/news/:id", async (req, res) => {
  const { id } = req.params;

  const newsFileContent = await fs.readFile("./data/news.json");
  const news = JSON.parse(newsFileContent);

  const haber = news.find((haber) => haber.id === id);

  if (!haber) {
    return res
      .status(404)
      .json({ message: `For the id ${id}, no haber could be found.` });
  }

  setTimeout(() => {
    res.json({ haber });
  }, 1000);
});

app.post("/news", async (req, res) => {
  const { haber } = req.body;

  if (!haber) {
    return res.status(400).json({ message: "haber is required" });
  }

  console.log(haber);

  if (
    !haber.title?.trim() ||
    !haber.details?.trim() ||
    !haber.type?.trim() ||
    !haber.description?.trim() ||
    !haber.date?.trim() ||
    !haber.image?.trim()
  ) {
    return res.status(400).json({ message: "Invalid data provided." });
  }

  const newsFileContent = await fs.readFile("./data/news.json");
  const news = JSON.parse(newsFileContent);

  const newhaber = {
    id: Math.round(Math.random() * 10000).toString(),
    ...haber,
  };

  news.push(newhaber);

  await fs.writeFile("./data/news.json", JSON.stringify(news));

  res.json({ haber: newhaber });
});

app.put("/news/:id", async (req, res) => {
  const { id } = req.params;
  const { haber } = req.body;

  if (!haber) {
    return res.status(400).json({ message: "haber is required" });
  }

  if (
    !haber.title?.trim() ||
    !haber.details?.trim() ||
    !haber.type?.trim() ||
    !haber.description?.trim() ||
    !haber.date?.trim() ||
    !haber.image?.trim()
  ) {
    return res.status(400).json({ message: "Invalid data provided." });
  }

  const newsFileContent = await fs.readFile("./data/news.json");
  const news = JSON.parse(newsFileContent);

  const haberIndex = news.findIndex((haber) => haber.id === id);

  if (haberIndex === -1) {
    return res.status(404).json({ message: "haber not found" });
  }

  news[haberIndex] = {
    id,
    ...haber,
  };

  await fs.writeFile("./data/news.json", JSON.stringify(news));

  setTimeout(() => {
    res.json({ haber: news[haberIndex] });
  }, 1000);
});

app.delete("/news/:id", async (req, res) => {
  const { id } = req.params;

  const newsFileContent = await fs.readFile("./data/news.json");
  const news = JSON.parse(newsFileContent);

  const haberIndex = news.findIndex((haber) => haber.id === id);

  if (haberIndex === -1) {
    return res.status(404).json({ message: "haber not found" });
  }

  news.splice(haberIndex, 1);

  await fs.writeFile("./data/news.json", JSON.stringify(news));

  setTimeout(() => {
    res.json({ message: "haber deleted" });
  }, 1000);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
