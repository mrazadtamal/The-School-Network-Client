import React, { useState } from "react";

function Pdfupload() {
  const [userdetails, setUserdetails] = useState("");
  const [pdfdata, setpdfdata] = useState("");

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newuserdata = { ...userdetails };
    newuserdata[field] = value;
    setUserdetails(newuserdata);
  };

  console.log(userdetails);
  //console.log("pdfdata", pdfdata.name);
  //let pdfpath = pdfdata?.name;

  const handlepdf = (e) => {
    //booking a apartment
    const fd = new FormData();

    fd.append("doc", pdfdata);
    fd.append("StudentEmail", userdetails.StudentEmail);
    fd.append("StudentId", userdetails.StudentId);

    fetch("http://localhost:5000/pdfupload", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: fd,
    })
      .then((res) => res.json())
      .then((data) => {
        // Do some stuff ...
      })
      .catch((err) => console.log(err));

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handlepdf}>
        <input
          type="file"
          name="doc"
          onBlur={(e) => setpdfdata(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          name="StudentId"
          onBlur={handleOnBlur}
          placeholder="Student id"
        />
        <br />
        <input type="text" name="StudentEmail" onBlur={handleOnBlur} />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Pdfupload;
