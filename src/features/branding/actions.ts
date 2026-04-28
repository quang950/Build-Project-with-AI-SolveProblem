"use server";

export async function generateBrandAction(formData: { projectDescription: string; targetRole: string }) {
  const { projectDescription, targetRole } = formData;

  // Giả lập thời gian AI đang suy nghĩ (chờ 1.5 giây)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!projectDescription || !targetRole) {
    return { error: "Vui lòng nhập đủ thông tin đầu vào!" };
  }

  // Đây là nơi (trong tương lai) chúng ta sẽ gọi tới ChatGPT hoặc Gemini API.
  const aiResult = `
🚀 AI BRANDING GENERATED 🚀

Vị trí: ${targetRole}
Dự án: ${projectDescription}

TÓM TẮT CHUYÊN MÔN:
"Tôi là một chuyên gia trong lĩnh vực ${targetRole} với kinh nghiệm thực chiến từ dự án ${projectDescription}. 
Tôi cam kết mang lại giá trị vượt trội thông qua các giải pháp công nghệ hiện đại và tư duy giải quyết vấn đề đột phá."

(Lưu ý: Đây là kết quả từ Server Action theo chuẩn Clean Architecture mới!)
  `;

  return { data: aiResult.trim() };
}
