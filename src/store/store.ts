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

type Player = {
    name: string;
    level: number;
    //FIXME class->classname\ class_name
    class_name: string;
    health: {
        current: number
        initial_hp: number
    };
    //attributes: object,
    attributes: Record<string, any>;
};


let player = {
    level: 1,
    name: "",
    class_name: "warrior",
    health: {
        current: 2,
        initial_hp: 4
    },
    attributes: player_attributes
} as Player

//export type TStore = ReturnType<typeof createStore>

function calculateBonus(attribute: number) {
    if (attribute < 3) {
        return -2
    } else if (attribute < 7) {
        return -1
    } else if (attribute < 13) {
        return -0
    } else if (attribute < 17) {
        return 1
    } else {
        return 2
    }
}

function attributeBonus(player: Player, attr_name: string) {
    return calculateBonus(player.attributes[attr_name])
}

function calculateHP(player: Player) {
    // TODO place for hooks
    const base = (player.health.initial_hp + attributeBonus(player, 'con')) * player.level
    console.log(player.level)
    if (player.class_name === "warrior") { //TODO: HOOKS BRO
        return base + (2 * player.level)
    }
    return base
}


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
            store.attributes[key] = store.player.attributes[key] + 1;
        },
        downgradeAttribute(key: string) {
            store.attributes[key] = store.player.attributes[key] - 1;
        },
        get filteredCities() {
            return Cities.filter(city => city.toLowerCase().includes(store.query.get()));
        },
        levelUp(val: number) {
            store.player.level = store.player.level + val
        },
        levelDown(val: number) {
            store.player.level = store.player.level - val
        },
        changeClass(class_name: string) {
            store.player.class_name = class_name
        },
        get getHP() {
            return calculateHP(store.player)
        }
    };
    return makeAutoObservable(store)
};

export type TStore = ReturnType<typeof createStore>;