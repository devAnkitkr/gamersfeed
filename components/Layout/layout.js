import SiteHeader from "../siteHeader/siteHeader";
import SiteFooter from "../siteFooter/siteFooter";

export default function Layout({ children, isSiteHeaderContent }) {
  return (
    <>
      <SiteHeader isSiteHeaderContent={isSiteHeaderContent} />
      <main className="mx-auto max-w-[1056px] w-full min-h-screen">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
