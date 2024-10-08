import { useEffect, useState } from "react";

const usePerfume = () => {
    const [perfumes,setPerfumes] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/perfumeCollection.json')
        .then(res => res.json())
        .then(data => {
            setPerfumes(data);
            setLoading(false);
        })
    },[perfumes])
    return {perfumes,loading}
};

export default usePerfume;