// jest-axe.d.ts
// jest-axe.d.ts
declare module 'jest-axe' {
    import { AxeResults, AxeRunOptions } from 'axe-core';
  
    export function axe(
      html: string | HTMLElement,
      options?: AxeRunOptions
    ): Promise<AxeResults>;
  
    export const toHaveNoViolations: () => {
      pass: boolean;
      message: () => string;
    };
  }