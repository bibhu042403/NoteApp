const createNote = async () => {
  const noteText = document.getElementById("note-text").value; //taking data from input part
  const authorText = document.getElementById("author-text").value; // taking data from input part

  //connecting with server side
  const response = await axios({
    url: "http://127.0.0.1:4400",
    method: "POST",
    data: {
      notes: noteText,
      author: authorText,
    },
  });
  if (response.data == true) {
    alert("Note successfully saved!");
  } else {
    alert("Something wrong happen");
  }
};
