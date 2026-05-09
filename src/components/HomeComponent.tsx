import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Search, ShieldCheck, Microscope, MessageSquare, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface HomeComponentProps {
  onStart: (tab: 'flashcards' | 'quiz' | 'glossary' | 'tutor') => void;
}

export const HomeComponent: React.FC<HomeComponentProps> = ({ onStart }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const [showConfig, setShowConfig] = React.useState(false);
  const [apiKey, setApiKey] = React.useState(localStorage.getItem('gemini_api_key') || '');

  const saveApiKey = () => {
    localStorage.setItem('gemini_api_key', apiKey);
    setShowConfig(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-4 py-8 lg:py-12" id="home-section">
      <div className="text-right mb-4">
        <button 
          onClick={() => setShowConfig(!showConfig)}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-2 ml-auto"
        >
          <div className={cn("w-2 h-2 rounded-full", apiKey ? "bg-emerald-500" : "bg-amber-500")} />
          <Brain size={14} />
          {apiKey ? 'Tutor IA Configurado' : 'Configurar Tutor IA'}
        </button>
      </div>

      <AnimatePresence>
        {showConfig && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 lg:p-8 shadow-xl shadow-indigo-900/5">
              <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Brain className="text-primary" size={20} />
                Configuración del Tutor IA
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Para habilitar el diálogo socrático con la prof. de Epidemiología, ingresa tu API Key de Google Gemini. Esta clave se almacena de forma segura en tu navegador.
                  </p>
                  <div className="relative">
                    <input 
                      type="password"
                      placeholder="Ingresa tu API Key de Gemini..."
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-mono shadow-inner"
                    />
                  </div>
                  <button 
                    onClick={saveApiKey}
                    className="px-6 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-indigo-100"
                  >
                    Guardar y Activar Tutor
                  </button>
                </div>
                <div className="bg-indigo-50/50 rounded-2xl p-6 border border-indigo-100">
                  <h5 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">¿Cómo conseguir tu API Key?</h5>
                  <ol className="text-xs text-indigo-900/70 font-medium space-y-3 list-decimal pl-4 leading-relaxed">
                    <li>Ve a <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-primary font-bold underline">Google AI Studio</a>.</li>
                    <li>Inicia sesión con tu cuenta de Google.</li>
                    <li>Haz clic en <span className="font-bold">"Create API key"</span>.</li>
                    <li>Copia la clave y pégala aquí para empezar a estudiar.</li>
                  </ol>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12 lg:mb-20">
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-primary rounded-full text-[9px] lg:text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-100"
        >
          <Microscope size={12} />
          Plataforma de aprendizaje
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-sans lg:font-serif font-bold text-slate-800 mb-4 lg:mb-6 tracking-tight px-4"
        >
          EpIdemioLog<span className="text-primary italic">IA</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base lg:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium px-6"
        >
          Domina los conceptos fundamentales de la epidemiología a través de métodos activos y tutoría inteligente personalizada.
        </motion.p>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4"
      >
        <motion.div 
            variants={item}
            onClick={() => onStart('flashcards')}
            className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-primary/20 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all cursor-pointer flex flex-col h-full"
        >
          <div className="w-12 h-12 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Flashcards</h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">Repasa términos clave de forma dinámica y visual.</p>
        </motion.div>

        <motion.div 
            variants={item}
            onClick={() => onStart('quiz')}
            className="group bg-slate-900 p-8 rounded-3xl hover:shadow-2xl hover:shadow-slate-400 transition-all cursor-pointer flex flex-col h-full border border-slate-800"
        >
          <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Brain size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Cuestionarios</h3>
          <p className="text-slate-400 text-sm font-medium leading-relaxed">Pon a prueba tu conocimiento con preguntas académicas.</p>
        </motion.div>

        <motion.div 
            variants={item}
            onClick={() => onStart('glossary')}
            className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all cursor-pointer flex flex-col h-full"
        >
          <div className="w-12 h-12 bg-slate-50 text-slate-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
            <Search size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight">Glosario</h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">Consulta rápida de definiciones y conceptos técnicos.</p>
        </motion.div>

        <motion.div 
            variants={item}
            onClick={() => onStart('tutor')}
            className="group bg-white p-8 rounded-3xl border border-primary/10 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer flex flex-col h-full bg-gradient-to-br from-white to-indigo-50/30"
        >
          <div className="w-12 h-12 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 tracking-tight flex items-center gap-2">
            Tutor IA
            {!apiKey && <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />}
          </h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">Diálogo socrático con el Profesor para profundizar conceptos.</p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 lg:mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 px-4"
      >
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <Microscope size={20} />
            </div>
            <div>
                <p className="text-[10px] text-slate-400 font-medium">Basado en estándares internacionales y nacionales.</p>
            </div>
        </div>
        <div className="text-center md:text-left">
          <p className="text-[10px] text-slate-400 font-medium max-w-sm mb-1">
              Esta herramienta está diseñada para estudiantes y profesionales interesados en la epidemiología de enfermedades infecciosas.
          </p>
          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide opacity-80">
              EpIdemioLogIA v1.0 desarrollada por Lyda Osorio Universidad del Valle y TGHNLAC
          </p>
        </div>
      </motion.div>
    </div>
  );
};
