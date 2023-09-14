import {useState} from "react";

function useFetching(callBack){
    const [isLoader, setIsLoader] = useState(true)
    const [error, setError] = useState(null)

    const fetching = async () => {
        try {
            await callBack()
        } catch (e) {
            setError('Something went wrong, please try again later.')
            // console.log(e)
        } finally {
            //console.log('optional')
            setIsLoader(false)
        }
    }
    return [fetching, isLoader, error]
}

export default useFetching;