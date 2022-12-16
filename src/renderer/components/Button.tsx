import { Color } from "@mui/material";


type PropsButton = {
    link: string;
    name: string;
    bColor?: string;
};

function ComponentButton({link, name, bColor}:PropsButton) {

    return (
        <div>
            <a href={link} target="_blank">
                <button type="button">
                    {name}
                </button>
            </a> 
        </div>
    );
}

export default ComponentButton;