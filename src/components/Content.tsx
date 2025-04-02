import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";

interface ViewContentProps {
  content: PortableTextBlock[]; // Define the type of content based on Portable Text structure
}

const ViewContent: React.FC<ViewContentProps> = ({ content }) => {
  // Define custom components for Portable Text
  const customComponents: Partial<PortableTextReactComponents> = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold my-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-semibold my-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-medium my-3">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-medium my-2">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-base font-medium my-2">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-sm font-semibold my-2">{children}</h6>
      ),
      normal: ({ children }) => <p className="text-base my-2">{children}</p>,
    },
    marks: {
      link: ({ value, children }) => (
        <a
          href={value.href}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    types: {
      image: ({
        value,
      }: {
        value: { asset: { url: string }; alt?: string };
      }) => (
        <Image
          src={value.asset.url}
          alt={value.alt || "Image"}
          className="rounded-md my-4"
        />
      ),
    },
  };

  return (
    <div className="content_box">
      <PortableText value={content} components={customComponents} />
    </div>
  );
};

export default ViewContent;
