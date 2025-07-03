import Link from "next/link";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { FaPaypal, FaReddit } from "react-icons/fa";

const socials = [
  {
    name: "Email",
    username: "nivnnd@gmail.com",
    href: "mailto:nivnnd@gmail.com",
    icon: <EnvelopeClosedIcon className="size-7 text-primary" />,
  },
  {
    name: "LinkedIn",
    username: "in/nivandres",
    href: "https://www.linkedin.com/in/nivandres",
    icon: <LinkedInLogoIcon className="size-7 text-blue-600" />,
  },
  {
    name: "Reddit",
    username: "u/nivandres",
    href: "https://www.reddit.com/u/nivandres",
    icon: <FaReddit className="size-7 text-orange-500" />,
  },
  {
    name: "GitHub",
    username: "nivandres",
    href: "https://github.com/nivandres",
    icon: <GitHubLogoIcon className="size-7" />,
  },
  {
    name: "Twitter (X)",
    username: "@nivandress",
    href: "https://x.com/nivandress",
    icon: <TwitterLogoIcon className="size-7 text-blue-400" />,
  },
  {
    name: "Discord",
    username: "@nivandres",
    href: "https://discord.com/invite/5EbCXKpdyw",
    icon: <DiscordLogoIcon className="size-7 text-indigo-500" />,
  },
  {
    name: "Fiverr",
    username: "nivandres",
    href: "https://www.fiverr.com/nivandres",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="-2.5 -2 24 24"
        className="size-7 text-green-500"
      >
        <g fill="currentColor">
          <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.63 5.63 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75z"></path>
          <circle cx={14.375} cy={1.875} r={1.875}></circle>
        </g>
      </svg>
    ),
  },
  {
    name: "Instagram",
    username: "@nivandres",
    href: "https://www.instagram.com/nivandres",
    icon: <InstagramLogoIcon className="size-7 text-pink-500" />,
  },
  {
    name: "PayPal",
    username: "nivnnd",
    href: "https://www.paypal.com/paypalme/nivnnd",
    icon: <FaPaypal className="size-7 text-blue-500" />,
  },
];

export function Contact() {
  return (
    <section className="my-20">
      <h2 className="text-lg font-semibold text-muted-foreground mb-6">
        Contact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {socials.map((social) => (
          <Link key={social.name} href={social.href} target="_blank">
            <div className="p-4 border border-muted rounded-lg bg-card hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-4">
                {social.icon}
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    {social.name}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {social.username}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
