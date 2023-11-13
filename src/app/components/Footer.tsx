import Link from "next/link";
import { GithubIcon } from "./icons/github";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";


const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Docs", href: "https://docs.vectorshift.ai/vectorshift/" },
      { title: "Tutorials", href: "/tutorials" },
      { title: "Demo", href: "https://calendly.com/albert_mao/30min?month=2023-10" },
    ],
  },
  {
    title: "Commnunicate",
    links: [
      { title: "Discord", href: "https://discord.com/invite/QcwZwMQj6G" },
      { title: "Contact Us", href: "https://form.jotform.com/232109489982165" },
      { title: "Email", href: "#" },
    ],
  },   
  {
    title: "Company",
    links: [
      { title: "Pricing", href: "/" },
      { title: "Terms Conditions", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },   
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5rem] px-[1rem] sm:px-0 text-sm">
    <div className="flex flex-col justify-between lg:flex-row mx-auto md:w-[1050px]">
      <div>
        <div className="flex h-full flex-col gap-8 md:gap-0 sm:flex-row justify-between lg:flex-col">
          <div className="items-center text-gray-500 flex">
          <span className="text-white">©</span> 2023 VectorShift, Inc. All Rights Reserved</div>         
          <div className="mt-auto flex space-x-4 text-grey">
            <TwitterIcon />
            <GithubIcon />
            <SlackIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        {footerLinks.map((column) => (
          <div
            key={column.title}
            className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[10rem]"
          >
            <h3 className="mb-3 font-medium">{column.title}</h3>
            <ul>
              {column.links.map((link) => (
                <li key={link.title} className="[&_a]:last:mb-0 text-gray-500 hover:text-white">
                  <Link
                    className="mb-3 block text-grey transition-colors hover:text-off-white"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);