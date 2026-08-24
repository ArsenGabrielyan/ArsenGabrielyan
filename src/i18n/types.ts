import hyWebsite from "@i18n/hy/website.json"
import hyPortfolio from "@i18n/hy/portfolio.json"
import hyContact from "@i18n/hy/contact.json"

import { NamespaceKeys, NestedKeyOf, useTranslations } from "next-intl";

export type LangCodeType = 'en' | 'hy';
type CountryCodeType = 'us' | 'am';
export interface ILanguage{
     code: LangCodeType,
     countryCode: CountryCodeType,
     label: string
}
export type MessageSchema = (
     typeof hyWebsite &
     typeof hyPortfolio &
     typeof hyContact
)

type TranslationNS = NamespaceKeys<MessageSchema,NestedKeyOf<MessageSchema>>
export type TFunction<T extends TranslationNS> = ReturnType<typeof useTranslations<T>>