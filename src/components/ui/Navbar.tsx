import { useContext, useState } from 'react';
import { AppBar, Box, FormControl, Icon, IconButton, InputLabel, MenuItem, Toolbar } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Close, Label, MenuOutlined } from '@mui/icons-material';
import { UiContext } from '@/contexts/ui';

export const Navbar = () => {
    const { isMenuOpen, toogleSideMenu } = useContext(UiContext)
    const [language, setLanguage] = useState('EN');

    const languages = [
        { label: 'EN', value: 'EN' },
        { label: 'ES', value: 'ES' },
    ]

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value);
    };

    return (
        <AppBar>
            <Toolbar>
                {
                    isMenuOpen
                        ? <>
                            <IconButton onClick={toogleSideMenu}>
                                <Close color='secondary'/>
                            </IconButton>
                        </>
                        : <>
                            <IconButton onClick={toogleSideMenu}>
                                <MenuOutlined color='secondary'/>
                            </IconButton>
                        </>
                }
                <Box flex={ 1 }/>
                <FormControl variant={'standard'} sx={{ m: 1, minWidth: 60 }}>
                    <Select value={language} onChange={handleChange}>
                        {
                            languages.map(({ label, value }) => (
                                <MenuItem key={label} value={value}>
                                    {label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Toolbar>
        </AppBar>
    )
}