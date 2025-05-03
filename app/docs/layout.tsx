import { getPageMap } from "nextra/page-map";
import { NextraTheme } from "../../components/docs/theme";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagemap = await getPageMap();

  return (
    <>
      <NextraTheme pageMap={pagemap}>{children}</NextraTheme>
    </>
  );
}
