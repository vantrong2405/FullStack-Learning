export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            Layout logins
            {children}
        </main>
    );
}
