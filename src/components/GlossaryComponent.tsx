import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Book, ChevronRight, X } from 'lucide-react';
import { terms, Term } from '../data';
import { cn } from '../lib/utils';

export const GlossaryComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  const filteredTerms = useMemo(() => {
    return terms.filter(t => {
      const matchesSearch = t.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.definition.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto p-4 w-full flex flex-col gap-6" id="glossary-section">
      {/* Search Header */}
      <div className="relative w-full max-w-xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Buscar concepto o definición..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-lg shadow-indigo-900/5 font-medium text-base h-14"
        />
      </div>

      {/* Terms Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredTerms.map((term) => (
              <motion.div
                layout
                key={term.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedTerm(term)}
                className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-900/5 hover:border-primary/20 transition-all cursor-pointer flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors tracking-tight leading-tight">{term.term}</h3>
                  <p className="text-slate-500 text-sm mt-3 line-clamp-3 leading-relaxed font-medium">{term.definition}</p>
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <div className="px-4 py-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all shadow-sm flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                    Ver más
                    <ChevronRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredTerms.length === 0 && (
          <div className="py-20 text-center flex flex-col items-center bg-white rounded-3xl border-2 border-dashed border-slate-100 mt-4">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
              <Search size={32} className="text-slate-200" />
            </div>
            <p className="text-slate-400 font-bold text-sm leading-tight uppercase tracking-widest mb-2">No se encontró el concepto</p>
            <p className="text-slate-300 text-xs font-medium mb-6">Intenta con una palabra clave diferente</p>
            <button 
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-primary text-white rounded-full font-bold text-xs uppercase hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-indigo-100"
            >
                Limpiar búsqueda
            </button>
          </div>
        )}
      </div>

      {/* Modal - Details */}
      <AnimatePresence>
        {selectedTerm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              onClick={() => setSelectedTerm(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 lg:p-12 overflow-hidden"
              id="term-modal"
            >
              <button 
                onClick={() => setSelectedTerm(null)}
                className="absolute right-6 top-6 p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800 mb-8 leading-tight tracking-tighter">{selectedTerm.term}</h2>
              
              <div className="p-8 bg-indigo-50/50 rounded-2xl border border-indigo-100 mb-8 shadow-inner">
                <p className="text-slate-800 font-semibold leading-relaxed text-lg lg:text-xl italic">
                  "{selectedTerm.definition}"
                </p>
              </div>

              {selectedTerm.details && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-primary rounded-full" />
                    <h4 className="text-[10px] font-black text-primary uppercase tracking-widest leading-none">
                      Contexto clínico y epidemiológico
                    </h4>
                  </div>
                  <p className="text-slate-600 text-base leading-relaxed font-medium">
                    {selectedTerm.details}
                  </p>
                </div>
              )}

              <button 
                onClick={() => setSelectedTerm(null)}
                className="w-full py-5 bg-primary text-white font-black rounded-2xl hover:bg-slate-900 transition-all active:scale-[0.98] shadow-2xl shadow-indigo-200 uppercase tracking-widest text-xs"
              >
                Entendido, continuar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
