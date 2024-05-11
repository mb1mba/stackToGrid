import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion'

interface ImageProps {
  title: string;
  url: string;
}

interface GridProps {
  images: ImageProps[];
}

const Grid: React.FC<GridProps> = ({images}) => {
  return (
  <>
    <div key="grid" className="grid grid-cols-3 grid-rows-2 gap-2">
      <AnimatePresence mode="wait">
      {images.map((img, i) => {
        const { url, title } = img

        return (
          <motion.div
          key={title}
          layoutId={title}
          transition={{ type: "spring", duration: .3, bounce: 0, mass: .6 }}
          className="drop-shadow-md"
          >
          <Image 
            alt={title}
            key={url}
            src={url}
            height={300}
            width={300}
            draggable={false}
            className=" rounded-xl border-2 border-white"
            />
        </motion.div>

        )
      }      )}
      </AnimatePresence>
    </div>
    </>
  )
}

export default Grid