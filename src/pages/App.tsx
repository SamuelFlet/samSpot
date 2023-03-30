import React from "react";
import { supabase } from "../supabaseClient";
import Head from "../components/Head";
import * as crypto from "crypto-js";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [session, setSession] = useState<any | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      var cipherSession = crypto.AES.encrypt(JSON.stringify(session), 'secretkey123').toString();
      sessionStorage.setItem("session", cipherSession);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Head {...session} />
      <div id="feat">
        <Outlet context={{ session: session }} />
      </div>
    </div>
  );
}

export default App;
