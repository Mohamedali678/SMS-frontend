function TeacherData(props) {
    return <tbody>
    <tr className="text-center text-1xl mt-10 border-b-2 p-5 ">
        <td className="">{props.ID}</td>
        <td>{props.name} </td>
        <td>{props.address}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td>
        <td>{props.salary}</td>
        <td>{props.date}</td>
    </tr>
</tbody>
}


export default TeacherData