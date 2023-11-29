import { useState } from "react";

import Header from "./components/Header";
import Question from "./components/Question";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";

import { usersObj } from "./data/userData";
import { forumPost } from "./data/postData";

import "./App.css";

function App() {
  const [users, setUsers] = useState(usersObj);
  const [post, setPost] = useState(forumPost);

  const getQuestionInformation = () => {
    const { authorId, question } = post;

    const authorName = users[authorId].name;
    const authorProfile = users[authorId].profile_url;

    return {
      authorName,
      authorProfile,
      question,
    };
  };

  const getRepliesFromPost = () => {
    const replies = post.replies.map((reply) => ({
      ...reply,
      authorName: users[reply.authorId].username,
      authorProfile: users[reply.authorId].profile_url,
    }));

    return replies;
  };

  const addReply = (replyText) => {
    const id = post.replies.length + 1;
    const randomId = Math.ceil(Math.random() * 6);

    const newReply = { id, authorId: randomId, likes: 0, content: replyText };

    const updatedPost = { ...post };
    updatedPost.replies = [...post.replies, newReply];

    setPost(updatedPost);
  };

  const addQuestionLike = () => {
    const updatedPost = { ...post };
    updatedPost.likes = updatedPost.likes + 1;

    setPost(updatedPost);
  };

  return (
    <>
      <Header />
      <main>
        <Question {...getQuestionInformation()} />
        <ReplyList replies={getRepliesFromPost()} />
        <ReplyForm onSubmit={addReply} />
      </main>
    </>
  );
}

export default App;
