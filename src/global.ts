import {routing} from '@/i18n/routing';
import { MessageSchema } from '@/i18n/types';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: MessageSchema
  }
}