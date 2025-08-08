import Link from "next/link";

interface LiProps {
  text: string;
  url: string;
  pathname: string;
}

const Li = ({ text, url, pathname }: LiProps) => {
  return (
    <li className="hover:bg-blue-300 rounded-md px-4 py-1 text-[1.05rem]">
      <Link
        className="w-full block cursor-pointer"
        href={url}
        style={{ color: pathname.includes(url) ? "#0094ff" : "black" }}
      >
        {text}
      </Link>
    </li>
  );
};

export default Li