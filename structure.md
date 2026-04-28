my-next-app/
├── public/              # Chứa ảnh, favicon, font (truy cập trực tiếp qua URL /)
├── src/
│   ├── app/             # 🌐 LAYER 1: ROUTING & LAYOUT (Frontend)
│   │   ├── (auth)/      # Group Route (không hiện lên URL): Login, Register
│   │   ├── (dashboard)/ # Trang quản trị
│   │   ├── api/         # Nếu cần làm API cho App Mobile (Backend API)
│   │   ├── layout.tsx   # Giao diện chung (Header/Footer)
│   │   └── page.tsx     # Trang chủ
│   │
│   ├── components/      # 🏗️ LAYER 2: SHARED UI COMPONENTS
│   │   ├── ui/          # Các nút, ô nhập liệu dùng chung (Button, Input, Card)
│   │   └── shared/      # Navbar, Sidebar, Footer chung cho các trang
│   │
│   ├── features/        # 🧠 LAYER 3: BUSINESS LOGIC (Trái tim của dự án)
│   │   ├── blog/        # Mỗi folder là một tính năng hoàn chỉnh
│   │   │   ├── components/  # Component chỉ dành riêng cho Blog (PostCard, PostList)
│   │   │   ├── actions.ts   # BACKEND: Hàm thêm/xóa/sửa bài viết (Server Actions)
│   │   │   └── types.ts     # Định nghĩa kiểu dữ liệu cho Blog
│   │   └── auth/        # Xử lý đăng nhập, phân quyền
│   │
│   ├── lib/             # 🛠️ LAYER 4: CONFIG & UTILS (Công cụ)
│   │   ├── db.ts        # BACKEND: Cấu hình kết nối Database (Prisma/Drizzle)
│   │   └── utils.ts     # Các hàm bổ trợ (Format ngày tháng, tiền tệ)
│   │
│   ├── hooks/           # Các logic xử lý sự kiện phía Client (tái sử dụng)
│   └── styles/          # CSS Global hoặc Tailwind config
│
├── .env                 # 🤫 BACKEND: Biến môi trường (Mật khẩu DB, API Key)
├── next.config.mjs      # Cấu hình Next.js
└── tailwind.config.ts   # Cấu hình giao diện