import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
       <main>
        <div>SideBar</div>
       {children}
       </main>
      </body>
    </html>
  );
}
