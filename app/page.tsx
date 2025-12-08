'use client';

import dynamic from 'next/dynamic';

const Test = dynamic(() => import('./Test'), { ssr: false });

export default function Home() {
  return (
    <Test />
  );
}
