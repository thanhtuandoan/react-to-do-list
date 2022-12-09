import "./style.scss";
import { Pagination } from "./components/pagination/Pagination";
import { TodoItem } from "./components/todo-item/TodoItem"

const descriptionData =
    "This is a task, This is a task, This is a task, This is a task, This is a task.";

const todoList = [
    {
        title: "Task 1",
        creator: "Loc",
        status: "NEW",
        description: descriptionData,
    },
    {
        title: "Task 2",
        creator: "Loc",
        status: "DOING",
        description: descriptionData,
    },
    {
        title: "Task 3",
        creator: "Loc",
        status: "DONE",
    },
    {
        title: "Task 4",
        creator: "Loc",
        status: "NEW",
        description: descriptionData,
    },
    {
        title: "Task 5",
        creator: "Loc",
        status: "DOING",
        description: descriptionData,
    },
    {
        title: "Task 6",
        creator: "Loc",
        status: "NEW",
        description: descriptionData,
    },
    {
        title: "Task 7",
        creator: "Loc",
        status: "NEW",
        description: descriptionData,
    },
    {
        title: "Task 8",
        creator: "Loc",
        status: "DOING",
        description: descriptionData,
    },
];


export function TodoList() {
    return (
        <div className="todo-list-container">
            <div className="todo-list">
                {
                    todoList.map((item) => (
                        //map: tạo một mảng mới từ việc gọi một hàm cho mọi phần tử mảng
                        //item: những phần tử của mảng todoList

                        <TodoItem
                            title={item.title}
                            //1. lấy giá trị phần tử title ở phần tử item trong mảng todoList, sau đó truyền vào biến title
                            //2. biến title sẽ được gán lại vào trong props.title ở component TodoItem

                            creator={item.creator}
                            status={item.status}
                            description={item.description}
                        />
                    ))
                }
            </div>
            <Pagination />
        </div>
    )
}