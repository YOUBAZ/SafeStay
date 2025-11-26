import type { Metadata } from 'next';
import { Inter, Cairo } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' });

export const metadata: Metadata = {
    title: 'SafeStay - Find Your Perfect Student Home',
    description: 'Verified, safe housing near Egyptian universities',
    keywords: 'student housing, university accommodation, Egypt, verified properties',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${cairo.variable} font-sans`}>{children}</body>
        </html>
    );
}
