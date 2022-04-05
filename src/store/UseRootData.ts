import {storeContext} from "./context";
import {TStore} from "./store";
import {useStoreData} from "./UseStoreData";

export const useRootData = <Selection>(
    dataSelector: (store: TStore) => Selection
) =>
    useStoreData(storeContext, contextData => contextData!, dataSelector);