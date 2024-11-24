import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata = {
  title: "NyayaKosh - Your Ultimate Resource for Legal Articles",
  description:
    "Discover insightful legal articles on NyayaKosh. Covering a wide range of topics from constitutional law to criminal justice, NyayaKosh is your go-to platform for legal knowledge and expertise.",
  keywords: [
    "law articles",
    "legal blog",
    "NyayaKosh",
    "legal knowledge",
    "Indian law",
    "constitutional law",
    "criminal law",
    "legal education",
    "law resources",
    "legal updates",
  ],
  author: "NyayaKosh Team",
  robots: "index, follow",
  openGraph: {
    title: "NyayaKosh - Your Ultimate Resource for Legal Articles",
    description:
      "Stay informed with NyayaKosh. Explore articles on legal topics like constitutional law, criminal law, and more.",
    url: "https://nyayakosh.in/",
    type: "website",
    images: [
      {
        url: "https://nyayakosh.in/logo.png",
        width: 1200,
        height: 630,
        alt: "NyayaKosh - Your Ultimate Resource for Legal Articles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NyayaKosh",
    creator: "@NyayaKosh",
    title: "NyayaKosh - Your Ultimate Resource for Legal Articles",
    description: "Explore the best legal articles at NyayaKosh.",
    images: ["https://nyayakosh.in/logo.png"],
  },
  canonical: "https://nyayakosh.in/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
