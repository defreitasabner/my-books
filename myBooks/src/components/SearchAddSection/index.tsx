import { colors } from "../../themes/theme";
import ButtonLink from "../ButtonLink";

export default function SearchAddSection() {
    return (
        <section>
            <form>
                <fieldset>
                    <input type="text" />
                    <input type="submit" />
                </fieldset>
            </form>
            <ButtonLink text="Adicionar Novo Livro" url="/addBook/" />
            <style jsx>{`
                section {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${colors.primary};
                    padding: 0.5rem 1rem;
                }
            `}</style>
        </section>
    )
}