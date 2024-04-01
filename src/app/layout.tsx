import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Ground',
  description: 'This is training ground!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
