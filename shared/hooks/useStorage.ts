import { useEffect, useState } from 'react';
import { Plugins } from '@capacitor/core';

const { Preferences } = Plugins;

export const useAsyncStorage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, []);

    const setItem = async (key: string, value: any) => {
        try {
            await Preferences.set({
                key,
                value: JSON.stringify(value),
            });
        } catch (error) {
            console.error('Error setting AsyncStorage:', error);
        }
    };

    const getItem = async (key: string) => {
        try {
            const ret = await Preferences.get({ key });
            if (ret.value) {
                return JSON.parse(ret.value);
            }
            return null;
        } catch (error) {
            console.error('Error getting AsyncStorage:', error);
            return null;
        }
    };

    const removeItem = async (key: string) => {
        try {
            await Preferences.remove({ key });
        } catch (error) {
            console.error('Error removing item from AsyncStorage:', error);
        }
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return {
        loading,
        setItem,
        getItem,
        removeItem,
    };
};
