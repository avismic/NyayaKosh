import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NextTopLoader />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
