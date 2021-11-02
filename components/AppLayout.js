import Header from "./Header";
import Footer from "./Footer";
import styles from './AppLayout.module.css';

const AppLayout = ({children}) => {
    return (
        <div>
            <Header />
                <div className={styles.container}>
                {children}
                </div>
            <Footer />
        </div>
    )
}

export default AppLayout;
