import { useRouter } from "next/dist/client/router";
import moment from "moment";
import Image from "next/image";

export default function PostCard({ post }) {
  const router = useRouter();
  return (
    <article
      className="bg-white ease-in duration-150 hover:drop-shadow"
      onClick={() => router.push(`/post/${post.slug} `)}
    >
      <div>
        <Image
          src={post.featuredImage.url}
          alt="article head image"
          className="rounded"
          width="720"
          height="400"
          layout="intrinsic"
          objectFit="cover"
        />
      </div>
      <div>
        <header>
          <h2 className="font-neutral text-3xl my-2">{post.title}</h2>
        </header>
        <p className="my-4">{post.excerpt}</p>
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
      </div>
    </article>
  );
}
