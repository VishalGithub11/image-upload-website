import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = (props) => {
  const [file, setfile] = useState(null);
  const [error, seterror] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setfile(selected);
      seterror("");
    } else {
      setfile(null);
      seterror("Pls select only jpg,jpeg,png file type");
    }
  };
  return (
    <div>
      <form>
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setfile} />}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
