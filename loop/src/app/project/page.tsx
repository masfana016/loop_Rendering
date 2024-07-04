import React from 'react'
type studenttype =
    {
        name: string,
        age: number,
        number: number,
        grade: string
    }

function page() {
    const studentsArray: studenttype[] = [{
        name: 'John Doe',
        age: 25,
        number: 80,
        grade: 'A'
    }, {
        name: 'Jane Smith',
        age: 22,
        number: 50,
        grade: 'E'
    }, {
        name: 'Michael Johnson',
        age: 23,
        number: 75,
        grade: 'B'
    }, {
        name: 'Sarah Wilson',
        age: 24,
        number: 40,
        grade: 'F'
    }, {
        name: 'David Brown',
        age: 26,
        number: 60,
        grade: 'C'
    }]
    return (
        <div className='m-52 '>
            <table className='border border-2 border-black p-32'>
                <thead>
                    <tr >
                        <th className='border border-2 border-black p-8'>Name</th>
                        <th className='border border-2 border-black p-8'>Age</th>
                        <th className='border border-2 border-black p-8'>Number</th>
                        <th className='border border-2 border-black p-8'>Grade</th>
                        <th className='border border-2 border-black p-8'>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsArray.map((data, i) => data.number >= 60 ?
                        (
                            <tr>
                                <td className='border border-2 border-black p-32'>{data.name}</td>
                                <td className='border border-2 border-black p-32'>{data.age}</td>
                                <td className='border border-2 border-black p-32'>{data.number}</td>
                                <td className='border border-2 border-black p-32'>{data.grade}</td>
                                <td className='border border-2 border-black p-32'>"Pass"</td>
                            </tr>
                        ) : <tr >
                            <td className='border border-2 border-black p-32'>{data.name}</td>
                            <td className='border border-2 border-black p-32'>{data.age}</td>
                            <td className='border border-2 border-black p-32'>{data.number}</td>
                            <td className='border border-2 border-black p-32'>{data.grade}</td>
                            <td className='border border-2 border-black p-32'>"Failed"</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}

export default page