import { useEffect, useState } from "react";

const usePerfume = () => {
    const [perfumeCollection,setPerfumeCollection] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('/perfumeCollection.json')
        .then(res => res.json())
        .then(data => setPerfumeCollection(data))
    },[perfumeCollection])
    return {perfumeCollection}
};

export default usePerfume;