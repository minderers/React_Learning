import React from "react";
import "./App.css";
import CounterUseState from "./components/CounterUseState";
import Profile from "./components/Profile";
import TodoList from "./components/TodoList";
import UserProvider from "./components/UserProvider";
import UserProfile from "./components/UserProfile";
import UpdateUser from "./components/UpdateUser";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/actions";
import CounterZustand from "./components/CounterZustand";
const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>使用useState管理状态</h2>
        <CounterUseState />
        <Profile />
        <TodoList />
      </div>
      <div>
        <h2>使用useContext管理状态</h2>
        <UserProvider>
          <UserProfile />
          <UpdateUser />
        </UserProvider>
      </div>
      <div>
        <h2>使用Redux管理</h2>
        <h1>计数器: {count}</h1>
        <button onClick={() => dispatch(increment())}>增加</button>
        <button onClick={() => dispatch(decrement())}>减少</button>
      </div>
      <div>
        <h2>使用zustand管理状态</h2>
        <CounterZustand />
      </div>
    </div>
  );
};

export default App;
