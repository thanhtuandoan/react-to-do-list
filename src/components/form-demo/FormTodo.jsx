import { useState } from "react";
import "./style.scss";

export function FormTodo() {
    const [title, setTitle] = useState("");
    const [creator, setCreator] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (titleValue) => {
        setTitle(titleValue);
    }

    const handleChangeCreator = (creatorValue) => {
        setCreator(creatorValue);
    }

    const handleChangeDescription = (descriptionValue) => {
        setDescription(descriptionValue);
    }

    const handleSave = () => {
        if (title === "") {
            alert("Hãy nhập tiêu đề")
        } else if (creator === "") {
            alert("Hãy nhập tên người tạo")
        } else if (description === "") {
            alert("Hãy nhập mô tả")
        } else {
            alert("Thêm task thành công")
            console.log(title);
            console.log(creator);
            console.log(description);
        }

    }

    return (
        <table className="table">
            <tr>
                <td className="bold">Title</td>
                <td colSpan={2}>
                    <input type="text" name="title" onChange={(e) => handleChangeTitle(e.target.value)} className="width" />
                </td>
            </tr>

            <tr>
                <td className="bold">Creator</td>
                <td colSpan={2}>
                    <input type="text" name="creator" onChange={(e) => handleChangeCreator(e.target.value)} className="width" />
                </td>
            </tr>

            <tr>
                <td className="bold">Description</td>
                <td colSpan={2}>
                    <input type="text" name="description" onChange={(e) => handleChangeDescription(e.target.value)} className="width" />
                </td>
            </tr>

            <tr>
                <td></td>
                <td colSpan={2}>
                    <button onClick={() => handleSave()} className="button">Save</button>
                </td>
            </tr>
        </table>
    )
}