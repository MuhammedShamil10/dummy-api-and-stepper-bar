import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../httpClient";
import { API_URLS } from "../endpoints";
import { newUser } from "../../type/userList";
import { DataQueryKeys } from "../data-query-keys";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({id, name, job}: any) => {
      const data = httpClient.patch(API_URLS.patchUserList(id), {
        name: name,
        job: job,
      });
      return data;
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [DataQueryKeys.USER_LIST],
      });
    },
  });
}
