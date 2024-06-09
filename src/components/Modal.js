import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({search}) {
    const [closeModal, setCloseModal] = React.useState(false)
    const handleClose = () => {
        setCloseModal(true)
    }

  return (
    <div style={{zIndex: 111}} className={closeModal ? `closeModal` : ``}>
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            zIndex: 111
        }}>
            <CloseIcon bgcolor='danger' color="primary" onClick={() => handleClose()} />
            {search.map((items, idx) => {
                return (
                    
                        <Typography key={idx} id="modal-modal-title" variant="h6" component="h2">
                            <NavLink to={`/${items.id}`}>{items.name}</NavLink>
                        </Typography>

                )
            })}
        </Box>
    </div>
  );
}
