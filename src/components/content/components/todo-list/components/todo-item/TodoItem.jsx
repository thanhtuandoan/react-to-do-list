import './style.scss';

export function TodoItem(props) {   //export: xuat ra ngoai
    return (
        <div className="todo-item">
            <p className="todo-item-title">Title: {props.title}</p>
            <p className="todo-item-creator">Creator: {props.creator}</p>
            <p className="todo-item-status">Status: {props.status}</p>
            <p className="todo-item-line"></p>
            <p className="todo-item-description-header">Description:</p>
            <p className="todo-item-description-main">{props.description}</p>
        </div>
    );
}