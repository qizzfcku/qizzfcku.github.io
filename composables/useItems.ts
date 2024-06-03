import { ref } from 'vue';
export default function useItems() {
    const items = ref([]);

    const fetchItems = async () => {
        try {
            const response = await fetch('/items.json');
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            items.value = await response.json();
        } catch (error) {
            console.error(error);
        }
    }
    return {
        items,
        fetchItems
    };
};