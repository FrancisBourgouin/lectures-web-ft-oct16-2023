import { useReducer, useState } from "react";

import Header from "./components/Header";
import Question from "./components/Question";
import ReplyForm from "./components/ReplyForm";
import ReplyList from "./components/ReplyList";

import { usersObj } from "./data/userData";
import { forumPost } from "./data/postData";

import "./App.css";
import { postReducer } from "./reducers/postReducer";

function App() {
  const initialState = { users: usersObj, post: forumPost };
  const [state, dispatch] = useReducer(postReducer, initialState);

  const replySubmit = (reply) => dispatch({ type: "ADD_REPLY", payload: { reply } });

  const getQuestionInformation = () => {
    const { authorId, question } = state.post;

    const authorName = state.users[authorId].name;
    const authorProfile = state.users[authorId].profile_url;

    return {
      authorName,
      authorProfile,
      question,
    };
  };

  const getRepliesFromPost = () => {
    const replies = state.post.replies.map((reply) => ({
      ...reply,
      authorName: state.users[reply.authorId].username,
      authorProfile: state.users[reply.authorId].profile_url,
    }));

    return replies;
  };
  return (
    <>
      <Header />
      <main>
        <Question {...getQuestionInformation()} />
        <ReplyList replies={getRepliesFromPost()} />
        <ReplyForm onSubmit={replySubmit} />
      </main>
    </>
  );
}

export default App;
