import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';

type ILink = {
  href: string;
};

const CustomLink: FC<PropsWithChildren<ILink>> = ({ children, href }) => {
  return <Link href={href}>{children}</Link>;
};
export default CustomLink;
