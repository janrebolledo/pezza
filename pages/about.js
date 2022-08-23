import React from "react";
import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";

import Adobe from "../public/images/program-logos/adobe.png";
import DaVinci from "../public/images/program-logos/davinci.png";
import AVID from "../public/images/program-logos/avid.png";
import Vegas from "../public/images/program-logos/vegas.png";

const metadata = {
  title: "Pezza VFX — About",
  description: "About Pezza VFX, skills, workflow & more.",
  keywords:
    "pezza vfx, video production, content strategy, photography, videography",
};

function about({ copy }) {
  return (
    <main className="text-white">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />

        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <section className="px-5 pt-48 py-12 bgradient grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl">About Me</h1>
          <p className="whitespace-pre-line">{copy.aboutMe}</p>
        </div>
        <div className="col-span-1 relative aspect-square md:aspect-video">
          <Image
            className="w-full"
            src={"https:" + copy.aboutMeImage.fields.file.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Pezza VFX"
          />
        </div>
      </section>

      <section className="px-5 py-12">
        <div>
          <h1 className="text-7xl">Workflow</h1>
          <div className="bgradient grid grid-cols-2 md:grid-cols-4"></div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex w-full md:w-auto flex-col md:flex-row">
            <h1 className="text-7xl p-2 w-[90px] h-[90px] bgradient max-w-max max-h-min mr-24 mb-4">
              01.
            </h1>
            <p>{copy.workflowParagraph1}</p>
          </div>
          <div className="flex w-full md:w-auto flex-col md:flex-row md:ml-[25%]">
            <h1 className="text-7xl p-2 w-[90px] h-[90px] bgradient max-w-max max-h-min mr-24 mb-4">
              02.
            </h1>
            <p>{copy.workflowParagraph2}</p>
          </div>
          <div className="flex w-full md:w-auto flex-col md:flex-row md:ml-[50%]">
            <h1 className="text-7xl p-2 w-[90px] h-[90px] bgradient max-w-max max-h-min mr-24 mb-4">
              03.
            </h1>
            <p>{copy.workflowParagraph3}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 px-5 py-12 bgradient">
        <div>
          <h1 className="text-7xl">Skills</h1>
          <p>{copy.skillsParagraph}</p>
        </div>
        <div className="font-bold text-center grid gap-4 grid-cols-2 md:grid-cols-4">
          <div className="flex gap-4 flex-col items-center">
            <Image src={Adobe} width={64} height={64} alt />
            <p>Adobe Creative Cloud</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <Image src={DaVinci} width={64} height={64} alt />
            <p>DaVinci Resolve</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <Image src={AVID} width={64} height={64} alt />
            <p>AVID Media Composer</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <Image src={Vegas} width={64} height={64} alt />
            <p>Magix Vegas Pro</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default about;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntry("3YyunYoPT2MlpeAMRT6w0F");

  return {
    props: {
      copy: res.fields,
    },
  };
}
