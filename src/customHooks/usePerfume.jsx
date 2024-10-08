import { useEffect } from "react";

const usePerfume = () => {
    const [perfumeCollection,setPerfumeCollection] = useState([])
    useEffect(()=>{
        fetch('/perfumeCollection.json')
        .then(res => res.json())
        .then(data => setPerfumeCollection(data))
    },[perfumeCollection])
    return (
        <div>
            
        </div>
    );
};

export default usePerfume;