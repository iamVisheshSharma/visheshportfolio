import "./globals.css";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: "Vishesh Sharma | Portfolio",
  description: "React Native Developer | UI Specialist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-[#0f172a] text-white ${poppins.className}`}>{children}</body>
    </html>
  );
}