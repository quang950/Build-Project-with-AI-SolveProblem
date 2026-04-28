import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // 1. Nhận dữ liệu từ Frontend (FE) gửi lên
  const body = await request.json();
  const { projectDescription, targetRole } = body;

  // 2. Giả lập thời gian AI đang suy nghĩ (chờ 2 giây để trông giống thật)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Đây là nơi (trong tương lai) chúng ta sẽ gọi tới ChatGPT hoặc Gemini.
  // Hiện tại, ta sẽ tạo một câu trả lời mẫu (Mock Data) dựa trên thông tin người dùng nhập.
  const mockAiResponse = `
🎉 CHÚC MỪNG BẠN! Dưới đây là nội dung AI đề xuất cho vị trí [${targetRole}]:

---------------------------------------
"Xin chào, tôi là một ứng viên nhiệt huyết đang nhắm đến vị trí ${targetRole}. 

Kinh nghiệm nổi bật của tôi bao gồm:
${projectDescription}

Tôi luôn tìm kiếm cơ hội để mang lại những giải pháp công nghệ sáng tạo và hiệu quả."
---------------------------------------

(Ghi chú: Đây là dữ liệu mô phỏng từ Backend. Sau này ta sẽ thay bằng AI thật nhé!)
  `;

  // 3. Trả kết quả ngược về lại cho Frontend
  return NextResponse.json({ result: mockAiResponse.trim() });
}
