import { style } from "typestyle";

const classNames = {

    mainDiv: style({
        height: '100vh',
        justifyContent: 'center',
        display: 'flex'
    }),

    title: style({
        color: 'white',
        fontSize: '100px',
    }),
}

export const NotFound: React.FunctionComponent = () => {
    return (
        <div className={classNames.mainDiv}>
            <h1 className={classNames.title}>
                Page Not Found (404)
            </h1>
        </div>
    );
}
