import { useEffect, useState } from "react";

const usePerfume = () => {
    const [perfumes,setPerfumes] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/perfumes')
        .then(res => res.json())
        .then(data => {
            setPerfumes(data);
            setLoading(false);
        })
    },[perfumes])
    return {perfumes,loading}
};

export default usePerfume;