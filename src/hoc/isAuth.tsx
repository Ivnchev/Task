import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const IsAuth = <P extends object>(Component: React.ComponentType<P>) => {

    const user = useContext(AuthContext)

    const modifiedComponent = class extends React.Component<any, any> {
        constructor(props: any) {
            super(props)
            this.state = {}
        }

        componentDidMount(): void {
            if (user) {
                this.setState(() => {
                    return { component: true };
                })
            } else {
                this.setState(() => {
                    this.props.history.push('/login')
                    return { component: null }
                })
            }

        }

        componentWillUnmount() {
            this.setState((s: any) => ({}))
        }

        render() {
            return this.state.component ? <Component {...this.props as P} /> : ''
        }
    };
    return modifiedComponent;
}

export default IsAuth;


        //     AuthService.user()
        //         .then(res => {
        //             if (res._id) {
        //                 this.setState((state, props) => {
        //                     return { component: true, user: res }
        //                 })
        //             } else {
        //                 this.setState((state, props) => {
        //                     this.props.history.push('/auth/login')
        //                     return { component: null }
        //                 })
        //             }

        //         })
        //         .catch(() => {
        //             this.setState((state, props) => {
        //                 this.props.history.push('/auth/login')
        //                 return { component: null }
        //             })
        //         })
        // }

