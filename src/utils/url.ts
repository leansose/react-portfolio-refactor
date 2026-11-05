/** Resolves a path under `public/` against the build base, so the site serves from any path depth. */
export const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;
