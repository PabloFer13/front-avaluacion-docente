const propsSelector = ({ cargas: { materias } }) => ({ materias });

const studentSelector = ({ student: { student } }) => student;

export default { propsSelector, studentSelector };
