import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import User from "./user.js";

const Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: "userId",
  },
});
Post.belongsTo(User, {
  foreignKey: { allowNull: false, name: "userId" },
  onDelete: "CASCADE",
});

export default Post;
