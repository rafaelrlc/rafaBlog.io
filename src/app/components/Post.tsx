import Link from "next/link";
import React from "react";

interface PostProps {
  title: string;
  id: number;
  content: string;
}

const Post = ({ id, title, content }: PostProps) => {
  return (
    <div className="border rounded-md p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-sm">2020-12-27</p>
        <Link
          href={`/post/${id}`}
          className="text-indigo-700 hover:text-indigo-800 hover:underline hover:font-semibold"
        >
          {title}
        </Link>
      </div>

      <p className="line-clamp-3 text-gray-600">{content.substring(0, 100)}</p>
    </div>
  );
};

export default Post;
