export default function Skeleton () {
    
    return (
        <div className="Hello">

            <div className="skeleton">
                <ul>
                    <li>
                        <div id="profilePh"></div>
                    </li>
                    <li><div id="mediumEl" style={{backgroundColor: "#bbb",  }}></div></li>
                    <li><div id="mediumEl" style={{backgroundColor: "#bbb",  }}></div></li>
                    <li><div id="shortEl" style={{backgroundColor: "#bbb",  }}></div></li>
                    <li><div id="longEl" style={{backgroundColor: "#bbb",  }}></div></li>
                    <li><div id="shortEl" style={{backgroundColor: "#bbb",  }}></div></li>
                    <li><div id="longEl" style={{backgroundColor: "#bbb",  }}></div></li>
                </ul>
                
            </div>
            
        </div>
    );
}