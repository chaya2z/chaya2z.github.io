import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  /*
   * must contain the html and body tags.
   * */
  return (
    <html>
      <body>
        {children}
        <p>hhhhhh</p>
      </body>
    </html>
  );
}

// ヘッダーとフッターだけ
