import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../styles/Post.css"

export default function Post() {
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  let param = useParams();

  useEffect(() => {
    async function getPost() {
      try {
        let { data: Post } = await supabase
          .from("Posts")
          .select("*")
          .eq("id", param.postID);
        setPost(Post);
      } catch (error) {
        alert("Error");
      } finally {
        setLoading(false);
      }
    }
    getPost();
  }, []);

  while (loading === false) {
    return (
      <div>
        {post.map((post: any) => (
          <div className="p-20">
          <article className="p-4 flex flex-col post-container">
            <div className="text-left post-title">
              <h1>{post.title}</h1>
            </div>
            <div className="tt">
              <img alt="article" src={post.img} />
            </div>
            <div className="p-2 prose lg:prose-xl">
              <ReactMarkdown children={post.content} />
            </div>
          </article>
        </div>
        ))}
      </div>
    );
  }

  return <div>Loading...</div>;
}
