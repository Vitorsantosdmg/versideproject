import styles from './select.scss'
import { useState } from 'react'

import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { IoMdMale, IoMdFemale } from 'react-icons/io';
import { FiCheck } from 'react-icons/fi';
import { FaGenderless } from 'react-icons/fa'




export const SelectGender = () => {

    const [genderSelected, setGenderSelected] = useState([<FaGenderless /> ,'Selecione o sexo'])

    return(

        
        <>
            <div id='category-select'>
                <label htmlFor="options-view-button">Sexo</label>
                <input type="checkbox" id='options-view-button' />

                <div id="select-button">
                    <div id="selected-value">{genderSelected}</div>

                    <div id="icons">
                        <BiDownArrow className='icon-down' />
                        <BiUpArrow className='icon-up' />
                    </div>
                </div>
            </div>

            <ul id='options'>
                <li className='option'>
                    <input 
                    type="radio"
                    name='category'
                    value='masculino'
                    onClick={(e) => setGenderSelected([<IoMdMale />," Masculino"])}
                    className='male'/>
                    <IoMdMale className='icon-male' />
                    <span className='label'>Masculino</span>
                    <FiCheck className='check' />

                </li>
                <li className='option'>
                    <input 
                    type="radio"
                    name='category'
                    value='feminino'
                    className='female'
                    onClick={(e) => setGenderSelected([<IoMdFemale /> , " Feminino"])} />
                    <IoMdFemale className='icon-female' />
                    <span className='label'>Feminino</span>
                    <FiCheck className='check' />
                </li>
            </ul>
        </>
    )
}