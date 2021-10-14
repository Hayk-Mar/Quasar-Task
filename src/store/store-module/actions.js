import { api } from "boot/axios";

export function updateStores(context) {
    api
        .get(
            "https://demoapi.thedenstore.com/api/service?Request=Stores&Language=en-us"
        )
        .then((response) => {
            context.commit('updateStores', response.data);
        });
}
