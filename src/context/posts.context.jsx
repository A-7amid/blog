import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { dummyPosts } from "../../dummy-posts";

const PostsContext = createContext();

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(dummyPosts);
  const [isFilter, setIsFilter] = useState(false);

  const createPost = useCallback(
    (post) => {
      const newPost = { ...post, date: new Date().toDateString() };
      setPosts([newPost, ...posts]);
    },
    [posts, setPosts]
  );

  const handleSearch = useCallback(
    (inpVal) => {
      const searchTerm = inpVal.toLowerCase().trim();
      console.log(searchTerm);
      if (!searchTerm || searchTerm.length === 0) {
        setPosts(dummyPosts);
        setIsFilter(false);
        return;
      }
      setPosts(
        posts.filter((post) => {
          return (
            post.title.toLowerCase().trim().includes(inpVal) ||
            post.userName.toLowerCase().trim().includes(inpVal)
          );
        })
      );
      setIsFilter(true);
    },
    [posts, setPosts]
  );

  const values = useMemo(
    () => ({
      posts,
      setPosts,
      createPost,
      handleSearch,
      isFilter,
    }),
    [posts, setPosts, createPost, isFilter, handleSearch]
  );

  return (
    <PostsContext.Provider value={values}>{children}</PostsContext.Provider>
  );
};
