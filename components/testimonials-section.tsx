const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "Food Blogger",
    avatar: "/young-vietnamese-woman-professional.jpg",
    content:
      "BiteTogether giúp mình kết nối với cộng đồng yêu ẩm thực tuyệt vời. Giờ mình không bao giờ thiếu ý tưởng đi ăn gì nữa!",
  },
  {
    name: "Trần Hoàng Nam",
    role: "Sinh viên",
    avatar: "/young-vietnamese-man-student-casual.jpg",
    content: "App rất tiện lợi để tổ chức đi ăn cùng nhóm bạn. Tính năng vote quán ăn và chia bill quá đỉnh!",
  },
  {
    name: "Lê Thị Hương",
    role: "Nhân viên văn phòng",
    avatar: "/vietnamese-woman-office-worker-friendly.jpg",
    content: "Cuối tuần nào cũng khám phá được quán mới nhờ gợi ý từ bạn bè trên BiteTogether. 5 sao!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Người dùng nói gì về chúng tôi
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hàng nghìn người đã tìm thấy niềm vui ẩm thực cùng bạn bè qua BiteTogether
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-2xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ⭐
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
