import { useRef } from "react";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;
        inputRef.current.value = ""; // Clear the input field after submission

        // Update chat history with the user's message
        setChatHistory((history) => [...history, {role: "user", text: userMessage}]);

        // Simulate a bot response after a short delay
        setTimeout(() => {
            // Update chat history with a "thinking" message
            setChatHistory((history) => [...history, {role: "mode", text: "Thinking..." }]),
            
            // Call the function to generate the bot's response
            generateBotResponse([...chatHistory, {role: "user", text: userMessage}]);
        }, 600);
    };

    return (
        <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
              <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required/>
              <button className="material-symbols-rounded">arrow_upward</button>
            </form>
    );
};

export default ChatForm;
