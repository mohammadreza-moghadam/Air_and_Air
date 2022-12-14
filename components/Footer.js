import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
    flexBetweenCenter,
    justifyCenter,
    fullWidthFlex,
} from '../themes/commonStyles';

const footerLinks = [
    { id: 1, text: 'کپی رایت', url: '#' },
    { id: 2, text: 'ارتباط با ما', url: '#' },
    { id: 3, text: 'سایت ما', url: '#' },
    { id: 4, text: 'آدرس', url: '#' },
];

const Footer = () => {
    return (
        <Box
            sx={{
                ...fullWidthFlex,
                borderTop: '1px solid #ddd',
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        ...flexBetweenCenter,
                        width: '100%',
                    }}
                >
                    <Stack>
                        <Paper>
                            <Link href="#"> 2022 کپی رایت فیلم یاب </Link>
                        </Paper>
                        {footerLinks.map((link) => {
                            return (
                                <Paper key={link.id}>
                                    <Link href={link.url}> {link.text}</Link>
                                </Paper>
                            );
                        })}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;