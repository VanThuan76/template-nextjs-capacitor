import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { lists, homeItems, notifications, settings, TodoListItem, HomeItem, NotificationItem, Settings } from '../mock';

type APPSTATE = {
    user:
    | {
        id: null;
        role_id: null;
        name: '';
        email: '';
        avatar: '';
        email_verified_at: null;
        created_at: null;
        updated_at: null;
    }
    | undefined;
    isLogined: boolean;
    isRouteLoading: boolean;
    safeAreaTop: number;
    safeAreaBottom: number;
    menuOpen: boolean;
    notificationsOpen: boolean;
    currentPage: number | null;
    homeItems: HomeItem[];
    lists: TodoListItem[];
    notifications: NotificationItem[];
    settings: Settings;
    selectedList: TodoListItem | undefined;
};

const initialState: APPSTATE = {
    user: undefined,
    isLogined: false,
    isRouteLoading: false,
    safeAreaTop: 0,
    safeAreaBottom: 0,
    menuOpen: false,
    notificationsOpen: false,
    currentPage: null,
    homeItems,
    lists,
    notifications,
    settings,
    selectedList: undefined,
};
export const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any | undefined>) => {
            state.user = action.payload;
            state.isLogined = true;
        },
        logout: state => {
            state.user = undefined;
            state.isLogined = false;
        },
        authUser: (state, action: PayloadAction<any | undefined>) => {
            state.user = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isRouteLoading = action.payload;
        },
        setMenuOpen: (state, action: PayloadAction<boolean>) => {
            state.menuOpen = action.payload;
        },
        setNotificationsOpen: (state, action: PayloadAction<boolean>) => {
            state.notificationsOpen = action.payload;
        },
        setSettings: (state, action: PayloadAction<Settings>) => {
            state.settings = action.payload;
        },
        setDone: (state, action: PayloadAction<{ list: any, listItem: any, done: any }>) => {
            const { list, listItem, done } = action.payload;
            const listIndex = state.lists.findIndex(l => l === list);
            const items = state.lists[listIndex].items;
            const itemIndex = items?.findIndex(i => i === listItem);
            const item = items?.[itemIndex ?? -1];
            if (!item) return;
            item.done = done;
            if (list === state.selectedList) {
                state.selectedList = state.lists[listIndex];
            }
        },
    },
});

export const {
    login,
    authUser,
    logout,
    setLoading,
    setMenuOpen,
    setNotificationsOpen,
    setSettings,
    setDone
} = appSlice.actions;

export default appSlice.reducer;