import { useState } from 'react';

export function DemoForm() {
    const [username, setUsername] = useState("");       //cú pháp state
    const [password, setPassword] = useState("");       //cú pháp state

    const handleChangeUsername = (usernameValue) => {
        setUsername(usernameValue);
    }

    const handleChangePassword = (passwordValue) => {
        setPassword(passwordValue);
    }

    const handleSubmit = () => {
        console.log(username);
        console.log(password);
    }
    return (
        <div className='demo-form'>
            User Name: <input type="text" name='username' onChange={(e) => handleChangeUsername(e.target.value)} />   {/*trong hàm onChange là cú pháp gọi useState */}
            Pass Word: <input type="text" name='password' onChange={(e) => handleChangePassword(e.target.value)} />     {/*trong hàm onChange là cú pháp gọi useState */}
            <button onClick={() => handleSubmit()}>Submit</button>      {/*trong hàm onClick là cú pháp gọi useState */}
        </div>
    )
}