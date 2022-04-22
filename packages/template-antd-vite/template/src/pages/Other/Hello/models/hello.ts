export interface TState {
  name: string;
  age: number;
}
export interface TMethod {
  updateName: (name: string) => void;
  becomeOlder: () => void;
}
