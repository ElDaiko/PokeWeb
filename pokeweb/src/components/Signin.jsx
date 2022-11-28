import React from 'react';
import { useState } from 'react';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form>
                <input type="text" name='name' placeholder='Mail' value={email} />
                <input type="text" name='email' placeholder='Password' value={password} />
            </form>
        </div>
    );
}

export default Signin;
