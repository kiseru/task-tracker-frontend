import { User } from './user';

export interface Task {
  id: number;
  name: string;
  description: string;
  created_at: string;
  priority: number;
  estimation: string;
  spent_time: string;
  status: number;
  user: User;
}

export const taskStatusesCaption = {
  0: 'План',
  1: 'В процессе',
  2: 'Готово',
};

export const taskPrioritiesCaption = {
  0: 'Высокий',
  1: 'Средний',
  2: 'Низкий',
};

export interface TaskFilters {
  priority: number;
  status: number;
}

