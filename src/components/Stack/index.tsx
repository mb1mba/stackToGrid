"use client"
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageProps {
  title: string;
  url: string;
  rotate: number;
  y: number;
}

interface StackProps {
  images: ImageProps[];
  onClick: () => void;
}

const Stack: React.FC<StackProps> = ({ images, onClick }) => {
  return (
    <motion.button 
      onClick={onClick}
      className="grid grid-rows-1 grid-cols-1"
      layoutId="transition" 
    >
    {images.map((img, i) => {
      const { url, title, rotate, y } = img
      
      return (
        <motion.div
        className="row-start-1 col-start-1 relative"
        style={{ width: "150px", height: "150px" }}
        initial={{rotate, y}}
        transition={{type: "spring", duration: .3, bounce: 0, mass: .6}}
        layoutId={title}
        key={title}
        >
          <Image 
          src={url} 
          key={url}
          alt={title}
          draggable={false}
          fill={true}
          className="rounded-xl border-2 border-white object-cover"
          />
        </motion.div>
      )}
    )}
  </motion.button>
  )
}

export default Stack