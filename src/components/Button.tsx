type PropsButton = {
    link: string;
    name: string;
};

function ComponentButton({link, name}:PropsButton) {

    return (
        <div>
            <a href={link}>
                <button type="button" >
                    {name}
                </button>
            </a> 
        </div>
    );
}