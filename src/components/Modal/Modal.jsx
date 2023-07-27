import { ModalContent, ModalWrapper } from './style';

const Modal = ({ children, isVisiable, setIsVisiable }) => {
  return (
    <ModalWrapper onClick={() => setIsVisiable(false)} display={isVisiable ? 1 : 0}>
      <ModalContent onClick={(e) => e.stopPropagation()}>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
