import { motion } from "framer-motion";
import Image from "next/image";
import { PhotoGallery } from "../../../public/data/photo-gallery";

const ImageGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {PhotoGallery.map((photo, i) => (
        <div
          key={`photo-grid-${i}`}
          className="flex justify-center items-center"
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={`#${i}`}>
              <Image
                width={100}
                height={100}
                id={i.toString()}
                src={photo.photo}
                className="rounded-full object-cover opacity-80 z-10 h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
                alt={`Our Practice ${i}`}
              />
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
