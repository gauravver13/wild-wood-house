import { createGlobalStyle } from 'styled-components'
import type { Theme } from '@/components/ui/type'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  :root {
    --color-primary: ${({ theme }) => theme.colors.primary};
    --color-secondary: ${({ theme }) => theme.colors.secondary};
    --color-background: ${({ theme }) => theme.colors.background};
    --color-text: ${({ theme }) => theme.colors.text};
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: var(--color-background);
    color: var(--color-text);
  }
`