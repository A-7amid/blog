import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyData } from "../../dummy-data";

const PostsContext = createContext();

const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(dummyData);

  const createPost = useCallback((post) => {
    const newPost = { ...post, date: new Date().toDateString() };
    setPosts([newPost, ...posts]);
  });

  const values = useMemo(
    () => ({ posts, setPosts, createPost }),
    [posts, setPosts, createPost]
  );

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};

export { PostsProvider, usePosts };
