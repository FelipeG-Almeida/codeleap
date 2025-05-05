import './App.css';
import { AuthProvider } from './common/context/authProvider';
import { PostsProvider } from './common/context/postsProvider';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <>
            <main>
                <AuthProvider>
                    <PostsProvider>
                        <AppRoutes />
                    </PostsProvider>
                </AuthProvider>
            </main>
        </>
    );
}

export default App;

