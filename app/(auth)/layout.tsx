export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='flex justify-end pt-8'>{children}</div>;
}
