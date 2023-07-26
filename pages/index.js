import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { createClient } from 'contentful';

import Section from '../public/section.svg';
import ProjectsList from '../components/Projects/ProjectsList';
import ContactSection from '../components/Layout/ContactSection';
import Testimonials from '../components/Layout/Testimonials';

import VisualEffects from '../public/visual-effects.png';

const metadata = {
  title: 'Pezza VFX',
  description: 'CUTTING EDGE PRODUCTION THAT BUILDS BRANDS',
  keywords:
    'pezza vfx, video production, content strategy, photography, videography',
};

export default function Home({ projects, testimonials, copy }) {
  const recentProjects = [
    copy.recentProject1,
    copy.recentProject2,
    copy.recentProject3,
    copy.recentProject4,
  ];

  return (
    <main className='text-white pt-[13vh] md:pt-0'>
      <Head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords} />

        <meta property='og:type' content='website' />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />

        <meta property='twitter:card' content='summary_large_image' />
      </Head>

      <section className='w-full md:min-h-screen grid md:grid-cols-2 pt-[13vh] gap-4 px-5'>
        <div className='w-full flex flex-col items-start justify-center'>
          <h1 className='text-5xl md:text-7xl whitespace-pre-wrap'>
            {copy.landingPage}
          </h1>
          <div className='flex flex-row gap-4'>
            <p className='btn'>
              <Link href='/contact'>Contact &rarr;</Link>
            </p>
            <p className='btns'>
              <Link href='/portfolio'>Explore Projects &rarr;</Link>
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center p-8 md:p-0'>
          <Link href={copy.landingPageVideo1Link || ''}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className='aspect-video shadow-lg rounded-xl'
            >
              <source src={copy.landingPageVideo1.fields.file.url} />
            </video>
          </Link>
        </div>
      </section>

      <section className='w-full px-5 py-16'>
        <h1 className='text-5xl md:text-7xl mb-4 shape rect-f-l'>
          FEATURED WORK
        </h1>
        <ProjectsList projects={recentProjects} />
        <div className='w-full flex justify-center'>
          <p className='btn mt-4'>
            <Link href='/portfolio'>View All &rarr;</Link>
          </p>
        </div>
      </section>

      <section className='relative'>
        <img src={Section.src} className='hidden xl:block w-full' alt='' />
        <div className='xl:absolute top-0 w-full h-full p-5 py-12 lg:py-5 grid items-center lg:grid-cols-4 gap-8 bgradient xl:bg-none'>
          <div>
            <h1 className='text-5xl md:text-7xl shape tri-d'>Services</h1>
            <p>{copy.servicesParagraph}</p>
            <p className='btnt mt-4'>
              <Link href='/portfolio'>View All &rarr;</Link>
            </p>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='flex items-center gap-4 text-3xl'>
              <span className='material-symbols-outlined !text-5xl'>cut</span>
              {copy.serviceHeading1}
            </h2>
            <p>{copy.serviceParagraph1}</p>
            <Link href='/projects/video-editing'>
              <p className='btns'>
                View {copy.serviceHeading1} Projects &rarr;
              </p>
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='flex items-center gap-4 text-3xl'>
              <span className='material-symbols-outlined !text-5xl'>
                videocam
              </span>
              {copy.serviceHeading2}
            </h2>
            <p>{copy.serviceParagraph2}</p>
            <Link href='/projects/videography'>
              <p className='btns'>
                View {copy.serviceHeading2} Projects &rarr;
              </p>
            </Link>
          </div>

          <div className='flex flex-col gap-4'>
            <h2 className='flex items-center gap-4 text-3xl'>
              <Image src={VisualEffects} width={48} height={48} alt />
              {copy.serviceHeading3}
            </h2>
            <p>{copy.serviceParagraph3}</p>
            <Link href='/projects/visual-effects'>
              <p className='btns'>
                View {copy.serviceHeading3} Projects &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />

      <ContactSection />
    </main>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'project' });
  const res1 = await client.getEntry('3YyunYoPT2MlpeAMRT6w0F');
  const res2 = await client.getEntries({ content_type: 'testimonial' });

  return {
    props: {
      projects: res.items,
      copy: res1.fields,
      testimonials: res2.items,
    },
  };
}
