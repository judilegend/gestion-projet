export interface IUser {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: "admin" | "normal";
}
