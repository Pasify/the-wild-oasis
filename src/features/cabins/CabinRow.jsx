import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const queryClient = useQueryClient();
  const {
    id: cabinId,
    name: cabinName,
    maxCapacity,
    discount,
    image,
    regularPrice,
  } = cabin;

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("cabin deleted successfully");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function handleDelete() {
    console.log(`cabin ${cabinId} was clicked`);
    mutate(cabinId);
  }
  return (
    <TableRow role="row">
      <Img src={image} alt={cabinName} />
      <Cabin>{cabinName}</Cabin>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <button
        type="button"
        onClick={() => handleDelete()}
        disabled={isDeleting}
      >
        Delete
      </button>
    </TableRow>
  );
}

export default CabinRow;
