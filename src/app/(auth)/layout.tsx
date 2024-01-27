export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
