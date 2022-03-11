import Head from "next/head";
import Image from "next/image";
import classes from "./postPage.module.scss";
import moment from "moment";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

export default function postPage({ data }) {
  const { title, featuredImage, author, content, createdAt, excerpt, slug } =
    data.articles[0];

  const wordCount = content.html.toString().split(" ").length;
  const readTime = Math.round(wordCount / 265);

  return (
    <div className="max-w-screen-lg  mx-auto flex flex-col px-4 xl:px-0 py-20 ">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={process.env.BASE_URL + "/post/" + slug}
        />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={featuredImage.url} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-0">
        <h1 className="text-5xl font-semibold mb-10 leading-normal">{title}</h1>
        <footer className="my-4 flex items-center">
          <Image
            src={author.authorPhoto.url}
            alt="Picture of the author"
            className="rounded-full"
            width={50}
            height={50}
            layout="fixed"
            loading="lazy"
          />
          <div>
            <ul className="pl-3 list-none">
              <li className="text-base font-semibold -mb-2">{author.name}</li>
              <li className="text-sm">
                {moment(createdAt).format("MMM DD,YYYY")}
                <span className="text-gray-900 text-lg mx-1">•</span>
                {readTime} min read
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <img
        src={featuredImage.url}
        alt="cover image of post"
        className="my-10"
      />
      <div className={`${classes.postBody} border-b border-gray-700 mb-2`}>
        <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg font-bold my-2">Share</h2>
        <div className="flex">
          <FacebookShareButton
            url={process.env.BASE_URL + "/post/" + slug}
            quote="aj"
            hashtag="#article"
            className="text-gray-900 mr-1"
          >
            <FacebookIcon size={34} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={process.env.BASE_URL + "/post/" + slug}
            quote="aj"
            hashtag="#article"
            className="text-gray-900"
          >
            <TwitterIcon size={34} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  );
}
