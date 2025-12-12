"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img src="/images/logo.png" alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
            <span className="text-xl font-bold text-foreground">BiteTogether</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              Tính năng
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              Cách hoạt động
            </a>
            <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
              FAQ
            </a>
            {/* <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              Đánh giá
            </a> */}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground font-semibold">
              Đăng nhập
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">Tải ứng dụng</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Tính năng
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                Cách hoạt động
              </a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
              {/* <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Đánh giá
              </a> */}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Đăng nhập
                </Button>
                <Button className="bg-primary text-primary-foreground">Tải ứng dụng</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
