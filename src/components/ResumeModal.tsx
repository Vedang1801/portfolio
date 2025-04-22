import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeModal = ({ isOpen, onClose, resumeUrl }: ResumeModalProps) => {
  // Prevent scrolling when modal is open
  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  // Handle clicks outside the modal content to close it
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div 
            className="bg-dark-surface border border-slate/20 rounded-lg w-full max-w-5xl h-[90vh] relative flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-slate/20">
              <h3 className="text-white text-xl font-bold">Resume</h3>
              <button 
                onClick={onClose} 
                className="text-slate hover:text-secondary transition-colors p-2"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <iframe 
                src={resumeUrl}
                className="w-full h-full" 
                title="Resume PDF"
                frameBorder="0"
              />
            </div>
            
            <div className="p-4 border-t border-slate/20 flex justify-end">
              <a 
                href={resumeUrl} 
                download="Vedang_Malusare_Resume.pdf"
                className="button-outline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="mr-2" size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;