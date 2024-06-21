import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';
import type { Metadata } from 'next';

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CONSTRUCTION',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledComponentsRegistry>
      <main className={poppins.className}>{children}</main>;
    </StyledComponentsRegistry>
  );
}
