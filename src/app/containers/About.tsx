import { Container } from "@mui/material";
import { style } from "typestyle";

const classNames = {

    mainDiv: style({
        height: '100vh',
        top: '50%',
        left: '50%',
        color: 'white',
        display: 'flex',
        paddingTop: '20px',
        overflow: 'hidden',
        maxWidth: '1000px',
    }),

    h2: style({
        textAlign: 'left',
        color: '#004455',
    }),

    line: style({
        marginTop: '45px',
        width: '3px',
        height: '300px',
        background: '#fff46d',
        overflow: 'hidden',
    }),

    textContent: style({
        flex: 1,
        padding: '15px',
    })

}

export const About: React.FunctionComponent = () => {
    return (
        <Container className={classNames.mainDiv}>
            <div className={classNames.line}>
                <span> </span>
            </div>
            <div className={classNames.textContent}>
                <h2 className={classNames.h2}>
                    We are:
                </h2>
                <p>
                    Headquartered in The Hague, NL, PixelPool established itself in Sofia in 2012 focusing primarily on 3D asset production and rendering. To further scale its Dtail software product, PixelPool expanded its development operations to Sofia in 2020. Dtail is the result of daily collaboration between Bulgarian, American and Dutch teams focusing on product design, software development and 3D asset production.
                </p>
                <h2 className={classNames.h2}>
                    Our product:
                </h2 >
                <p>
                    Dtail is a cloud platform used by top fashion brands around the world to build, manage and sell collections using the latest 3D technology. Dtail is built API-first using .NET 5 and TypeScript/React for the backends and frontends respectively. We apply Infrastructure-as-code using AWS CDK to deploy our platform’s infrastructure. As such, Dtail is built using an state of the art stack of the latest backend-, frontend- and infrastructure standards as well as 3D game-technology.
                </p>
            </div>
        </Container>
    );
}
