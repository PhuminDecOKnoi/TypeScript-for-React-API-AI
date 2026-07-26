export type AiTone = "professional" | "friendly" | "concise"

export interface AiSummaryRequest {
  topic: string
  tone: AiTone
}

export interface AiSummaryResponse {
  success: true
  summary: string
  generatedAt: string
}

export function createAiSummary(
  request: AiSummaryRequest,
): AiSummaryResponse {
  return {
    success: true,
    summary: `Summary (${request.tone}): ${request.topic}`,
    generatedAt: new Date().toISOString(),
  }
}
