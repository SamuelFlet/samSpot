import { supabase } from "../supabaseClient";

function Success() {

  async function signOut(){
    const {error} = await supabase.auth.signOut();
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={signOut}>Sign Out</button>
      </header>
    </div>
  );
}

export default Success;
