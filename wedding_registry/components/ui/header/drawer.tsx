import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Drawer: React.FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  console.log('Drawer isOpen:', isOpen);


    // Close the drawer when clicked outside
    const handleClose = () => {
      setIsOpen(false);
    };
   
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-30 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose} 
        >
          <motion.div
            className="bg-white h-3/4 w-full  sm:w-full shadow-xl overflow-y-auto"
            initial={{ x: '200%', y:'20%' }}
            animate={{ x: '-4.23%' }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{ top: '1%' }} 
          >
            
            <div className="p-6 flex flex-col space-y-4">
              {children}
    
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;