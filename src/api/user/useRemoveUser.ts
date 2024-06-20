import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../httpClient";
import { API_URLS } from "../endpoints";
import { DataQueryKeys } from "../data-query-keys";

export function useUserDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: any) => {
      const data = await httpClient.delete(API_URLS.patchUserList(id));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DataQueryKeys.USER_LIST] });
    },
  });
}