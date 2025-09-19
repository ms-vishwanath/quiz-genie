import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import constants from "../../lib/constants";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: constants.webAppName,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <ClerkProvider>
        <body
          className={` ${dmSans.variable} ${dmSans.className}  antialiased`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
 