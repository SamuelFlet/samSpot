import React from "react";
import { supabase } from "../supabaseClient";
import Head from "../components/Head";
import Login from "./Login";
import { Outlet, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    async function getUserData() {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
      });
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {session ? <Head {...session} /> : <div></div>}
      <div id="feat">{!session ? <Login /> : <Outlet />}</div>
    </div>
  );
}
export function useSession() {
  return useOutletContext<any | null>();
}
export default App;
