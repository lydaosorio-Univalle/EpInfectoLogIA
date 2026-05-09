import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { terms, Term } from '../data';
import { cn } from '../lib/utils';

export const FlashcardComponent: React.FC = () => {
  const shuffledTerms = useMemo(() => {
    return [...terms].sort(() => Math.random() - 0.5);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentTerm = shuffledTerms[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledTerms.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shuffledTerms.length) % shuffledTerms.length);
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full max-w-2xl mx-auto p-4" id="flashcard-section">
      <div className="mb-8 text-center text-[10px] lg:text-sm font-medium text-slate-400 uppercase tracking-widest">
        Término {currentIndex + 1} de {shuffledTerms.length}
      </div>

      <div 
        className="relative w-full h-64 lg:h-80 perspective-1000 cursor-pointer group"
        onClick={handleFlip}
        id="flashcard-container"
      >
        <motion.div
          className="w-full h-full relative preserve-3d transition-transform duration-500"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl shadow-xl shadow-indigo-900/5 flex flex-col items-center justify-center p-6 lg:p-8 text-center" style={{ backfaceVisibility: 'hidden' }}>
            <span className="text-[9px] lg:text-[10px] font-black text-primary border border-indigo-100 mb-4 px-3 py-1 bg-indigo-50 rounded-full uppercase tracking-widest">{currentTerm.category}</span>
            <h2 className="text-2xl lg:text-4xl font-sans lg:font-serif font-bold text-slate-800 leading-tight tracking-tight">{currentTerm.term}</h2>
            <p className="mt-8 text-slate-300 text-[10px] lg:text-xs font-bold uppercase tracking-tighter group-hover:text-primary transition-colors">Presione para revelar definición</p>
          </div>

          {/* Back */}
          <div 
            className="absolute inset-0 w-full h-full backface-hidden bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-6 lg:p-10 text-center text-white"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <p className="text-base lg:text-xl font-medium leading-relaxed">{currentTerm.definition}</p>
            {currentTerm.details && (
              <p className="hidden lg:block mt-6 text-sm text-slate-400 leading-relaxed border-t border-slate-800 pt-6 font-medium italic">{currentTerm.details}</p>
            )}
            <p className="mt-6 lg:mt-8 text-indigo-400 text-[9px] lg:text-[10px] font-black uppercase tracking-widest opacity-60">Toque para volver</p>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center gap-4 lg:gap-6 mt-10 lg:mt-12">
        <button 
          onClick={handlePrev}
          className="p-3 lg:p-4 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-primary hover:bg-slate-50 transition-all shadow-sm active:scale-90"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} className="lg:hidden" />
          <ChevronLeft size={24} className="hidden lg:block" />
        </button>
        
        <button 
          onClick={handleFlip}
          className="flex items-center gap-2 px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl bg-primary text-white font-bold text-xs lg:text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
        >
          <RotateCcw size={14} className="lg:hidden" />
          <RotateCcw size={16} className="hidden lg:block" />
          Voltear
        </button>

        <button 
          onClick={handleNext}
          className="p-3 lg:p-4 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-primary hover:bg-slate-50 transition-all shadow-sm active:scale-90"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} className="lg:hidden" />
          <ChevronRight size={24} className="hidden lg:block" />
        </button>
      </div>
    </div>
  );
};
