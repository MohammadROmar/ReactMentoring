import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";

export type ModalHandler = {
  open: () => void;
  close: () => void;
};

type ModalProps = {
  children: ReactNode;
};

const Modal = forwardRef<ModalHandler, ModalProps>(function Modal(
  { children },
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

  return (
    <dialog ref={dialog} className="modal">
      {children}
    </dialog>
  );
});

export default Modal;
