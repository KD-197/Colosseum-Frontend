import React, { useState } from 'react';
import { AiOutlineBell, AiOutlineMessage, AiOutlineUser, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export default function SpeedDialButton() {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', zIndex: '999' }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                direction="up"
                icon={<SpeedDialIcon icon={open ? <AiOutlineClose /> : <AiOutlinePlus />} />}
                onClick={handleToggle}
                onOpen={handleToggle}
                open={open}
            >
                <SpeedDialAction icon={<AiOutlineBell />} tooltipTitle="Notification" />
                <SpeedDialAction icon={<AiOutlineMessage />} tooltipTitle="Chat" />
                <SpeedDialAction icon={<AiOutlineUser />} tooltipTitle="Profile" />
            </SpeedDial>
        </div>
    );
}
