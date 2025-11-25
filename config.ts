import { openai } from "@ai-sdk/openai";
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

export const MODEL = openai('gpt-4.1');

function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "BizGuide";
export const OWNER_NAME = "Lekhasri PS";

export const WELCOME_MESSAGE = `Welcome to BizGuide! To provide you with the most accurate MSME guidance, could you share:

🏢 **Industry:** [Manufacturing/Retail/Services/Other] 

👥 **Company Size:** [Micro/Small/Medium]  

📍 **Location:** [State/City]

💰 **Annual Revenue:** [Approximate range]

🎯 **Current Challenge:** [Cash flow/Marketing/Operations/Growth]

The more details you provide, the more tailored my advice will be`;

export const CLEAR_CHAT_TEXT = "New Conversation";

export const MODERATION_DENIAL_MESSAGE_SEXUAL = "I focus on business-related discussions. Let's keep our conversation professional and productive.";
export const MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS = "I provide business guidance for established enterprises. Let's focus on professional topics.";
export const MODERATION_DENIAL_MESSAGE_HARASSMENT = "I'm here to provide business support in a respectful manner. Let's maintain professional discourse.";
export const MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING = "I provide constructive business advice. Let's keep our discussion professional.";
export const MODERATION_DENIAL_MESSAGE_HATE = "I promote inclusive business practices. Let's discuss how we can support diverse entrepreneurship.";
export const MODERATION_DENIAL_MESSAGE_HATE_THREATENING = "I specialize in positive business growth strategies. Let's focus on constructive solutions.";
export const MODERATION_DENIAL_MESSAGE_ILLICIT = "I provide guidance on legal business practices and compliance. Let's discuss legitimate business strategies.";
export const MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT = "I focus on peaceful business development. How can I help with your business challenges?";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM = "Running a business can be challenging. For business stress management, I recommend connecting with small business support networks or please reach out to a mental health professional or crisis helpline.";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT = "Business ownership comes with pressures. For support with business challenges, consider reaching out to entrepreneurship mentors or please reach out to a mental health professional or crisis helpline.";
export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS = "I provide business operation guidance. For personal wellbeing support, please consult appropriate professionals.";
export const MODERATION_DENIAL_MESSAGE_VIOLENCE = "I specialize in sustainable business growth strategies. Let's discuss productive approaches.";
export const MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC = "I focus on constructive business solutions. How can I help improve your business operations?";
export const MODERATION_DENIAL_MESSAGE_DEFAULT = "That topic falls outside my business advisory scope. I'm here to help with MSME growth strategies.";

export const PINECONE_TOP_K = 40;
export const PINECONE_INDEX_NAME = "my-ai";
