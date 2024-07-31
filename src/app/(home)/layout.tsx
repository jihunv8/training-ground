import './_src/styles/global.scss';

import type { Metadata } from 'next';
import favicon from './_src/images/favicon.ico';

export const metadata: Metadata = {
  title: 'Training Ground',
  description: 'This is training ground!',
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
