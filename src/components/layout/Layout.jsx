import './style.scss';      //syntax thêm scss vào file jsx
import "../header/Header";
import { Header } from '../header/Header';
import { SideBar } from '../side-bar/SideBar';
import { Content } from '../content/Content'
import { FormTodo } from '../form-demo/FormTodo'
export function Layout() {
    return (
        <div className="layout">
            <Header />
            <div className='body'>
                <SideBar />
                {/* <Content /> */}
                <FormTodo />
            </div>

        </div>
    )

}