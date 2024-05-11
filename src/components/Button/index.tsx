import { AnimatePresence, motion } from "framer-motion"

interface ButtonProps {
  handleToggle: () => boolean;
}

const CloseButton: React.FC<ButtonProps> = ({handleToggle}) => 
  {
    return (
      <AnimatePresence mode="wait">
        {
          handleToggle() && (
          <motion.button
          onClick={handleToggle}
          className="absolute bg-[rgb(64,134,179)] text-white py-2 px-5 rounded-[65px] border-2 border-[#499ccf]"
          initial={{ top: "-100px" }}
          animate={{ top: "20px", transition: { duration: .3, ease: "easeOut" } }}
          exit={{ top:"-100px" }}
          >
            Close
          </motion.button> )
        }
      </AnimatePresence>
    )
  }

  export default CloseButton