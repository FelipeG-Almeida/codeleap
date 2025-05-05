import { useState } from 'react';
import styles from './Login.module.css';
import { useAuth } from '../../common/hooks/useAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(username);
    };

    return (
        <div className={styles.container}>
            <h1>Welcome to CodeLeap network!</h1>
            <h2>Log in to see your feed</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Please enter your username</label>
                <input
                    type='text'
                    placeholder='John doe'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    type='submit'
                    disabled={!username.trim()}
                    className={!username.trim() ? 'disabled' : ''}
                >
                    Enter
                </button>
            </form>
        </div>
    );
};

export default Login;

