import axios from "axios";
import Link from "next/link";

const ManageCard = ({ post }) => {
  const { author, title, thumbnail, _id } = post;
  return (
    <div className="border rounded-lg overflow-hidden flex justify-between items-center pr-5 hover:bg-slate-100">
      <div className="flex items-center gap-3 h-10">
        <img
          src={thumbnail}
          alt="card image"
          className="w-20 h-full object-cover object-center"
        />
        {title.length > 48 ? (
          <h5>{title.slice(0, 48) + "..."}</h5>
        ) : (
          <h5>{title}</h5>
        )}
      </div>
      <div className="flex gap-2">
        <Link
          href={"/manage/edit/" + _id}
          className="bg-teal-500 rounded-md px-3 py-1 text-white"
        >
          Edit
        </Link>
        <button
          onClick={() => {
            // axios.delete("http://localhost:3001/delete/" + _id);
            axios.delete(
              "https://my-daily-log-mern-server.vercel.app/delete/" + _id
            );
          }}
          className="bg-red-500 rounded-md px-3 py-1 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ManageCard;
