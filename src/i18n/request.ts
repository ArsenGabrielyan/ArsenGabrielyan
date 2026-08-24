import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";
import { loadMessages } from "./config";
import * as rootParams from 'next/root-params';
import {notFound} from 'next/navigation';

export default getRequestConfig(async({locale}) =>{
     if (!locale) {
          const paramValue = await rootParams.locale();
          if (hasLocale(routing.locales, paramValue)) {
               locale = paramValue;
          } else {
               notFound();
          }
     }
     const messages = await loadMessages(locale)
     return { locale, messages}
})