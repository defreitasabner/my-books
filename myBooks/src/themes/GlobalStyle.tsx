import { colors } from './theme';

export default function GlobalStyle() {
    return(
        <style global jsx>{`
            body {
                background-color: ${colors.background};
                color: ${colors.accent};
            }
        `}</style>
    )
}