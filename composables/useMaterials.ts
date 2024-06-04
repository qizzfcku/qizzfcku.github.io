 import {ref} from "vue"

export default function useMaterials() {
    const materials = ref(null);

    const fetchMaterials = async () => {
        try{
            const response = await fetch('/materials.json');
            if(!response.ok){
                throw new Error('Failed to fetch materials');
            }
            materials.value = await response.json();

        } catch(error){
            console.log(error);
        }
    }
    return {
        materials,
        fetchMaterials,
    };
 }