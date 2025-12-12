"use client"
import Spill from "./ui/svgs/spill";
import IphoneFrame from "./ui/IphoneFrame";
import { motion } from "framer-motion";
import clsx from "clsx";

export function DownloadSection() {
  const googlePlayLink = "https://apps.apple.com"
  const appStoreLink = "https://play.google.com"
  const screenshots = [
    "/images/profile.png",
    "/images/news-feed.png",
    "/images/chat.png",
  ];

  return (
    <motion.section
      // id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative max-w-5xl mx-auto px-4 -mb-6 z-10 md:-mb-10 lg:-mb-14"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          mass: 0.4,
          type: "spring",
          duration: 0.2,
        }}
      >
        <div className="p-4 bg-primary text-primary-content rounded-t-[16] flex flex-col items-center md:flex-row">
          <div className="flex-1 flex flex-col items-center justify-center min-h-full">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-0 mb-4 text-4xl md:text-6xl font-bold"
            >
              Tải ngay BiteTogether hôm nay!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary-content/70 whitespace-pre-wrap text-left m-0 mt-1 md:text-lg"
            >
              Khám phá, kết nối và chia sẻ những khoảnh khắc ẩm thực đáng nhớ cùng bạn bè.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="list-none flex gap-4 my-6 p-0 w-full"
            >
              {googlePlayLink && (
                <li className="m-0 p-0">
                  <a href={googlePlayLink}>
                    <img
                      className="h-14"
                      alt="google play logo"
                      src="/images/google-play.svg"
                    />
                  </a>
                </li>
              )}
              {appStoreLink && (
                <li className="m-0 p-0">
                  <a href={appStoreLink}>
                    <img
                      className="h-14"
                      alt="app store logo"
                      src="/images/app-store.svg"
                    />
                  </a>
                </li>
              )}
            </motion.ul>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex-1 flex justify-center"
          >
            {screenshots.map((src, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 0,
                    rotate: 0,
                  },
                  visible: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 1,
                    rotate: index === 0 ? 0 : index === 1 ? "-30deg" : "30deg",
                  },
                }}
                transition={{
                  stiffness: 150,
                  mass: 0.5,
                  type: "spring",
                  delay: index > 0 ? 0.8 : 0.5,
                }}
                className={clsx(
                  "h-120",
                  index === 0 && "relative z-20 block",
                  index === 1 && "absolute origin-bottom-left hidden xl:block",
                  index === 2 && "absolute origin-bottom-right hidden xl:block"
                )}
              >
                <IphoneFrame src={src} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Spill className="-translate-y-1"/>
      </motion.div>
    </motion.section>
  );
}
