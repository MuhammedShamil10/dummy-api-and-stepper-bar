import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { newUser } from "../../type/userList";
import { API_URLS } from "../endpoints";
import { httpClient } from "../httpClient";
import { DataQueryKeys } from "../data-query-keys";

export function useAddUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: newUser) => {
      const data = httpClient.post(API_URLS.postUserList(), {
        name: payload?.name,
        job: payload?.job,
      });
      console.log(data, "here");
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DataQueryKeys.USER_LIST] });
    },
  });
}
