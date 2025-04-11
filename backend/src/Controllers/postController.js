const Post = require("../Models/Post")

exports.createPost = async (req, res) => {
    try {
      const { titulo, conteudo } = req.body;
      const post = await Post.create({ titulo, conteudo, userId: req.user.id });
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  exports.getPosts = async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.updatePost = async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, conteudo } = req.body;
      const post = await Post.findByPk(id);
      if (!post || post.userId !== req.user.id) return res.status(403).json({ error: 'Ação não permitida' });
      await post.update({ titulo, conteudo });
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findByPk(id);
      if (!post || post.userId !== req.user.id) return res.status(403).json({ error: 'Ação não permitida' });
      await post.destroy();
      res.json({ message: 'Post deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };