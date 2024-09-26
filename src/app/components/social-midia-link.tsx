export default function SocialMediaLink({
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      className="transition-all hover:text-secondary"
      {...props}
    >
      {children}
    </a>
  );
}
