import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import '../../styles/NewFile.css';
import { storage, db } from '../../firebase';
import { serverTimestamp, collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, getMetadata } from 'firebase/storage';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';

const theme = createTheme();

const PaperContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
}));

const NewFile = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    const fileRef = ref(storage, `files/${file.name}`);

    try {
      // eslint-disable-next-line
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      const metadata = await getMetadata(fileRef);

      await addDoc(collection(db, 'myFiles'), {
        timestamp: serverTimestamp(),
        caption: file.name,
        fileUrl: url,
        size: metadata.size,
      });

      setUploading(false);
      setOpen(false);
      setFile(null);
    } catch (error) {
      console.error('Upload failed:', error);
      setUploading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="newFile">
        <div className="newFile__container" onClick={handleOpen}>
          <AddIcon fontSize="large" />
          <p>New</p>
        </div>

        <Modal open={open} onClose={handleClose}>
          <PaperContainer>
            <p>Select files you want to upload!</p>
            {uploading ? (
              <p>Uploading...</p>
            ) : (
              <>
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
              </>
            )}
          </PaperContainer>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default NewFile;
