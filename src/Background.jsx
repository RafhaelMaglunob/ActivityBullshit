    import React, { useState } from "react";
    import Triangle from "./Triangle.jsx";
    import Sun from "./Sun.jsx";
    import LeftSide from "./LeftSide.jsx";
    import RightSide from "./RightSide.jsx";
    import Content from "./Content.jsx";
    function Background() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                width: `${hovered ? "500px" : "405px"}`,
                height: `${hovered ? "500px" : "500px"}`,
            }}
        >
            <LeftSide offsetX={hovered ? -250 : -100} />
        
            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                <Sun
                    size={100}
                    color="orange"
                    glowColor="rgba(255,165,0,0.6)"
                    glowRadius={100}
                    offsetY={191}
                    offsetX={hovered ? -260 : 0}
                    absolute
                    onMouseEnter={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
                <Sun
                    size={100}
                    color="orange"
                    glowColor="rgba(255,165,0,0.6)"
                    glowRadius={100}
                    offsetY={191}
                    offsetX={hovered ? -260 : 0}
                    absolute
                    onMouseEnter={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
                
                <Content hidden = {hovered ? false : true}></Content>
                <Sun
                    size={100}
                    color="orange"
                    glowColor="rgba(255,165,0,0.6)"
                    glowRadius={100}
                    offsetY={191}
                    offsetX={hovered ? 260 : 0}
                    absolute
                    onMouseEnter={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
                <Sun
                    size={100}
                    color="orange"
                    glowColor="rgba(255,165,0,0.6)"
                    glowRadius={100}
                    offsetY={191}
                    offsetX={hovered ? 260 : 0}
                    absolute
                    onMouseEnter={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                />
            </div>

            <RightSide offsetX={hovered ? 250 : 100} />
        </div>
    );
    }

    export default Background;
