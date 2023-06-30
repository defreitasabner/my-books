import { colors } from '../../themes/theme';

export default function Footer() {
    return (
        <footer>
            <style jsx>{`
                footer {
                    display: flex;
                    width: 100%;
                    background-color: ${colors.darker};
                }
            `}</style>
        </footer>
    )
}