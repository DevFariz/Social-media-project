import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    postsData: [
      { id: 1, message: "Hello John", likesCount: 15 },
      { id: 2, message: "Hi David", likesCount: 10 },
    ],
    newPostText: "My new post"
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

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}


export default state;
