import { supabase } from "../supabaseClient";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["github"]}
        />
      </header>
    </div>
  );
}
