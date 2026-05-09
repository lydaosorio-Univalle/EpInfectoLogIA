import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Brain, Search, Home as HomeIcon, Microscope, MessageSquare } from 'lucide-react';
import { TutorComponent } from './components/TutorComponent';
import { FlashcardComponent } from './components/FlashcardComponent';
import { QuizComponent } from './components/QuizComponent';
import { GlossaryComponent } from './components/GlossaryComponent';
import { HomeComponent } from './components/HomeComponent';
import { cn } from './lib/utils';

type Tab = 'home' | 'flashcards' | 'quiz' | 'glossary' | 'tutor';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const getTabIcon = (tab: Tab) => {
    switch (tab) {
      case 'home': return <HomeIcon size={18} />;
      case 'flashcards': return <ShieldCheck size={18} />;
      case 'quiz': return <Brain size={18} />;
      case 'glossary': return <Search size={18} />;
      case 'tutor': return <MessageSquare size={18} />;
    }
  };

  const getTabLabel = (tab: Tab) => {
    switch (tab) {
      case 'home': return 'Inicio';
      case 'flashcards': return 'Flashcards';
      case 'quiz': return 'Quiz';
      case 'glossary': return 'Glosario';
      case 'tutor': return 'Tutor IA';
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden" id="main-app">
      {/* Sidebar Navigation - Desktop */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col shrink-0">
        <div className="p-6 border-b border-slate-100">
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => setActiveTab('home')}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-100 transition-transform group-hover:rotate-6">
              <Microscope size={18} />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">EpIdemioLogIA</h1>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-semibold mt-1">Epidemiología</p>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {(['home', 'flashcards', 'quiz', 'glossary', 'tutor'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors cursor-pointer text-left",
                activeTab === tab 
                  ? "bg-indigo-50 text-primary" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700"
              )}
            >
              {getTabIcon(tab)}
              <span>{getTabLabel(tab)}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 bg-slate-50 border-t border-slate-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tu Progreso</span>
            <span className="text-xs font-bold text-primary">64%</span>
          </div>
          <div className="w-full bg-slate-200 h-1.5 rounded-full">
            <div className="bg-primary h-1.5 rounded-full w-[64%] transition-all duration-500"></div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden pb-20 lg:pb-0">
        {/* Top Header */}
        <header className="h-16 lg:h-20 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
          <div className="flex-1 lg:hidden">
            <h1 className="text-lg font-bold tracking-tight text-slate-800">EpIdemioLogIA</h1>
          </div>
          <div className="hidden lg:block flex-1" />
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">
              <Brain size={16} className="lg:hidden" />
              <Brain size={18} className="hidden lg:block" />
            </button>
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-primary font-bold shadow-sm cursor-default text-xs lg:text-sm">
              Ed
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="max-w-6xl mx-auto w-full h-full"
            >
              {activeTab === 'home' && <HomeComponent onStart={setActiveTab} />}
              {activeTab === 'flashcards' && (
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex items-center justify-between px-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Estudio Activo</h2>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-[9px] lg:text-[10px] font-black rounded-full uppercase tracking-wider">Conceptos Base</span>
                  </div>
                  <FlashcardComponent />
                </div>
              )}
              {activeTab === 'quiz' && (
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="flex items-center justify-between px-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Evaluación</h2>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[9px] lg:text-[10px] font-black rounded-full uppercase tracking-wider">Nivel Académico</span>
                  </div>
                  <QuizComponent />
                </div>
              )}
              {activeTab === 'glossary' && (
                <div className="flex flex-col gap-4 lg:gap-6">
                  <div className="px-2 mb-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Diccionario Especializado</h2>
                    <p className="text-slate-400 text-xs lg:text-sm font-medium">Búsqueda rápida y filtrado por categorías.</p>
                  </div>
                  <GlossaryComponent />
                </div>
              )}
              {activeTab === 'tutor' && (
                <div className="flex flex-col gap-4 lg:gap-6 h-full">
                  <div className="px-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-slate-800">Tutoría Inteligente</h2>
                    <p className="text-slate-400 text-xs lg:text-sm font-medium">Diálogo socrático con una experta en epidemiología.</p>
                  </div>
                  <TutorComponent />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Bottom Navigation - Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 flex items-center justify-around px-1 z-50 shadow-2xl">
        {(['home', 'flashcards', 'quiz', 'glossary', 'tutor'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all",
              activeTab === tab ? "text-primary scale-110" : "text-slate-400"
            )}
          >
            {getTabIcon(tab)}
            <span className="text-[10px] font-bold">{getTabLabel(tab)}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
