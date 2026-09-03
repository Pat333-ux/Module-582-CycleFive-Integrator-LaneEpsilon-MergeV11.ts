export const integrateEpsilonV11 = (matrix) =>
  matrix
    .map(x => x.normalizeV11())
    .sort((a, b) => a.partition.localeCompare(b.partition))
    .reduce((acc, curr) => acc.merge(curr), INIT_EPSILON_STATE);
