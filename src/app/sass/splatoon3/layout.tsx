import './_styles/global.scss';

import { Noto_Sans_KR } from 'next/font/google';
import type { Metadata } from 'next';

const NotoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spatoon 3',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NotoSansKR.className}>{children}</body>
    </html>
  );
}
