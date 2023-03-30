import { supabase } from "../supabaseClient";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

export default function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          theme="default"
          appearance={{ theme: ThemeSupa }}
          providers={["github"]}
        />
      </header>
    </div>
  );
}
