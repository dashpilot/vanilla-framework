const data = () => {
  return {
    items: [
      {
        id: "item-1",
        layout: "image-text",
        page: "home",
        title: "Lorem ipsum",
        body: ' <p> Lorem ipsum dolor s<span style="color: inherit; background-color: inherit;">it amet, con</span>sectetur adipiscing elit. Donec rhoncus nisl mauris, eu semper arcu ultricies ut. Mauris commodo nulla et dolor lobortis aliquet. Morbi sapien lacus, porta id venenatis nec, luctus in dolor. Nam convallis, lacus a varius feugiat, odio nunc suscipit massa, vitae lobortis tellus ligula id arcu. </p> ',
        image: "img/astronaut.png",
      },
      {
        id: "item-2",
        layout: "text",
        page: "about",
        title: "Lorem lila",
        body: " <p> Morbi sapien lacus, porta id venenatis nec, luctus in dolor. Nam convallis, lacus a varius feugiat, odio nunc suscipit massa, vitae lobortis tellus ligula id arcu. </p> ",
      },
      {
        id: "item-3",
        layout: "text",
        page: "home",
        title: "Another article",
        body: " <p> Lorem ipsum dolor site amet.</p> ",
      },
    ],
  };
};

export default Data();
