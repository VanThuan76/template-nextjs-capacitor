import { useHistory as useReactRouterHistory } from "react-router-dom";
import { useAsyncStorage as useAsyncStorageHook } from '@shared/hooks/useStorage';

export const useHistoryHelper = () => {
    const history = useReactRouterHistory();
    return history;
};

export const useAsyncStorageHelper = () => {
    return useAsyncStorageHook();
};
