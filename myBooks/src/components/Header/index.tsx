import { colors } from '../../themes/theme';
import Menu from './Menu';

export default function Header() {
    return (
        <header>
            <h1>My Books</h1>
            <Menu />
            <style jsx>{`
                header {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    background-color: ${colors.darker};
                    color: ${colors.secondary};
                    padding: 1rem;
                }
                h1 {
                    font-size: 2rem;
                }
            `}</style>
        </header>
    )
}