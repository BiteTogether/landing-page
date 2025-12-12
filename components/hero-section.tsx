import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import IphoneFrame from "./ui/IphoneFrame";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <span className="text-sm font-medium">🎉 Ra mắt phiên bản mới</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Kết nối bạn bè qua <span className="text-primary">từng món ăn</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Chia sẻ những khoảnh khắc ẩm thực, khám phá quán ăn mới cùng bạn bè và tạo nên những kỷ niệm đáng nhớ xung
              quanh bàn ăn.
            </p>

            <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
              <a href="https://play.google.com">
                <img className="h-14" alt="google play logo" src="/images/google-play.svg"/>
              </a>
              <a href="https://apps.apple.com">
                <img className="h-14" alt="app store logo" src="/images/app-store.svg"/>
              </a>
            </div>

            {/* Stats */}
            {/* <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Người dùng</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Quán ăn</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">100K+</div>
                <div className="text-sm text-muted-foreground">Bài chia sẻ</div>
              </div>
            </div> */}
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />

              {/* Phone frame */}
              <div className="h-150">
                <IphoneFrame src="/images/news-feed.png" />
              </div>

              {/* Floating elements */}
              {/* <div className="absolute -left-8 top-20 bg-card p-3 rounded-2xl shadow-lg border border-border animate-bounce">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🍜</span>
                  <span className="text-sm font-medium text-foreground">Phở ngon!</span>
                </div>
              </div> */}

              {/* <div className="absolute -right-8 bottom-32 bg-card p-3 rounded-2xl shadow-lg border border-border animate-bounce delay-300">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❤️</span>
                  <span className="text-sm font-medium text-foreground">+99 thích</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
