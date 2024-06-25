import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';
import type { Metadata } from 'next';

import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '대한항공',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <main className={notoSansKr.className}>{children}</main>;
    </StyledComponentsRegistry>
  );
}
