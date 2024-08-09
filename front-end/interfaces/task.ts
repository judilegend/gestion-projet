export interface ITask {
  id: string;
  name: string;
  description: string;
  status: "à faire" | "en cours" | "terminé";
  Pid_person: string;
  created_at: Date;
  updated_at: Date;
}
