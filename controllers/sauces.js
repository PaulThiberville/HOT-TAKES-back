const Sauce = require("../models/sauce");
const fs = require("fs");
const {getImageUrl, deleteImageByUrl} = require("../modules/imageManager");
const {like, dislike, unlike} = require("../modules/likeManager");


exports.createSauce = (req, res) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: getImageUrl(req)
  });
  sauce.likes = 0;
  sauce.dislikes = 0;
  sauce.usersLiked = [];
  sauce.usersDisliked = [];
  sauce
    .save()
    .then(() => res.status(201).json({ message: "Sauce enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.likeSauce = (req, res) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      switch (req.body.like) {
        case 0:
          sauce = unlike(req.auth.userId, sauce);
          break;
        case 1:
          sauce = like(req.auth.userId, sauce);
          break;
        case -1:
          sauce = dislike(req.auth.userId, sauce);
          break;
        default:
          res.status(400).json({ message: "Erreur dans la valeur du like !" });
          break;
      }
      sauce
        .save()
        .then(() => res.status(200).json({ message: "Likes mis à jour !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

exports.getAllSauces = (req, res) => {
  Sauce.find()
    .then((sauces) => {
      res.status(200).json(sauces);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      res.status(200).json(sauce);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

exports.modifySauce = (req, res) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      // check if user own this sauce
      if (sauce.userId === req.auth.userId) {
        const sauceObject = req.file
          ? {
              ...JSON.parse(req.body.sauce),imageUrl: getImageUrl(req)             
            }
          : { ...req.body };
        deleteImageByUrl(sauce.imageUrl);
        Sauce.updateOne(
          { _id: req.params.id },
          { ...sauceObject, _id: req.params.id }
        )
          .then(() => res.status(200).json({ message: "Sauce modifiée !" }))
          .catch((error) => res.status(400).json({ error }));
      } else {
        res
          .status(401)
          .json({ message: "Cette sauce ne vous appartient pas !" });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};

exports.deleteSauce = (req, res) => {
  Sauce.findOne({
    _id: req.params.id,
  })
    .then((sauce) => {
      // check if user own this sauce
      if (sauce.userId === req.auth.userId) {
        deleteImageByUrl(sauce.imageUrl);
        Sauce.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: "Sauce supprimée !" }))
            .catch((error) => res.status(400).json({ error }));
      } else {
        res
          .status(401)
          .json({ message: "Cette sauce ne vous appartient pas !" });
      }
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
};
