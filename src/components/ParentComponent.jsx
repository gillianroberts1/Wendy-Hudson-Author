import { AnimatePresence } from "framer-motion";
import BookModal from "./BookModal";

export default function ParentComponent({ showModal, hide }) {
  return (
    <AnimatePresence>
      {showModal && (
        <BookModal
          title="Some Book"
          description="A great book"
          // other props...
          hide={hide}
        />
      )}
    </AnimatePresence>
  );
}
