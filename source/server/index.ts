interface Todo {
  id: string;
  description: string;
  completed: boolean;
  user: string;
}

let todos: Todo[] = [];

// list todos

export const listTodos = async (user: string) => {
  //   const todosOfUser = hardCodedTodos.filter((todo) => todo.user === user);
  const todosOfUser = todos.filter((todo) => todo.user === user);
  return todosOfUser;
};

// create todos

export const createTodo = async (description: string, user: string) => {
  const newTodo: Todo = {
    description: description,
    user: user,
    completed: false,
    id: generateId(),
  };
  todos.push(newTodo);
};

// detail todos

export const detailTodo = async (todoId: string, user: string) => {
  const todo: Todo | undefined = todos.find((todo) => todo.id === todoId);
  if (todo?.user !== user) return undefined;
  return todo;
};

// update todos

// delete todos

const generateId = () => {
  return new Date().getTime().toString();
};

const hardCodedTodos: Todo[] = [
  {
    id: "1",
    description: "Fazer compras de supermercado",
    completed: false,
    user: "john@gmail.com",
  },
  {
    id: "2",
    description: "Estudar para o exame de matemática",
    completed: false,
    user: "Maria",
  },
  {
    id: "3",
    description: "Ir à academia",
    completed: true,
    user: "Pedro",
  },
  {
    id: "4",
    description: "Ler o novo livro de ficção",
    completed: false,
    user: "john@gmail.com",
  },
  {
    id: "5",
    description: "Resolver pendências no trabalho",
    completed: true,
    user: "Carlos",
  },
  {
    id: "6",
    description: "Passear com o cachorro",
    completed: false,
    user: "john@gmail.com",
  },
  {
    id: "7",
    description: "Assistir à série recomendada",
    completed: true,
    user: "Fernanda",
  },
  {
    id: "8",
    description: "Planejar as férias de verão",
    completed: false,
    user: "Fernanda",
  },
  {
    id: "9",
    description: "Concluir o projeto de desenvolvimento",
    completed: false,
    user: "Luiza",
  },
  {
    id: "10",
    description: "Organizar o armário",
    completed: true,
    user: "Camila",
  },
];
