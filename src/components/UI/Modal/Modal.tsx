import {
  ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
  useImperativeHandle,
  useRef,
} from "react";

import "./Modal.css";
import { createPortal } from "react-dom";

export type ModalHandler = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"dialog">;

const Modal = forwardRef<ModalHandler, ModalProps>(function Modal(
  { children, ...props },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        } else {
          throw new Error();
        }
      },
      close() {
        if (dialog.current) {
          dialog.current.close();
        } else {
          throw new Error();
        }
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="modal" {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
});

export default Modal;
