import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Posts() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        let { data: Posts } = await supabase.from("Posts").select("*");
        setData(Posts);
      } catch (error) {
        alert("Error");
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, []);

  while (loading === false) {
    return (
      <div>
        {data.map((data: any) => (
          <div>
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={data.id}
              key={data.id}
            >
              {data.title}
            </Link>
          </div>
        ))}
      </div>
    );
  }
  return <div>Loading...</div>;
}
