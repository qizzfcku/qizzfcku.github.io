import { ref } from 'vue';

interface Price {
    old_price: number | null;
    current_price: number;
}
interface Item {
    id: number;
    code: string;
    name: string;
    image: { url: string };
    price: Price;
    material: number;
}
export default function useItems() {
    const items = ref<Item[]>([]);
    const pending = ref(false)

    const fetchItems = async (priceSort: string, materialSort: string) => {
        pending.value = true;
        try {
            const response = await fetch('/items.json');
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            const fetchedItems: Item[] = await response.json();
            let filteredItems: Item[] = fetchedItems;

            if (materialSort !== '') {
                const materialSortNumber: number = Number(materialSort);
                filteredItems = filteredItems.filter(item => item.material === materialSortNumber);
            }

            if (priceSort === 'ascending') {
                filteredItems = filteredItems.sort((a, b) => a.price.current_price - b.price.current_price);
            } else if (priceSort === 'descending') {
                filteredItems = filteredItems.sort((a, b) => b.price.current_price - a.price.current_price);
            }

            items.value = filteredItems;
            pending.value = false;
        } catch (error) {
            console.error(error);
        }
    };

    return {
        items,
        pending,
        fetchItems
    };
};
