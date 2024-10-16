import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateSetting as updateSettingAPI } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingAPI,
    onSuccess: () => {
      toast.success(`setting Successfully Edited`);
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
      //   reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isUpdating, updateSetting };
}
