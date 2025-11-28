 
import * as React from "react";
import Providers from "src/lib/providers";
import { cookies } from "next/headers";
import { WebsiteDetailsProvider } from "src/hooks/useWebsiteDetails";
 
export default async function RootLayout({ children }) {

  const cookiesList = cookies();
  const hasCookie = cookiesList.get("token");

  return (
    <html lang={"en-US"}>
      <body>
           <WebsiteDetailsProvider>

             <Providers isAuth={hasCookie}>{children}</Providers>
           </WebsiteDetailsProvider>
       
      </body>
    </html>
  );
}
