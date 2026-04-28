import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "DevBrander | Elevate Your Tech Identity",
  description: "AI-powered personal branding platform for IT students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
