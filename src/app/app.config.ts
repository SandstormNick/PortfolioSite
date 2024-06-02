import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_CONFIG } from '@angular/common';
import { LucideAngularModule, Sparkles } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        {
            provide: IMAGE_CONFIG,
            useValue: {
                disableImageSizeWarning: true, 
                disableImageLazyLoadWarning: true
            }
        },
        importProvidersFrom(LucideAngularModule.pick({Sparkles}))
    ]
};
