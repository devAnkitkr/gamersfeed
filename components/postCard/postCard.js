import Link from "next/link";
import moment from "moment";
import Image from "next/image";

export default function postCard({ post }) {
  return (
    <article className="bg-white ease-in duration-150 hover:drop-shadow">
      <div className="">
        <Link href={`/post/${post.slug} `} className="border-2 border-red-900">
          <Image
            src={post.featuredImage.url}
            alt="article head image"
            className="rounded h-fit"
            width="720px"
            height="400px"
            layout="intrinsic"
            objectFit="cover"
          />
        </Link>
      </div>
      <div>
        <Link href={`/post/${post.slug} `}>
          <header>
            <h2 className="font-semibold text-3xl my-2">{post.title}</h2>
          </header>
        </Link>
        <Link href={`/post/${post.slug} `}>
          <p className="my-4">{post.excerpt}</p>
        </Link>
        <Link href={`/post/${post.slug} `}>
          <footer className="my-4 flex items-center">
            <Image
              src={post.author.authorPhoto.url}
              alt="Picture of the author"
              className="rounded-full"
              width="50px"
              height="50px"
              layout="fixed"
            />
            <div>
              <ul className="pl-1 list-none">
                <li className="text-base font-semibold -mb-1">
                  {post.author.name}
                </li>
                <li className="text-sm">
                  {moment(post.createdAt).format("MMM DD, YYYY")}
                </li>
              </ul>
            </div>
          </footer>
        </Link>
      </div>
    </article>
  );
}
