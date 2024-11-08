import { useState } from "react";

const useFetch = (fetchFn: Function) => {
    const [data, setData] = useState<any>(false);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    async function startFetch(dataToSend?: any) {
        setError(null);
        try {
            setLoading(true);
            const data = await fetchFn(dataToSend ? dataToSend : null);
            setData(data);
        } catch (error: Error | any) {
            setError(new Error(error.message as string));
        } finally {
            setLoading(false);
        }
    }
    const values = { data, error, loading, startFetch, setError };
    return values;
}

export default useFetch;
