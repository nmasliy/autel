import SimpleModal from '../functions/modals';

const options = {
  onOpen: (modal) => {
    console.log('on open: ', modal);
  },
  onClose: (modal) => {
    console.log('on close', modal);
  },
  disableScroll: true,
  transition: 250,
  nested: false,
  overlayCloseAll: true,
};
const modals = new SimpleModal();
modals.init(options);
