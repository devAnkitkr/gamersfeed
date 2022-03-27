import { getAllPostSlugs } from '../services';

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
     <loc>${`https://www.${process.env.BASE_URL}`}</loc>
     </url>
     <url>
     <loc>${`https://www.${process.env.BASE_URL}/category/news`}</loc>
     </url>
     <url>
     <loc>${`https://www.${process.env.BASE_URL}/category/review`}</loc>
     </url>
     <url>
     <loc>${`https://www.${process.env.BASE_URL}/category/streamer`}</loc>
     </url>
     <url>
     <loc>${`https://www.${process.env.BASE_URL}/category/gadget`}</loc>
     </url>
     ${posts
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`https://www.${process.env.BASE_URL}/post/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  //   const request = await fetch(EXTERNAL_DATA_URL);
  //   const posts = await request.json();
  const posts = (await getAllPostSlugs()) || [];

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
