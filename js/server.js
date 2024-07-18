const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for articles
const articleSchema = new mongoose.Schema({
    title: String,
    summary: String,
    content: String
});

const Article = mongoose.model('Article', articleSchema);

app.use(cors());
app.use(express.json());

// API endpoint to get all articles
app.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

// API endpoint to get a single article by ID
app.get('/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.json(article);
});

// API endpoint to create a new article
app.post('/articles', async (req, res) => {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
