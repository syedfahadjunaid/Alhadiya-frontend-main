import React from 'react'

import "./Header.css"

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// dropdown

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Header() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className='header'>

            <div className='sub-header'>

                <div className="sub-header-left">

                    <div className='sub-header-contact'>
                        <a href="tel:+97 9876543210">
                            <span> <PhoneIcon />
                                <p>+97 9876543210</p>
                            </span>
                        </a>
                    </div>

                    <div className='sub-header-contact'>
                        <a href="mailto:kabirusman@gamil.com">
                            <span> <EmailIcon />
                                <p>kabirusman@gamil.com</p>
                            </span>
                        </a>
                    </div>

                </div>

                <div className="sub-header-right">

                    <div className='sub-header-contact'>
                        <a href="/">
                            <span> <LocationOnIcon />
                                <p>Share Location</p>
                            </span>
                        </a>
                    </div>
                    |
                    {/* <div className='sub-header-contact'>
                        <a href="/">
                            <span>
                                <ArrowDropDownIcon />
                            </span>
                        </a>
                    </div> */}
                    <div className='sub-header-contact'>
                        <FormControl className='dropdown-ENG' sx={{ m: 1, minWidth: 110 }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{ color: 'white', maxHeight: '40px', fontSize: '13px' }}
                            >
                                <MenuItem value="">
                                    <p>Dir(UAE)</p>
                                </MenuItem>
                                <MenuItem value={10}>₹ Rupee(IND)</MenuItem>
                                {/* <MenuItem value={20}>$USD</MenuItem>
                                <MenuItem value={30}>$USD</MenuItem>
                                <MenuItem value={30}>$USD</MenuItem> */}
                            </Select>
                        </FormControl>
                    </div>
                    |
                    <div className='sub-header-contact'>
                        <FormControl className='dropdown-ENG' sx={{ m: 1, minWidth: 110 }}>
                            <Select
                                value={age}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                style={{ color: 'white', maxHeight: '40px', fontSize: '13px', outline: 'none !important' }}
                            >
                                <MenuItem value="">
                                    <p>Arabic</p>
                                </MenuItem>
                                <MenuItem value={10}>English</MenuItem>
                                {/* <MenuItem value={20}>Urdu</MenuItem>
                                <MenuItem value={30}>Sanskrit</MenuItem> */}
                            </Select>
                        </FormControl>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header