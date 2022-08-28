import Image from "next/image";
import Link from "next/link";

export default function GridItem({ project }) {
  const { slug, title, image } = project.fields;
  return (
    <Link href={"/projects/" + slug}>
      <div className="aspect-square p-12 relative projects-grid-item cursor-pointer group">
        <Image
          src={"https:" + image.fields.file.url}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-50 transition-all"
          priority
        />
        <h1 className="text-5xl z-10 absolute top-0 left-0 p-8 w-full h-full flex items-end bg-gradient-to-t from-black to-transparent">
          {title}
        </h1>
      </div>
    </Link>
  );
}
