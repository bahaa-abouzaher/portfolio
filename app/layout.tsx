import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bahaa Abou Zaher - Portfolio",
  description: "",
};

export default async function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value || "dark";

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
