import { useQuery } from "@tanstack/react-query";
import { UserList } from "../../type/userList";
import { DataQueryKeys } from "../data-query-keys";
import { httpClient } from "../httpClient";
import { API_URLS } from "../endpoints";

export function useGetUserList() {
  return useQuery<UserList>({
    queryKey: [DataQueryKeys.USER_LIST],
    queryFn: async () => {
      const { data } = await httpClient.get(API_URLS.getUserList());
      return data;
    },
  });
}
