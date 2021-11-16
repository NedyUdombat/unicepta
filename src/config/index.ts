/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
type CommonEnvsType = {
  ENVIRONMENT: string | undefined;
};

const commonEnvs: CommonEnvsType = {
  ENVIRONMENT: process.env.ENVIRONMENT,
};

const config: Record<string, any> = Object.freeze({
  local: {
    ...commonEnvs,
    BASE_URL: process.env.BASE_URL,
  },
  development: {
    ...commonEnvs,
    BASE_URL: process.env.BASE_URL,
  },
  staging: {
    ...commonEnvs,
    BASE_URL: process.env.BASE_URL,
  },
  production: {
    ...commonEnvs,
    BASE_URL: process.env.BASE_URL,
  },
});

export default config[commonEnvs.ENVIRONMENT!];
