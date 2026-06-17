import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** ESLint flat config (ESLint 10 / Next 16). */
const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
];

export default config;
