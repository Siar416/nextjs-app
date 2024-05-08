// Temp Data
const users = [
  {
    id: 1,
    name: "Siar",
  },
  {
    id: 2,
    name: "Franky",
  },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "Post from user 1",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2",
    body: "Post from user 2",
    userId: 2,
  },
  {
    id: 3,
    title: "Post 3",
    body: "Post from user 1",
    userId: 1,
  },
  {
    id: 4,
    title: "Post 4",
    body: "Post from user 1",
    userId: 1,
  },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
