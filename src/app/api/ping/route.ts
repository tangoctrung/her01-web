import { convertDataResponse } from "@/utils/convertDataResponse";
import { sendMessageTelegram } from "@/utils/telegram";

export const GET = async () => {
  try {
    fetch("https://sfind.onrender.com/api/ping", { signal: AbortSignal.timeout(5000) })
    .then((res) => {
      sendMessageTelegram("Ping host sfind.onrender.com success");
    })
    .catch((err: any) => {
      sendMessageTelegram("Ping host sfind.onrender.com fail");
    });
    return convertDataResponse(200, true, "Server is running...", null);
  } catch (error: any) {
    return convertDataResponse(
      500,
      false,
      error?.message || "Lỗi hệ thống",
      null
    );
  }
};
