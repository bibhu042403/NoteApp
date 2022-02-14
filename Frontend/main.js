const fetchNotes = async () => {
  const response = await axios({
    url: "http://127.0.0.1:4400",
    method: "GET",
  });
  const noteList = response.data;

  const noteListTag = document.getElementById("view-note-list");
  for (let i = 0; i < noteList.length; i++) {
    //noteList[i] ->{notes,author}
    const tag = `
      <li class="view-note-list">
      <div>${noteList[i].notes}</div>
      <div class="view-note-author">${noteList[i].author}</div>
      </li>
      `;

    noteListTag.innerHTML += tag;
  }
};
fetchNotes();
