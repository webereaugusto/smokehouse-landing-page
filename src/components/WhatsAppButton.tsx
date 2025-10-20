import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <button
      onClick={() => window.open('https://wa.me/551932733108', '_blank')}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chamar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppButton;
