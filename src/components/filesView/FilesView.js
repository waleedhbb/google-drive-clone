import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import FileItem from "./FileItem"; // Import should be AFTER other imports
import FileCard from "./FileCard";
import "../../styles/FilesView.css";

const FilesView = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const filesCollectionRef = collection(db, "myFiles");
    const unsubscribe = onSnapshot(filesCollectionRef, (snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Cleanup Firestore listener on unmount
  }, []);

  return (
    <div className="fileView">
      <div className="fileView__row">
        {
           files.slice(0, 5).map(({ id, item }) => (
            <FileCard name={item.caption} />
            ))
        }
        </div>
      <div className="filesView_titles">
        <div className="filesView__titles--left">
          <p>Name</p>
        </div>
        <div className="filesView__titles--right">
          <p>Last modified</p>
          <p>‎ ‎  ‎ ‎ File size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          key={id} // Ensure key is provided
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
};

export default FilesView; // Ensure export default is at the bottom
