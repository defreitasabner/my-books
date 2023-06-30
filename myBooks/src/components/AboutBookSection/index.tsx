import GenresSection from "../GenresSection";

export default function AboutBookSection({ title, genres }) {
    return (
        <section>
            <img src="https://github.com/defreitasabner.png" alt="" />
            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum nisl, ultricies eget urna elementum, venenatis elementum dui. Pellentesque sed velit vitae magna tempus facilisis. Praesent scelerisque risus a mi iaculis, at bibendum metus imperdiet. Quisque dapibus fringilla erat, eget interdum ipsum ornare eu. Aliquam erat volutpat. Curabitur convallis nibh consequat enim suscipit, vestibulum varius felis accumsan. Proin et faucibus massa. Suspendisse vel mi eleifend, tristique tellus a, cursus metus. Quisque efficitur, tortor nec maximus suscipit, ligula libero dapibus felis, in ultricies ante nibh sed augue. Proin at ex mi. In fermentum neque enim, quis suscipit tortor tempor quis. Cras tristique, nunc a fermentum suscipit, urna diam bibendum sem, nec finibus erat metus a ipsum. Donec bibendum, orci sit amet maximus dignissim, purus turpis gravida velit, ac mollis elit leo in orci. Proin ut enim at velit vehicula eleifend eu nec nunc. Maecenas nec nunc erat.</p>
                <GenresSection genres={genres} />
            </div>
            <style jsx>{`
                section {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    gap: 2rem;
                }
                img {
                    width: 360px;
                    box-shadow: 5px 5px 5px #090909;
                }
                div {
                    display: flex;
                    flex-direction: column;
                }
                h2 {
                    font-size: 2.5rem;
                    font-weight: 700;
                    padding-bottom: 1rem;
                }
                p {
                    font-size: 1.2rem;
                    text-align: justify;
                    padding-bottom: 2rem;
                }
            `}</style>
        </section>
    )
}