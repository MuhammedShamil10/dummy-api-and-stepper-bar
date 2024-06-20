export const API_URLS = {
  getUserList: () => `users?page=2`,
  postUserList: () => `users`,
  patchUserList: (id: number) => `users/${id}`,
};
