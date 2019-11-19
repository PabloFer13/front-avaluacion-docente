export const antibind = (fn, ...params) => (e) => fn(e, ...params);

export default { antibind };
