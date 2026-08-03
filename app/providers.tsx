"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactLenis } from "lenis/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useState } from "react";
import { Toaster } from "sonner";

import { createQueryClient } from "@/lib/query-client";

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ReactLenis root>
          {children}
          <Toaster position="bottom-right" richColors />
        </ReactLenis>
      </NextThemesProvider>
    </QueryClientProvider>
  );
}
