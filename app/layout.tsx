import type { Metadata } from "next";
import { cookies } from "next/headers";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "./context/LanguageContext";

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
      <body>
        <LanguageProvider>
          {children}

          <Toaster 
            position="top-center"
            gutter={12}
            containerStyle={{margin: "8px"}}
            toastOptions={{
              success: {
                duration: 3000
              },
              error: {
                duration: 5000
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--text-color)',
                color: 'var(--main-color)',
                marginTop: '3rem',
              }
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
