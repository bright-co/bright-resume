import { ThemeProvider } from "@chatbot/components/theme-provider";
import { ApolloProvider } from "@chatbot/providers";
import "./global.css";
import { Toaster } from "@resume-template-components/shadcn-ui";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ApolloProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ApolloProvider>
        <Toaster />
      </body>
    </html>
  );
}
