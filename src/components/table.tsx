import React, { useEffect } from 'react';
import MaterialTable from 'material-table'
import { getPerson, updatePerson } from '../redux/personSWD';
import { useAppDispatch, useAppSelector, } from '../hooks';
import { deletePerson } from '../redux/personSWD';

export default function TablePerson() {

    const personList = useAppSelector((state) => state.person.personList);
    console.log(personList)
    const dispatch = useAppDispatch();
    const editable = personList.map(o => ({ ...o }));

    useEffect(() => {
        dispatch(getPerson())
    })


    const { useState } = React;

    const [columns] = useState<any>([
        { title: 'Title', field: 'title' },
        { title: 'NAME', field: 'fullname' },
        { title: 'Birthday', field: 'startDate' },
        { title: 'GENDER', field: 'gender' },
        { title: 'MOBILE PHONE', field: 'phone' },
        { title: 'NATIONALITY', field: 'nationality' },
        { title: 'CihzenID', field: 'cihZenID' },
        { title: 'Passport No', field: 'passport' },
        { title: 'Expected Salary', field: 'salary' },
    ]);

    const [data, setData] = useState<any>([
        { title: 'Mr', fullname: 'startDate', Birthday: '04/14/2564', gender: 'Male', phone: '+660892581590', nationality: 'THAI', CihzenID: '1-8355-0014-712-3', passport: '123456789', salary: 2000 },
    ]);


    return (
        <MaterialTable
            title="Person Preview"
            columns={columns}
            data={editable}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve: any) => {
                        setTimeout(() => {
                            setData([...data, newData]);
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData) =>
                    new Promise((resolve: any) => {
                        setTimeout(() => {
                            console.log(newData)
                            resolve();
                            dispatch(updatePerson({ ...newData }));
                        }, 1000)
                    }),
                onRowDelete: (oldData: any) =>
                    new Promise((resolve: any) => {
                        setTimeout(() => {
                            resolve()
                            console.log(oldData)
                            dispatch(deletePerson({ ...oldData }));
                        }, 1000)
                    }),
            }}
            options={{
                selection: true
            }}
            actions={[
                {
                    tooltip: 'Remove All Selected Users',
                    icon: 'delete',
                    onClick: (evt, data: any) => {
                        if (globalThis.confirm('You want to delete ' + data.length + ' rows')) {
                            data.map((item: any) => {
                                dispatch(deletePerson({ ...item }));
                                return null;
                            })

                        }
                    }
                }
            ]}
        />
    )
}

