// action.type
// "QUESTION_INFO"
// "POST_REPLIES"
// "ADD_REPLY"
// "ADD_QUESTION_LIKE"

// const state = {
//   users,
//   post,
// };

export const postReducer = (state, action) => {
  const updatedPost = { ...state.post };
  switch (action.type) {
    case "ADD_REPLY":
      const id = state.post.replies.length + 1;
      const randomId = Math.ceil(Math.random() * 6);

      const newReply = {
        id,
        authorId: randomId,
        likes: 0,
        content: action.payload.reply,
      };

      updatedPost.replies = [...state.post.replies, newReply];

      return { ...state, post: updatedPost };
    case "ADD_QUESTION_LIKE":
      updatedPost.likes = updatedPost.likes + 1;

      return { ...state, post: updatedPost };

    default:
      return "WHAT";
  }
};
