import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


type Props = {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function MuiModal({ open, setOpen }: Props) {
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ваша заявка принята
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Мы обязательно с вами свяжемся
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}