export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            Layout registers
            {children}
        </main>
    );
}
