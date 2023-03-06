import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import removeMd from "remove-markdown";
function Featured() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await supabase.rpc("get_latest");
        setData(data);
        console.log(data);
      } catch (error) {
        alert("Error");
      } finally {
        setLoading(false);
      }
    }
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  while (loading === false) {
    const date = new Date(data.created_at);
    const lol = `${date}`;
    const format = lol.split(" ").slice(1, 4).join(" ");

    const con = data.content;
    const tent = con.split(" ").slice(0, 15).join(" ");
    const plain = removeMd(tent);
    return (
      <div>
        <div className="container center border border-black">
          <div className="tt">
            <img alt="article" src={data.img} />
          </div>
          <div className="p-4 text-left">
            <div className="flex uu">
              {format} &bull; {data.postedBy}
            </div>
            <div>
              <Link
                className="wow"
                style={{ display: "block", margin: "1rem 0" }}
                to={`${data.id}`}
                key={data.id}
              >
                <div className="pp">{data.title}</div>

                <div>{plain}...</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div>poop</div>;
}

export default Featured;
