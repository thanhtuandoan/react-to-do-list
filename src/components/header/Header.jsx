import "./style.scss";

export function Header() {
    return (
        <div className="header">
            <div className="header-item-left">
                <button className="create-button">Create new task</button>
            </div>
            <div className="header-item-right">
                <input type="text" className="search-input" placeholder="Type something to search" />
                <button className="search-button">Search</button>
            </div>
        </div>
    )
}