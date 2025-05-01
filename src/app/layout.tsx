import type {Metadata} from 'next';
import {GeistSans} from 'geist/font/sans';
// Removed GeistMono import as it's not found and likely unused directly
// import {GeistMono} from 'geist/font/mono';
import './globals.css';
import {Toaster} from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cricket Oracle',
  description: 'IPL Match Predictions and Insights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       {/* Removed GeistMono variable as the import was removed */}
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable
        )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
