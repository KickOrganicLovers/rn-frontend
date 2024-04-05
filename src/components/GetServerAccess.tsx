import {Data} from "../types";
import React, {useEffect} from "react";

const data0: Data = {
    name: 'ukyo',
    age: 19,
    isMan: true
}


const GetServerAccess : React.FC = () => {
    const [data, setData] = React.useState<Data>(data0)

    useEffect(() => {
        fetchData()
    }, [])



    const fetchData = (): void =>{
        fetch('http://localhost:8800/json')
            .then((arg0) => {
                arg0.json()
                    .then((arg1) => {
                        setData(arg1[0])
                        console.log(arg1[0])
                    }
                )
            }).catch((err) => {
                if(err instanceof Error){
                    console.error(err)
                }
        })

    }

    return <h1>{data?.name}</h1>
}

export default GetServerAccess
