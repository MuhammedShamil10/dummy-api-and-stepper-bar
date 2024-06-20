type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Support = {
  url: string;
  text: string;
};

export type UserList = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
};

export type newUser = {
  name: string;
  job: string;
};
