import './globals.css';

export const metadata = {
  title: 'Discover Our Products | Appscrip E-commerce',
  description: 'Shop the latest trends in clothing, electronics, and jewelry. Find premium quality products curated just for you.',
  openGraph: {
    title: 'Discover Our Products | Appscrip E-commerce',
    description: 'Shop the latest trends in clothing, electronics, and jewelry.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="__next">{children}</div>
      </body>
    </html>
  );
}
