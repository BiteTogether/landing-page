import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-[10] bg-card flex items-center justify-center">
                <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
              </div>
              <span className="text-xl font-bold">BiteTogether</span>
            </div>
            <p className="text-background/70 text-sm">
              Kết nối bạn bè qua niềm đam mê ẩm thực. Chia sẻ, khám phá và thưởng thức cùng nhau.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tính năng
                </a>
              </li>

              <li>
                <a href="https://www.figma.com/design/X0joWBrxTvMPaxbZKB1qbk/BiteTogether?node-id=0-1&t=HkZCso6drJSvk01b-1" className="hover:text-primary transition-colors">
                  Figma
                </a>
              </li>

              <li>
                <a href="https://www.behance.net/gallery/239528175/BiteTogether-Showcase" className="hover:text-primary transition-colors">
                  Behance
                </a>
              </li>

              {/* <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Giá cả
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Đối tác
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Công ty</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tuyển dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Trung tâm hỗ trợ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Điều khoản sử dụng
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© 2025 BiteTogether. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
