import axios from "axios";

export async function log(
  stack: "frontend" | "backend",
  level: "debug" | "info" | "warn" | "error" | "fatal",
  packageName: string,
  message: string
) {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: packageName,
      message,
    });
    console.log("✅ Log sent:", response.data.message);
  } catch (error: any) {
    console.error("❌ Failed to send log:", error.message);
  }
}
