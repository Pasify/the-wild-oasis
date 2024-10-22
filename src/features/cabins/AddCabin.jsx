import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const closeModal = () => setIsOpenModal(false);
  return (
    <>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add New Cabin
      </Button>

      {isOpenModal && (
        <Modal onCloseModal={() => closeModal()}>
          <CreateCabinForm onCloseModal={() => closeModal()} />
        </Modal>
      )}
    </>
  );
}

export default AddCabin;
