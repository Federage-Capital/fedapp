import React, {useState} from 'react';
import axios from 'axios';

export function ImageInputAsync() {

  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }



  const myRegData = {
        name: {
          value: formData.name,
        },
        mail: {
          value: formData.mail,
        },
      };


      const response = await fetch(`https://fed.septembre.io/user/register?_format=json`, {
        method: "POST",
        body: JSON.stringify(myRegData),
        headers: {
          'Content-Type': 'application/json',
        },

      })



      if (response.ok) {
        reset()
        return setStatus("success")
      }

      return setStatus("error")
    }













  function handlesubmit_task2(event) {
    event.preventDefault()
    const url = 'http://fed.septembre.io/uploadFile ';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }

  return (
    <div className="App">
        <form key="2" onSubmit={handlesubmit_task2}>
          <h1>React File Upload</h1>
          <input type="file" onChange={handleChange}/>


<button
          name="submit2"
          variant="contained"
          color="primary"
          type="submit"
          onClick={handlesubmit_task2}
        >
          task 2
        </button>
        </form>
    </div>
  );
}
