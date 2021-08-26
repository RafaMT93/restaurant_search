import React from 'react';
import PortalModal from './PortalModal';

import { Overlay, Dialog } from './style';

const Modal = ({ children, open, onClose }) => {
  React.useEffect(() => {
    function onEsc({ keyCode }) {
      if (keyCode === 27) {
        onClose();
      }
    }
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  function onOverlayClick() {
    onClose();
  }
  function onDialogClick(e) {
    e.stopPropagation();
  }

  if (!open) return null;
  else
    return (
      <PortalModal>
        <Overlay onClick={onOverlayClick}>
          <Dialog onClick={onDialogClick}>{children}</Dialog>
        </Overlay>
      </PortalModal>
    );
};

export default Modal;
