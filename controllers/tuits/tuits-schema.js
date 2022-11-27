import mongoose from 'mongoose';
const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  dislikes: Number,
  liked: Boolean,
  userName: String,
  handle: String,
  image: String,
  time: String
}, {collection: 'tuits'});
export default schema;

