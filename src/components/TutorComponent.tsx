import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Brain, RotateCcw, AlertTriangle, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { cn } from '../lib/utils';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export const TutorComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getApiKey = () => localStorage.getItem('gemini_api_key');

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const apiKey = getApiKey();
    if (!apiKey) {
      setError('Por favor, configura tu API Key en la pantalla de inicio para hablar con el tutor.');
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `Eres una experta profesora de epidemiología especializada en enfermedades infecciosas, 
con profundo conocimiento de las enfermedades tropicales desatendidas (ETD) y los planes nacionales de eliminación y erradicación de Colombia. 
Tu estilo de enseñanza es estrictamente SOCRÁTICO: nunca das respuestas directas primero; en su lugar, guías a los estudiantes para que descubran los conceptos por sí mismos a través de preguntas estratégicas, ejemplos reales y diálogo reflexivo.

REGLAS DE INTERACCIÓN:
- Responde SIEMPRE con una pregunta antes de dar cualquier explicación.
- Haz una pregunta a la vez. Espera la respuesta del estudiante antes de continuar.
- Si el estudiante responde correctamente, valídalo, construye sobre ello y profundiza con una pregunta de seguimiento.
- Si responde incorrectamente, NO lo corrijas directamente. Haz una pregunta que lo ayude a reconsiderar.
- Usa datos epidemiológicos reales de Colombia cuando sea posible (ej. Chagas en Arauca, Malaria en Chocó, Oncocercosis en López de Micay).
- Idioma predeterminado: Español.
- Evita monólogos. Máximo 3 frases antes de preguntar.`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      const modelText = response.text || "Lo siento, no pude generar una respuesta.";
      setMessages(prev => [...prev, { role: 'model', content: modelText }]);
    } catch (err: any) {
      console.error(err);
      setError('Ocurrió un error al conectar con el tutor. Verifica tu API Key.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden" id="tutor-container">
      {/* Header */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="font-bold text-slate-800">Tutor Socrático</h3>
            <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mt-1">la prof. Epidemiología</p>
          </div>
        </div>
        <button 
          onClick={resetChat}
          className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-xl hover:bg-red-50"
          title="Reiniciar conversación"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-8">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="text-primary opacity-40" size={40} />
            </div>
            <h4 className="text-xl font-bold text-slate-800 mb-3">¿Qué quieres explorar hoy?</h4>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
              Soy tu tutora de epidemiología. No te daré la respuesta, pero te haré las preguntas correctas para que la encuentres.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-md">
              {[
                "¿Qué es la tasa de ataque?",
                "Háblame de la Malaria en Colombia",
                "Diferencia entre endemia y epidemia",
                "Status de la Oncocercosis"
              ].map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(suggestion)}
                  className="px-4 py-3 bg-slate-50 hover:bg-indigo-50 border border-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all text-left"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={cn(
                "flex gap-4 max-w-[85%]",
                m.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm",
                m.role === 'user' ? "bg-slate-200 text-slate-600" : "bg-primary text-white"
              )}>
                {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                m.role === 'user' 
                  ? "bg-primary text-white rounded-tr-none font-medium" 
                  : "bg-slate-50 text-slate-700 border border-slate-100 rounded-tl-none font-medium"
              )}>
                {m.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <div className="flex gap-4 animate-pulse">
            <div className="w-8 h-8 rounded-full bg-slate-100 shrink-0" />
            <div className="p-4 bg-slate-50 rounded-2xl rounded-tl-none border border-slate-100 w-32 h-10" />
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
            <div className="flex-1">
              <p className="text-xs font-bold text-red-900 uppercase tracking-widest mb-1">Error de conexión</p>
              <p className="text-xs text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-slate-100 bg-white">
        <div className="relative flex items-center gap-3">
          <input
            type="text"
            placeholder={getApiKey() ? "Escribe tu duda o respuesta..." : "Configura tu API Key primero..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            disabled={isLoading || !getApiKey()}
            className="flex-1 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-medium text-sm disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim() || !getApiKey()}
            className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-slate-900 transition-all active:scale-95 shadow-xl shadow-indigo-100 disabled:opacity-50 disabled:shadow-none"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
