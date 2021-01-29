import React from 'react';
import NextLink from 'next/link';

function NLink({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

export default NLink;
