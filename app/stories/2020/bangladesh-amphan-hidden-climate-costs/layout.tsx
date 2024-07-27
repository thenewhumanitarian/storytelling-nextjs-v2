import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import { Metadata } from 'next';
import { META } from './metatags'

export const metadata: Metadata = {
  title: META.title,
  description: META.socialDescription,
  openGraph: {
    title: META.title,
    description: META.socialDescription,
    type: 'website',
    url: META.url,
    images: [META.socialImage],
  },
  twitter: {
    title: META.title,
    site: '@thenewhumanitarian',
    card: 'summary_large_image',
    creator: '@thenewhumanitarian',
    description: META.socialDescription,
    images: [META.socialImage],
  },
  other: {
    canonical: META.url,
  },
};

export default function StoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header shareProps={META} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}





