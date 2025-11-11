import  { useState } from "react";
// import axios from "axios";
// import { API_URL } from "../api/api";
import "../styles/ChatModal.scss";
import { Bot, Forward } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define the types for the moods
// type ChatMood = "greeting" | "thinking" | "answering" | "idle" | "idk";

// Define the props for ChatModal
interface ChatModalProps {
  closeModal: () => void;
}

const ChatModal : React.FC<ChatModalProps> = ({ closeModal }) => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        t("ai.startingMsg"),
    },
  ]);
  const [input, setInput] = useState("");
  // Loading spinner / typing indicator
  const [loading, setLoading] = useState(false);

  // Mood images
//   const [chatMood, setChatMood] = useState<ChatMood>("greeting");

  // Map each mood to its corresponding image
//   const imageMapping : Record<ChatMood, string> = {
//     greeting: "/hi-me.webp",
//     thinking: "/thinking-me.webp",
//     answering: "/work-me.webp",
//     idle: "/work-me.webp",
//     idk: "/idk-me.webp"
//   };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    // Switch to "thinking" mood and set loading
    // setChatMood("thinking");
    setLoading(true);

    try {
    //   const response = await axios.post(`${API_URL}/chat`, {
    //     messages: updatedMessages,
    //   });

    const response = { data: { reply: "This is a placeholder response from the AI." } }; // Placeholder response
      const assistantMessage = {
        role: "assistant",
        content: response.data.reply,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      // Switch to "answering" mood, then go "idle"
    //   setChatMood("answering");
      setTimeout(() => {
        // setChatMood("idle");
      }, 5000);
    } catch (error) {
      console.error("Error fetching AI response", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: t("ai.error") },
      ]);
    //   setChatMood("idk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= {`chat-modal-overlay ${i18n.language === "ar" ? "chat-modal-overlay--ar" : ""}`}>
      <div className="chat-modal">
        {/* Header with a title and a close (X) button */}
        <div className="chat-header">
          <div className="chat-title">
            {" "}
            {/* <img src="logo-blue-light.svg" alt="AI Logo" width="20%" /> */}
            <h2>{t("ai.title")}</h2>
          </div>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="chat-mood-container">
          {/* <img
            src={imageMapping[chatMood]}
            alt="Chat mood"
            className="chat-mood-img"
          /> */}
          <Bot />
        </div>
        {/* Conversation area */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.role}`}>
              {msg.content}
            </div>
          ))}
          {loading && <div className="message assistant">{t("ai.writting")}</div>}
        </div>

        {/* Input row */}
        <div className="chat-input">
          <input
            type="text"
            placeholder={t("ai.placeholder")}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <button onClick={handleSend}>
            <Forward size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
