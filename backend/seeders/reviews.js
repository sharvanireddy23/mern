const ObjectId = require("mongodb").ObjectId

const reviews = [
    {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 5,
    user: { _id: new ObjectId(), name: "sharvani reddy" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 5,
    user: { _id: new ObjectId(), name: "sharvani reddy" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 5,
    user: { _id: new ObjectId(), name: "sharvani reddy" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 4,
    user: { _id: new ObjectId(), name: "sharvani reddy" },
  },
  {
    comment: "Review. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    rating: 3,
    user: { _id: new ObjectId(), name: "sharvani reddy" },
  },
]

module.exports = reviews
