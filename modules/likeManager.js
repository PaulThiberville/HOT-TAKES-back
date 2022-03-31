module.exports.like = (userId, sauce) => {
      if (sauce.usersDisliked.includes(userId)) {
        sauce.usersDisliked = sauce.usersDisliked.filter((e) => e !== userId);
        sauce.usersLiked.push(userId);
        sauce.dislikes--;
        sauce.likes++;
      } else {
        sauce.usersLiked.push(userId);
        sauce.likes++;
      }
    return sauce
  }
  
module.exports.dislike = (userId, sauce) => {
    if (sauce.usersLiked.includes(userId)) {
      sauce.usersLiked = sauce.usersLiked.filter((e) => e !== userId);
      sauce.usersDisliked.push(userId);
      sauce.dislikes++;
      sauce.likes--;
    } else {
      sauce.usersDisliked.push(userId);
      sauce.dislikes++;
    }
  return sauce
}

module.exports.unlike = (userId, sauce) => {
  if (sauce.usersDisliked.includes(userId)) {
    sauce.usersDisliked = sauce.usersDisliked.filter((e) => e !== userId);
    sauce.dislikes--;
  } else if (sauce.usersLiked.includes(userId)) {
    sauce.usersLiked = sauce.usersLiked.filter((e) => e !== userId);
    sauce.likes--;
  }
  return sauce
}