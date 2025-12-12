"use client"
import AnimatedText from "./ui/AnimatedText";
import clsx from "clsx";
import { motion } from "framer-motion";
import SwirlArrowBottomLeft from "./ui/svgs/swirlArrowBottomLeft";
import SwirlArrowBottomRight from "./ui/svgs/swirlArrowBottomRight";
import SwirlArrowBottom from "./ui/svgs/swirlArrowBottom";
import IphoneFrame from "./ui/IphoneFrame";

export function HowItWorksSection() {
  const steps = [
    {
      title: "Tạo tài khoản",
      subtitle: "Chạm nhẹ đăng ký, cá nhân hóa hồ sơ – sẵn sàng nhập hội mê ăn uống!",
      image: "/images/register.png",
    },
    {
      title: "Kết nối với bạn bè",
      subtitle: "Tám chuyện, lên kèo ăn uống cực nhanh – không ai bị bỏ lại phía sau!",
      image: "/images/messages.png",
    },
    {
      title: "Chia sẻ khoảnh khắc ẩm thực",
      subtitle: "Up hình món ngon, review chất, thả tim & bình luận cực chill trên news feed!",
      image: "/images/create-post.png",
    },
  ]
    
  
  return (
    <section
      id="how-it-works"
      className="overflow-hidden max-w-5xl mx-auto px-4 py-12"
    >
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-3">
          <AnimatedText text="Cách hoạt động" />
        </h1>
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
              className="text-md max-w-lg font-bold"
          >
            "Chỉ 3 bước đơn giản, nhập hội mê ăn uống, kết nối bạn bè và chia sẻ chất riêng của bạn!"
          </motion.p>
      </div>
      <div className="flex flex-col gap-52">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={clsx(
              "text-primary relative flex flex-col rounded-md md:flex-row",
              {
                "md:flex-row-reverse": index % 2 === 0,
              }
            )}
          >
            {index < steps.length - 1 && (
              <>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "spring" }}
                  className="hidden w-48 absolute -bottom-44 left-1/2 md:block"
                >
                  {index % 2 === 0 ? (
                    <SwirlArrowBottomLeft />
                  ) : (
                    <SwirlArrowBottomRight />
                  )}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "spring" }}
                  className="w-16 absolute -bottom-48 left-1/2 md:hidden md:-bottom-36"
                >
                  <SwirlArrowBottom />
                </motion.div>
              </>
            )}
            <motion.div
              variants={{
                hidden: { x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="mb-8 flex flex-col text-center justify-center prose flex-1"
            >
              <div className="pb-0 font-sketch text-8xl text-primary">
                {index < 10 && 0}
                {index + 1}
              </div>
              <h4 className="mt-0 text-2xl font-bold text-[black]">{step.title}</h4>
              <p className="mx-auto max-w-sm opacity-[.7] text-[#262626] font-bold my-2">{step.subtitle}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: index % 2 === 1 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="flex-1 flex justify-center"
            >
              <div className="h-100">
                <IphoneFrame src={step.image} />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
