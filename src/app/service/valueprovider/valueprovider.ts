import { InjectionToken } from '@angular/core';

import { IValueProvider } from './ivalueprovider';

export let VALUE_CONFIG = new InjectionToken<IValueProvider>('valueprovider');

export const VALUE_CONSTANTS: IValueProvider = {
    appTitle : 'Student Management App',
    pageSize : 5
}
