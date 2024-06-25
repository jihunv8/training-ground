import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';

import favicon from './favicon.ico';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Education',
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
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
      </body>
    </html>
  );
}
