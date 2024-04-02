import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spatoon 3',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
