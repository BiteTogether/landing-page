import { Users, MapPin, Camera, Heart, MessageCircle, Bookmark } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Vòng tròn bạn bè",
    description: "Tạo nhóm với bạn bè để chia sẻ những quán ăn yêu thích và lên kế hoạch đi ăn cùng nhau.",
  },
  {
    icon: MapPin,
    title: "Khám phá địa điểm",
    description: "Tìm kiếm quán ăn gần bạn với đề xuất từ bạn bè và cộng đồng.",
  },
  {
    icon: Camera,
    title: "Chia sẻ khoảnh khắc",
    description: "Chụp và chia sẻ những món ăn ngon với bộ lọc đẹp mắt và stories hấp dẫn.",
  },
  {
    icon: Heart,
    title: "Đánh giá & Review",
    description: "Đọc và viết đánh giá thực tế từ những người bạn tin tưởng.",
  },
  {
    icon: MessageCircle,
    title: "Chat & Lên kế hoạch",
    description: "Nhắn tin, bình chọn quán ăn và tổ chức buổi hẹn ăn uống dễ dàng.",
  },
  {
    icon: Bookmark,
    title: "Lưu & Bộ sưu tập",
    description: "Tạo bộ sưu tập quán ăn theo chủ đề và chia sẻ với bạn bè.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Mọi thứ bạn cần cho trải nghiệm ẩm thực
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            BiteTogether mang đến những tính năng giúp bạn kết nối với bạn bè qua niềm đam mê đồ ăn
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
