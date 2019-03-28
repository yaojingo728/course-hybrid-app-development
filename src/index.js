import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router,Route,Link,NavLink,Redirect,Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CustomLink from './contaniners/CustomLink';
import AuthExample from './auth/AuthExample';
import Counter from './Counter'
import ToDoList from './ToDoList';

ReactDOM.render(
    // <Router>
    //     <app/>
    // </Router>,
    <div style={{padding:'30px'}}>
        <Counter/>
        <ToDoList/>
    </div>,
    document.getElementById('root')
);
