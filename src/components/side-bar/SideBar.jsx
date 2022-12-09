import "./style.scss";
export function SideBar() {
    return (
        <div className="side-bar">
            <div className="side-bar-item">
                <p className="menu-task">All task</p>
            </div>
            <div className="side-bar-item">
                <p className="menu-task">New task</p>
            </div>
            <div className="side-bar-item">
                <p className="menu-task">Doing task</p>
            </div>
            <div className="side-bar-item">
                <p className="menu-task">Done task</p>
            </div>
        </div>
    )
}