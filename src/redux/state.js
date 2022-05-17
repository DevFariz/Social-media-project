import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello John", likesCount: 15 },
      { id: 2, message: "Hi David", likesCount: 10 },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Ali" },
      { id: 2, name: "Tofiq" },
      { id: 3, name: "Natiq" },
      { id: 4, name: "Fikret" },
      { id: 5, name: "Namiq" },
      { id: 6, name: "Elxan" },
    ],
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "Hi!" },
      { id: 3, message: "What are you doing" },
    ],
  },
  sidebar: {
    
  }
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  }

  state.profilePage.postsData.push(newPost);
  rerenderEntireTree(state);
}

export default state;
