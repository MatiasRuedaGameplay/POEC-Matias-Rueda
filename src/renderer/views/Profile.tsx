
import { useState, useEffect } from "react";
import Skeleton from "renderer/components/Skeleton";


export default function ComponentProfile() {
    const [editing, setEditing] = useState(true)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [age, setAge] = useState("");
    const [dni, setDni] = useState("");
    const [about, setAbout] = useState("");


    function save() {
        setEditing(false);
  }

    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);
    return (
        <div>

            {loading ? (<Skeleton />)
            :
            (editing ? (
                <div className="Hello">
                    <div id="content">
                        <ul>

                            <li>
                                <div id="profilePh"></div>
                            </li>

                            <li>
                                <div id="mediumEl">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Nombre"
                                />
                                </div>
                            </li>

                            <li>
                                <div id="mediumEl">
                                    <input
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder="Apellido"
                                    />
                                </div>
                            </li>

                            <li>
                                <div id="shortEl">
                                <input
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    type="text"
                                    placeholder="Edad"
                                />
                                </div>
                            </li>

                            <li>
                                <div id="longEl">
                                    <input
                                        value={birthDate}
                                        onChange={(e) => setBirthDate(e.target.value)}
                                        type="text"
                                        placeholder="Fecha de nacimiento"
                                    />
                                </div>
                            </li>
                            <li>
                                <div id="shortEl">
                                        <input
                                            value={dni}
                                            onChange={(e) => setDni(e.target.value)}
                                            type="text"
                                            placeholder="DNI"
                                        />
                                    </div>
                                </li>

                            <li>
                                <div id="longEl">
                                    <input
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                        type="textarea"
                                        placeholder="Sobre mi..."
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    

                </div>
                       
            ) : (

                <div className="Hello">
                    <div id="content">
                        <ul>

                            <li>
                                <div id="profilePh"></div>
                            </li>

                            <li>
                                <div id="mediumEl">
                                    <p>{name}</p>
                                </div>
                            </li>

                            <li>
                                <div id="mediumEl">
                                    <p>{lastName}</p>
                                </div>
                            </li>

                            <li>
                                <div id="shortEl">
                                <p>{age}</p>
                                </div>
                            </li>

                            <li>
                                <div id="longEl">
                                    <p>{birthDate}</p>
                                </div>
                            </li>
                            <li>
                                <div id="shortEl">
                                        <p>{dni}</p>
                                    </div>
                                </li>

                            <li>
                                <div id="longEl">
                                    <p>{about}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            ))

            }
            <button id="buttonH" onClick={() => (editing ? save() : setEditing(true))}>
                {editing ? "Guardar" : "Editar"}
            </button>
            
        </div>
        // <div className="skeleton">
        //     <ul>
        //         <li>
        //             <div id="profilePh"></div>
        //         </li>
        //         <li><div >Matias</div></li>
        //         <li><div></div></li>
        //         <li><div></div></li>
        //         <li><div></div></li>
        //         <li><div></div></li>
        //         <li><div></div></li>
        //     </ul>
                
        // </div>
    );
}

// {editando ? (
//     algo
// ) : (
//     otro algo
// )}