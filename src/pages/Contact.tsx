import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Send, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: 'name',
    question: "Who is requesting the transmission?",
    type: 'text',
    placeholder: 'IDENTIFY YOURSELF...',
    label: 'Name'
  },
  {
    id: 'email',
    question: "Where can we establish a secure link?",
    type: 'email',
    placeholder: 'ARCHITECT@VOID.COM',
    label: 'Email'
  },
  {
    id: 'type',
    question: "What is the nature of the illusion we are building?",
    type: 'select',
    options: ['WebGL Experience', 'AI Integration', 'Full-Stack Architecture', 'Other'],
    label: 'Project Type'
  },
  {
    id: 'details',
    question: "Provide the coordinates (Budget & Details).",
    type: 'textarea',
    placeholder: 'TELL US ABOUT THE ILLUSION...',
    label: 'Message'
  }
];

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsComplete(true);
  };

  const step = steps[currentStep];

  return (
    <div className="pt-32">
      <section className="px-4 md:px-12 min-h-[70vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          {!isComplete ? (
            <div className="space-y-12">
              <div className="flex items-center space-x-4">
                <span className="font-mono text-[10px] text-biolu tracking-[0.3em] uppercase">Step 0{currentStep + 1} / 04</span>
                <div className="h-[1px] w-12 bg-white/10" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                  <h2 className="text-4xl md:text-6xl font-display mb-12 leading-tight">
                    {step.question}
                  </h2>

                  <form onSubmit={handleNext} className="relative">
                    {step.type === 'select' ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.options?.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, [step.id]: opt });
                              setTimeout(() => setCurrentStep(currentStep + 1), 300);
                            }}
                            className={`p-6 border text-left font-display text-xl transition-all duration-500 ${
                              formData[step.id] === opt 
                              ? 'border-electric bg-electric/10 text-ghost' 
                              : 'border-white/10 hover:border-ghost/50 text-muted-gray'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    ) : step.type === 'textarea' ? (
                      <textarea
                        autoFocus
                        required
                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-biolu transition-colors text-2xl md:text-4xl resize-none font-light"
                        placeholder={step.placeholder}
                        value={formData[step.id] || ''}
                        onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
                        rows={3}
                      />
                    ) : (
                      <input
                        autoFocus
                        required
                        type={step.type}
                        className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-biolu transition-colors text-2xl md:text-4xl font-light"
                        placeholder={step.placeholder}
                        value={formData[step.id] || ''}
                        onChange={(e) => setFormData({ ...formData, [step.id]: e.target.value })}
                      />
                    )}

                    <div className="mt-16 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
                        className={`font-mono text-[10px] tracking-widest uppercase transition-opacity ${
                          currentStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-50 hover:opacity-100'
                        }`}
                      >
                        [ Go Back ]
                      </button>

                      {(step.type !== 'select' || formData[step.id]) && (
                        <motion.button
                          whileHover={{ x: 10 }}
                          className="flex items-center space-x-4 group interactive"
                        >
                          <span className="font-display text-2xl tracking-tighter">
                            {isSubmitting ? 'UPLOADING...' : currentStep === steps.length - 1 ? '[ TRANSMIT DATA ]' : 'NEXT STEP'}
                          </span>
                          {!isSubmitting && <Send className="w-5 h-5 text-biolu group-hover:text-electric transition-colors" />}
                        </motion.button>
                      )}
                    </div>
                  </form>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="w-24 h-24 text-biolu" />
              </div>
              <h2 className="text-5xl md:text-7xl font-display">[ SECURE UPLOAD COMPLETE ]</h2>
              <p className="text-muted-gray font-mono tracking-widest uppercase">
                Transmission received. Expect a response in deep space.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-12 py-4 border border-white/10 hover:bg-ghost hover:text-obsidian transition-all uppercase font-mono text-xs tracking-widest"
              >
                Return Home
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
