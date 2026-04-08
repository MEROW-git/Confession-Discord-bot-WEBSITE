import Base from "@layouts/Baseof";
import ImageFallback from "@layouts/components/ImageFallback";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaGithub,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import darkModeArtwork from "../logo/darkmode.png";
import lightModeArtwork from "../logo/lightmode.png";

const inviteUrl =
  "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot%20applications.commands&permissions=268823632";
const githubUrl = "https://github.com/MEROW-git/Confession-Discord-bot";

const features = [
  {
    title: "Anonymous submissions",
    description:
      "Members can send confessions with a slash command without exposing themselves publicly.",
    icon: FaLock,
  },
  {
    title: "Admin review flow",
    description:
      "Every confession can be checked in a private review channel before it ever reaches the public feed.",
    icon: FaShieldAlt,
  },
  {
    title: "Simple server setup",
    description:
      "Run the bot, use `/setup`, and choose the channels and admin role once.",
    icon: FaCheckCircle,
  },
];

const Home = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const themedArtwork =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? darkModeArtwork
      : lightModeArtwork;

  return (
    <Base
      title="Anonymous Confession Bot"
      description="A Discord bot for anonymous confessions with moderation review and easy setup."
    >
      <section className="section banner relative overflow-hidden pb-0">
        <ImageFallback
          className="absolute bottom-0 left-0 z-[-1] w-full"
          src="/images/banner-bg-shape.svg"
          width={1905}
          height={295}
          alt="banner background"
          priority
        />
        <div className="container">
          <div className="row flex-wrap-reverse items-center justify-center lg:flex-row">
            <div className="mt-12 text-center lg:mt-0 lg:col-6 lg:text-left">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                Discord Moderation Tool
              </p>
              <div className="banner-title">
                <h1>
                  Anonymous confessions, <strong>cleanly moderated</strong>
                </h1>
                <span>
                  Built for Discord communities that need privacy and control.
                </span>
              </div>
              <p className="mt-6 max-w-2xl text-lg">
                Let members submit confessions through slash commands, review
                everything in a private admin channel, and publish only the
                messages your team approves.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  className="btn btn-primary text-center"
                  href={inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invite Bot
                </a>
                <a
                  className="btn btn-outline-primary text-center"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </a>
              </div>
              <p className="mt-4 text-sm text-light">
                
              </p>
            </div>
            <div className="col-9 lg:col-6">
              <ImageFallback
                className="mx-auto object-contain"
                src={themedArtwork}
                width={620}
                height={620}
                priority
                alt="Anonymous Confession Bot logo"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section scroll-mt-28">
        <div className="container">
          <div className="row items-center">
            <div className="mb-10 lg:mb-0 lg:col-5">
              <ImageFallback
                className="mx-auto object-contain"
                src={themedArtwork}
                width={520}
                height={520}
                alt="Anonymous Confession Bot about visual"
              />
            </div>
            <div className="lg:col-7">
              <h2 className="section-title inline-block">About The Bot</h2>
              <p className="mb-5 text-lg">
                The Anonymous Confession Bot is built for Discord communities
                that want private submissions with a clear moderation workflow.
              </p>
              <p className="mb-5">
                Members can submit confessions through <code>/confess</code>,
                moderators review them in a private channel, and only approved
                messages are posted publicly.
              </p>
              <p>
                After setup, your server gets a simple workflow that protects
                privacy while keeping moderation fully in control.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  className="btn btn-primary text-center"
                  href={inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Invite To Discord
                </a>
                <a
                  className="btn btn-outline-primary text-center"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="section-title inline-block">Why Use This Bot</h2>
            <p className="mx-auto max-w-3xl">
              The workflow is designed for communities that want honest
              submissions without losing moderation control.
            </p>
          </div>
          <div className="row">
            {features.map(({ title, description, icon: Icon }) => (
              <div className="mb-8 md:col-4" key={title}>
                <div className="h-full rounded border border-border p-8 text-center dark:border-darkmode-border">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                    <Icon />
                  </div>
                  <h3 className="mb-3 h5">{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="rounded border border-border px-8 py-10 text-center dark:border-darkmode-border">
            <h2 className="mb-4">Getting started takes a few minutes</h2>
            <p className="mx-auto max-w-3xl">
              Install the Python dependencies, configure your Discord token and
              Supabase keys, invite the bot to your server, then run{" "}
              <code>/setup</code> to pick the confession channel, review
              channel, and admin role.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link className="btn btn-outline-primary text-center" href="/#about">
                Read About
              </Link>
              <a
                className="btn btn-primary text-center"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <FaGithub />
                  Source Code
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;
