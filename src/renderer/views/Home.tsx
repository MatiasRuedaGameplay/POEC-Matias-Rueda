import { Link } from 'react-router-dom';
import ComponentButton from 'renderer/components/Button';

type PropsHome = {
    title: string;
    image: string;
};

function ComponentHome({ title, image }: PropsHome) {

    return (
        <div className="Hello">
            <div>
                <h1>{title}</h1>
                <img width="200" src={image} />
                <ComponentButton link="https://classroom.google.com/u/0/c/Mjg0MDIzNjg3MTQ4" name="Classroom" />
                <ComponentButton link="https://github.com/MatiasRuedaGameplay/POEC-Matias-Rueda" name="Github" />
                <Link to="/perfil"><ComponentButton link="" name="Ver perfil" /></Link>
                

            </div>
        </div>

    );
}

export default ComponentHome;

