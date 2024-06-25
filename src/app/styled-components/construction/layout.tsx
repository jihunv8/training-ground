import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';
import { Poppins } from 'next/font/google';

import favicon from './favicon.ico';

import type { Metadata } from 'next';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CONSTRUCTION',
  icons: {
    icon: favicon.src,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={poppins.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
