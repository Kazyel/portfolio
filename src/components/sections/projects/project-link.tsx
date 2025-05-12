import Link from "next/link";

interface ProjectLinkProps {
  title: string;
  url: string;
  className?: string;
}

export const ProjectLink = ({ title, url, className }: ProjectLinkProps) => {
  return (
    <div
      className={
        className
          ? `${className} group flex items-center gap-2`
          : "group flex items-center gap-2 self-end text-lg font-semibold italic"
      }
    >
      <Link
        href={url}
        target="_blank"
        className="text-off-w group-hover:text-off-w cursor-pointer tracking-wide transition-all duration-300 hover:drop-shadow-[0px_0px_12px_#f3e5d766] max-md:text-xs"
      >
        {title}
      </Link>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="fill-off-w/75 group-hover:fill-off-w mb-[4px] size-4 transition-all duration-300 group-hover:-translate-y-[2px]"
      >
        <path
          fillRule="evenodd"
          d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z"
          clipRule="evenodd"
        ></path>
        <path
          fillRule="evenodd"
          d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};
