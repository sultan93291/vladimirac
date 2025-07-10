import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  return {
    locale: lang,
    messages: (await import(`../../messages/${lang}.json`)).default,
  };
});
