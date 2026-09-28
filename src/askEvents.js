export const ASK_OPEN_EVENT = "ask-agent:open";

export function openAskAgent(question) {
  window.dispatchEvent(new CustomEvent(ASK_OPEN_EVENT, { detail: { question } }));
}
