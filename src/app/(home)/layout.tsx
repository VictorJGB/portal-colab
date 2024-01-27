import Header from "@/components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className='h-screen w-full'>
      <Header />
      <main className="flex w-full min-h-screen flex-col items-center justify-center">
        {children}
      </main>
  </body>
  );
}
