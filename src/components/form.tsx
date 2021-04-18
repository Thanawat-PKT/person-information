import React, { useState, useRef, useEffect } from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./css/stylesTable.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import {
    RadioGroup,
    FormControlLabel,
    Button,
    Radio,

} from "@material-ui/core";

import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../hooks';
import { addNewPerson } from '../redux/personSWD';

interface IFormInput {
    firstName: string;
    lastName: string;
    title: string;
    example: string;
    startDate: string;
    nationality: string;
    RadioGroup: string;
    gender: string;
    phone: string;
    passport: number;
    salary: number;
    cihZenID: number;
    cihZenID1: number;
    cihZenID2: number;
    cihZenID3: number;
    cihZenID4: number;
    cihZenID5: number;
}

export default function FormPropsTextFields() {
    //NOTE State
    const [startDate, setStartDate] = useState<Date | null>();
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('')


    //END State

    useEffect(() => {
        phoneRef.current?.focus?.()
    }, [phone])

    const phoneRef = useRef<any>()

    const handleDateChange = (date: Date | null) => {
        setStartDate(date);
    };


    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm<IFormInput>();



    const Select = React.forwardRef<
        HTMLSelectElement,
        { label: string } & ReturnType<UseFormRegister<IFormInput>>
    >(({ onChange, name, label }, ref) => (
        <>
            <label>{label}</label>
            <select name={name} ref={ref} onChange={onChange}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
            </select>
        </>
    ));

    const SelectNation = React.forwardRef<
        HTMLSelectElement,
        { label: string } & ReturnType<UseFormRegister<IFormInput>>
    >(({ onChange, name, label }, ref) => (
        <>
            <label>{label}</label>
            <select name={name} ref={ref} onChange={onChange}>
                <option value="">--Please Select--</option>
                <option value="THAI">THAI</option>
                <option value="LAOS">LAOS</option>
                <option value="AMERICA">AMERICA</option>
            </select>
        </>
    ));


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender((event.target as HTMLInputElement).value);
    };
    const RadioGender = React.forwardRef<
        HTMLSelectElement,
        { label: string, value: string } & ReturnType<UseFormRegister<IFormInput>>
    >(({ onChange, value, label }) => (
        <>
            <label>{label}</label>
            <RadioGroup aria-label="gender" name="gender" value={value} onChange={onChange} style={{ display: 'block' }}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="unisex" control={<Radio />} label="Unisex" />
            </RadioGroup>
        </>
    ));



    const NumberPhone = React.forwardRef<
        HTMLSelectElement,
        { phone: string, refs: any } & ReturnType<UseFormRegister<IFormInput>>
    >(({ onChange, phone, refs }) => (
        <>
            <PhoneInput
                defaultCountry="TH"
                //@ts-ignore
                ref={refs}
                value={phone}
                onChange={onChange}
                maxLength={16} />
        </>
    ));

    //FIXME
    const dispatch = useAppDispatch();
    //END FIXME




    const onSubmit = (data: IFormInput) => {
        var dateObj: any = startDate;
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        const newdate = month + "/" + day + "/" + year;

        dispatch(addNewPerson({
            ...data, id: uuidv4(), fullname: data.firstName + ' ' + data.lastName,
            cihZenID: data.cihZenID1 + '-' + data.cihZenID2 + '-' + data.cihZenID3 + '-' + data.cihZenID4 + '-' + data.cihZenID5,
            phone, gender, startDate: newdate
        }));
        clearInputs();
        alert(JSON.stringify(data));
    };


    const clearInputs = () => {
        // setTitle('');
        // setAuthor('');
    };


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend">Title:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <Select label="" {...register("title")} />
                                {errors?.title?.type === "title" && <p>This field is required</p>}
                            </div>
                        </div>
                    </FormControl>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Firstname:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    {...register("firstName", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i
                                    })}
                                />
                                {errors?.firstName?.type === "required" && <p>This field is required</p>}
                                {errors?.firstName?.type === "maxLength" && (
                                    <p>First name cannot exceed 20 characters</p>
                                )}
                                {errors?.firstName?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </div>
                        </div>
                    </FormControl>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Lastname:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    {...register("lastName", {
                                        required: true,
                                        pattern: /^[A-Za-z]+$/i
                                    })}
                                />
                                {errors?.lastName?.type === "required" && <p>This field is required</p>}
                                {errors?.lastName?.type === "maxLength" && (
                                    <p>Last name cannot exceed 20 characters</p>
                                )}
                                {errors?.lastName?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Birthday:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <DatePicker
                                    selected={startDate} placeholderText="mm/dd/yyyy" onChange={handleDateChange} />
                            </div>
                        </div>
                    </FormControl>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Nationality:</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <SelectNation label="" {...register("nationality")} />
                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >CihzenID:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    maxLength={1}
                                    style={{ width: '2rem' }}
                                    {...register("cihZenID1", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.cihZenID1?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    maxLength={4}
                                    style={{ width: '5rem' }}
                                    {...register("cihZenID2", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.cihZenID2?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>

                                <input
                                    maxLength={3}
                                    style={{ width: '5rem' }}
                                    {...register("cihZenID3", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.cihZenID3?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>

                                <input
                                    maxLength={4}
                                    style={{ width: '5rem' }}
                                    {...register("cihZenID4", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.cihZenID4?.type === "required" && <p>This field is required</p>}
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    maxLength={1}
                                    style={{ width: '2rem' }}
                                    {...register("cihZenID5", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.cihZenID5?.type === "required" && <p>This field is required</p>}
                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Gender:</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <RadioGender value={gender}
                                    //@ts-ignore
                                    onChange={
                                        handleChange
                                    } />
                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Mobile Phone:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <NumberPhone phone={phone} label=''
                                    //@ts-ignore 
                                    onChange={(numphone) => {
                                        setPhone(numphone)
                                    }}
                                    //@ts-ignore
                                    refs={phoneRef}
                                />

                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FormLabel component="legend">Passport No: </FormLabel>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    {...register("passport", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                            </div>
                        </div>
                    </FormControl>
                </div>
                <div className='mg-1'>
                    <FormControl style={{ display: 'flex', flexWrap: 'initial', flexDirection: 'initial', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ display: 'flex' }}>
                                <FormLabel component="legend" >Expected Salary:</FormLabel>
                                <FormLabel error style={{ padding: '0rem 0.25rem' }} >*</FormLabel>
                            </div>
                            <div style={{ padding: '0rem 0.25rem' }}>
                                <input
                                    {...register("salary", {
                                        required: true,
                                        pattern: /^[0-9]+$/i
                                    })}
                                />
                                {errors?.salary?.type === "required" && <p>This field is required</p>}
                            </div>
                        </div>
                        <label className='mg-1'>THB</label>

                    </FormControl>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-3rem' }}>
                        <Button variant="contained" color="secondary" type='submit'>
                            SUBMIT
                    </Button>
                    </div>
                </div>
            </form>
        </>
    );
}

