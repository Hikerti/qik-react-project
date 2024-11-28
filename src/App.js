import React, {useState} from "react";
import './styles/App.css';
import List from "./companents/List";
import PostList from "./companents/PostList";
import ButtonPost from "./companents/UI/Button/ButtonPost";
import InputPost from "./companents/UI/Inputs/InputPost";
import FormCreate from "./companents/UI/FormCreateList/FormCreate";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Содержимое'},
    {id: 2, title: 'Javascript 2', body: 'Содержимое'},
    {id: 3, title: 'Javascript 3', body: 'Содержимое'},
  ])


  return (   
    <div className="App">
    <FormCreate/>
    <PostList posts={posts} title={'Список 1'}/>
    </div>
  );
}

export default App;
