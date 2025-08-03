import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased px-2 h-screen min-h-fit`}
        style={{
          background:
            "linear-gradient(150deg, rgba(170, 169, 173, 0.5) 25%, rgba(255, 165, 0, 0.6) 100%)",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
