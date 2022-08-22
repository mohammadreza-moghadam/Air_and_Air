import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
// react icons
import { locationsTab } from '../data/mock-data';

const OptionsTab = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "center",
                    flexGrow: 1,
                    px: { xs: 0, md: 2 },
                    alignItems: 'center',
                    mt: 2,
                    mb: 2,
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    {locationsTab.map((tab) => {
                        return <Tab key={tab.id} icon={tab.icon} label={tab.label} />;
                    })}
                </Tabs>
            </Box>
        </Container>
    );
};

export default OptionsTab;