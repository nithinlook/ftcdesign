import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Anchor, Banner, Head } from "nextra/components";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { getPageMap } from "nextra/page-map";
import { Metadata } from "next";
import terra from "./showcase/terra.png";
import NextImage from "next/image";

export const metadata: Metadata = {
  title: "FTCDesign",
  description: "FTCDesign makes learning how to make competitive robots easy.",
  metadataBase: new URL("https://ftcdesign.org/"),
  keywords: [
    "Learning",
    "Onshape",
    "CAD",
    "Robotics",
    "FIRST",
    "FIRST Tech Challenge",
    "FTC",
    "FTC Design",
  ],
  openGraph: {
    url: "./",
    siteName: "FTCDesign",
    locale: "en_US",
    type: "website",
  },
  generator: "Next.js",
  applicationName: "FTCDesign",
  appleWebApp: {
    title: "FTCDesign",
  },
  alternates: {
    canonical: "./",
  },
};

const banner = (
  <Banner storageKey="some-key">
    FTCDesign is currently under construction!
  </Banner>
);
const navbar = (
  <Navbar
    logo={
      <img
        src="/logo.png"
        style={{
          height: "32px",
        }}
      ></img>
    }
    chatLink="https://discord.gg/gzhWFGHP9s"
  />
);
const footer = (
  <Footer>
    <p>
      {new Date().getFullYear()} © FTCDesign & Contributors.
      <br />
      <br />{" "}
      <em>
        FIRST® and FIRST® Tech Challenge, are registered trademarks of FIRST®
        (www.firstinspires.org). FIRST® does not endorse or sponsor this
        website. FTCDesign is in no way affiliated or endorsed by FRCDesign.
      </em>
    </p>

    <p></p>
  </Footer>
);

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />

      <body>
        <Layout
          banner={banner}
          footer={footer}
          navbar={navbar}
          pageMap={pageMap}
          sidebar={{ defaultMenuCollapseLevel : 1 }}
          docsRepositoryBase="https://github.com/nithinlook/ftcdesign"
          toc={{
            extraContent: (
              <>
                <b className="mt-2 text-xs">Sponsored by:</b>
                <Anchor href="https://www.terraedu.org?utm_source=ftcdesign.org">
                  <NextImage
                    src={terra}
                    alt="Terra Education: Enriching STEM programs for all ages."
                    className="nextra-border rounded-sm border"
                  />
                </Anchor>
              </>
            ),
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
