import StyledComponentsRegistry from '@/app/styled-components/_lib/setting/registry';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Education',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
