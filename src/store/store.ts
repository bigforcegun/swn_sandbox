import {makeAutoObservable, observable} from "mobx";

const Cities = [
    'Amsterdam',
    'London',
    'Madrid'
];

let player_attributes: { [index: string]: any } = {
    str: 14,
    dex: 14,
    con: 10,
    int: 14,
    wis: 14,
    cha: 14,
}

let player = {
    name: "",
    attributes: player_attributes
}


export const createStor2e = () => {
    const store = {
        get allCities() {
            return Cities;
        },
    };

    return store;
};

//export type TStore = ReturnType<typeof createStore>


export const createStore = () => {
    const store = {
        query: observable.box(''),
        player: player,
        get attributes() {
            return store.player.attributes
        },
        get attributes_flat() {
            let result = []
            for (let type in store.attributes) {
                // @ts-ignore
                let value = store.attributes[type]
                result.push(
                    {
                        type: type,
                        value: value
                    }
                )
            }
            return result
        },
        updateAttribute(key: string) {
            store.player.attributes[key] = store.player.attributes[key] + 1;
        },
        downgradeAttribute(key: string) {
            store.player.attributes[key] = store.player.attributes[key] - 1;
        },
        get filteredCities() {
            return Cities.filter(city => city.toLowerCase().includes(store.query.get()));
        }
    };
    return makeAutoObservable(store)
};

export type TStore = ReturnType<typeof createStore>;