export default function SocialMediaLink({
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      className="transition-all hover:text-secondary flex items-center gap-2"
      {...props}
    >
      {children}
    </a>
  );
}
