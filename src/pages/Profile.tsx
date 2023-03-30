import { supabase } from "../supabaseClient";
import * as crypto from "crypto-js";
import { useEffect, useState } from "react";

function Profile() {
  var ciphertext = sessionStorage.getItem("session") || "{}";
  var bytes = crypto.AES.decrypt(ciphertext, "secretkey123");
  var session = JSON.parse(bytes.toString(crypto.enc.Utf8));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    async function getProfile() {
      setLoading(true);
      const { user } = session;

      let { data, error } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error) {
        console.warn(error);
      } else if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }

      setLoading(false);
    }

    getProfile();
  }, [session]);
  return (
    <div>
      {username}<br></br>
      {website}<br></br>
      {avatar_url}
      <p>poop</p>
    </div>
  );
}

export default Profile;
