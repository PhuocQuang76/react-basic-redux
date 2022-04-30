import React from "react";
import Header from "./components/Header";
import CounterClassBase from "./components/CounterClassBase";
import Counter from "./components/Counter";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import {useSelector} from "react-redux";


function App() {
    const isAuth = useSelector((state)=> state.auth.isAuthenticated)
  return (
      <fragment>
        <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile />}
        <Counter />

        {/*<CounterClassBase />*/}
      </fragment>

  );
}

export default App;