import { ref } from 'vue';

const useCartAndFavorites = () => {
    const cart = ref<string[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
    const favorites = ref<string[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

    const toggleItemInCart = (id: string) => {
        if (cart.value.includes(id)) {
            cart.value = cart.value.filter(item => item !== id);
        } else {
            cart.value.push(id);
        }
        localStorage.setItem('cart', JSON.stringify(cart.value));
    };

    const toggleItemInFavorites = (id: string) => {
        if (favorites.value.includes(id)) {
            favorites.value = favorites.value.filter(item => item !== id);
        } else {
            favorites.value.push(id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    };

    const isInCart = (id: string) => cart.value.includes(id);
    const isInFavorites = (id: string) => favorites.value.includes(id);

    return {
        cart,
        favorites,
        toggleItemInCart,
        toggleItemInFavorites,
        isInCart,
        isInFavorites
    };
};

export default useCartAndFavorites;
