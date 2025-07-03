"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { getTranslation } from "@/i18n/translation";
import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";

export function Hero() {
  const t = getTranslation("home");
  return (
    <section className="relative my-20 flex items-center justify-center flex-wrap gap-14">
      <div className="max-w-md space-y-4">
        <h1 className="font-semibold text-4xl">
          {t("title", {
            name: ({ key }) => (
              <strong className="font-extrabold" key={key}>
                Ivan Vargas
              </strong>
            ),
          })}
        </h1>
        <motion.p
          className="max-w-xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.04 }}
        >
          {t.description.split(" ").map((word, index, words) => {
            return (
              <motion.span
                key={word + index}
                transition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                variants={{
                  hidden: { filter: "blur(10px)", y: 10, opacity: 0 },
                  visible: { filter: "blur(0px)", y: 0, opacity: 1 },
                }}
              >
                {word}
                {index < words.length - 1 ? " " : ""}
              </motion.span>
            );
          })}
        </motion.p>
        <motion.div
          transition={{
            delay: 1.5,
            duration: 0.5,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Link href="https://github.com/nivandres" target="_blank">
            <Card className="p-2 w-3/4 mx-auto cursor-pointer">
              <CardContent className="flex gap-4 items-center p-2 relative">
                <GitHubLogoIcon className="absolute right-0 bottom-0" />
                <Avatar>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/52615140" />
                  <AvatarFallback>IV</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <h3 className="font-bold inline-flex">@nivandres</h3>
                  <p>Full Stack Web Developer</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Image
          className="rounded-[30%] shadow-2xl dark:shadow-white/10 rotate-12 hover:scale-105 duration-500"
          src="https://avatars.githubusercontent.com/u/52615140"
          alt="Ivan Vargas"
          width={240}
          height={240}
        />
        <Tooltip delayDuration={700}>
          <TooltipTrigger asChild>
            <Badge className="absolute right-0 bottom-0 aspect-square cursor-default">
              🎯
            </Badge>
          </TooltipTrigger>
          <TooltipContent side="right">Focusing</TooltipContent>
        </Tooltip>
      </motion.div>
    </section>
  );
}
