import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Award } from 'lucide-react';
import { terms, Question } from '../data';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

export const QuizComponent: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const generateQuiz = () => {
    // 1. Pick 4 random terms to be questions
    const selectedTerms = [...terms].sort(() => Math.random() - 0.5).slice(0, 4);
    
    const newQuestions: Question[] = selectedTerms.map((termItem) => {
      // 2. Get 3 random distractor definitions from other terms
      const distractors = terms
        .filter(t => t.id !== termItem.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(t => t.definition);
      
      // 3. Combine with correct answer and shuffle options
      const options = [termItem.definition, ...distractors].sort(() => Math.random() - 0.5);
      const correctAnswerIndex = options.indexOf(termItem.definition);
      
      return {
        id: `dynamic-${termItem.id}`,
        text: `¿Cuál es la definición correcta de "${termItem.term}"?`,
        options,
        correctAnswer: correctAnswerIndex,
        explanation: `El término "${termItem.term}" se define como: ${termItem.definition}`
      };
    });

    setShuffledQuestions(newQuestions);
  };

  useEffect(() => {
    generateQuiz();
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleAnswer = () => {
    if (selectedOption === null || !currentQuestion) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score + (selectedOption === (currentQuestion?.correctAnswer ?? -1) ? 1 : 0) >= shuffledQuestions.length / 2) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const resetQuiz = () => {
    generateQuiz();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (!shuffledQuestions.length) return null;

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto bg-white p-8 lg:p-12 rounded-2xl shadow-xl shadow-indigo-900/5 text-center flex flex-col items-center"
        id="quiz-result"
      >
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-indigo-50 rounded-full flex items-center justify-center mb-6 text-primary">
          <Award size={32} className="lg:hidden" />
          <Award size={48} className="hidden lg:block" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-2">¡Cuestionario Terminado!</h2>
        <p className="text-slate-500 mb-8 font-medium text-sm lg:text-base">Has completado el cuestionario de EpIdemioLogIA.</p>
        
        <div className="text-5xl lg:text-6xl font-black text-slate-800 mb-2">
          {score} / {shuffledQuestions.length}
        </div>
        <p className="text-[10px] lg:text-xs font-bold text-primary uppercase tracking-widest mb-10 lg:mb-12">Puntaje Final</p>

        <button 
          onClick={resetQuiz}
          className="flex items-center gap-3 px-8 py-3 lg:py-4 bg-primary text-white font-bold rounded-xl lg:rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 text-sm"
        >
          <RotateCcw size={18} />
          Reintentar
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 w-full" id="quiz-section">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}</span>
        <div className="flex gap-1.5">
          {shuffledQuestions.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "h-1 w-6 rounded-full transition-all duration-300",
                idx === currentQuestionIndex ? "bg-primary w-10" : idx < currentQuestionIndex ? "bg-emerald-400" : "bg-slate-200"
              )} 
            />
          ))}
        </div>
      </div>

      <motion.div 
        key={currentQuestionIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-200 shadow-xl shadow-indigo-900/5"
      >
        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-8 lg:mb-10 leading-tight tracking-tight">{currentQuestion.text}</h3>

        <div className="space-y-2 lg:space-y-3 mb-8 lg:mb-10">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={cn(
                "w-full text-left p-4 lg:p-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                selectedOption === idx 
                  ? isAnswered 
                    ? idx === currentQuestion.correctAnswer 
                      ? "border-emerald-500 bg-emerald-50 text-emerald-900" 
                      : "border-red-500 bg-red-50 text-red-900"
                    : "border-primary bg-indigo-50 text-slate-900"
                  : isAnswered && idx === currentQuestion.correctAnswer
                    ? "border-emerald-500 bg-emerald-50 text-emerald-900"
                    : "border-slate-100/50 hover:border-slate-200 text-slate-600 hover:bg-slate-50"
              )}
              disabled={isAnswered}
            >
              <span className="font-semibold text-xs lg:text-sm">{option}</span>
              {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle2 className="text-emerald-500 shrink-0 ml-4 lg:ml-0" size={20} />}
              {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && <XCircle className="text-red-500 shrink-0 ml-4 lg:ml-0" size={20} />}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isAnswered ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex flex-col gap-6"
            >
              <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-primary italic text-slate-600 text-sm leading-relaxed font-medium">
                <span className="font-bold text-slate-900 not-italic block mb-1 uppercase text-[10px] tracking-widest">Explicación Académica</span>
                {currentQuestion.explanation}
              </div>
              <button 
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-black transition-all active:scale-95 shadow-xl"
              >
                {currentQuestionIndex === shuffledQuestions.length - 1 ? 'Ver Resultado' : 'Siguiente Pregunta'}
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ) : (
            <button 
              onClick={handleAnswer}
              disabled={selectedOption === null}
              className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-indigo-700 transition-all disabled:opacity-30 disabled:bg-slate-200 disabled:cursor-not-allowed shadow-lg shadow-indigo-100 text-sm"
            >
              Comprobar Respuesta
            </button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
