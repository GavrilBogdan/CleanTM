"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Define the props the component will accept
type InfoBubbleProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function InfoBubble({
  isOpen,
  onClose,
  title,
  children,
}: InfoBubbleProps) {
  return (
    <AnimatePresence>
      {/* We only render the modal if isOpen is true */}
      {isOpen && (
        <>
          {/* 1. The Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            // This covers the whole screen and closes the modal on click
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />

          {/* 2. The "Bubble" Content Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            // This centers the bubble and holds the content
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                       w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 
                       shadow-2xl p-6"
          >
            {/* 3. Header and Close Button */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-gray-500 dark:text-gray-400 cursor-pointer
                           hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* 4. The Content */}
            <div className="text-gray-700 dark:text-gray-300">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
