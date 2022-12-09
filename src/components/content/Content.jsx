import "./style.scss";
import { TodoList } from "./components/todo-list/TodoList";

export function Content() {
    return (
        <div className="content">
            <TodoList />
        </div>
    )
}