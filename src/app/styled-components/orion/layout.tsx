import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';
import { Nanum_Gothic } from 'next/font/google';
import favicon from './favicon.ico';

import type { Metadata } from 'next';

const fontFamily = Nanum_Gothic({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '오리온',
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
      <body className={fontFamily.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
