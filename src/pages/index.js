import { useState, useEffect } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);
  const [clickedOnce, setClickedOnce] = useState();
  const [property, setProperty] = useState([
    {
      path: "./images/photo1.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo2.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo3.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo4.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo5.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo6.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo1.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo2.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo3.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo4.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo5.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
    {
      path: "./images/photo6.jpg",
      clicked: clicked,
      id: Math.floor(Math.random() * 100000),
    },
  ]);
  const [clicks, setClicks] = useState(0);
  const [id1, setId1] = useState();
  useEffect(() => {
    const shuffledProperty = [...property].sort(() => Math.random() - 0.5);
    setProperty(shuffledProperty);
  }, []);
  function handleCardClick(id, path) {
    setClicks(clicks + 1);

    const updatedProperty = property.map((card) => {
      if (card.id === id) {
        return { ...card, clicked: !card.clicked };
      }
      return card;
    });

    setProperty(updatedProperty);

    if (clicks === 0) {
      setId1(id);
      setClickedOnce(path);
    } else if (clicks === 1) {
      if (clickedOnce === path) {
        if (id1 === id) {
          console.log("That's cheating!");
        } else {
          alert("Same photo");
          const new_prop = property.filter((element) => element.id == id);
          const new_prop1 = property.filter(
            (element) => element.path == clickedOnce
          );
          property.pop(new_prop1);
          property.pop(new_prop);
        }
      }
      setClicks(0);
      setTimeout(() => {
        const updatedProperty = property.map((card) => {
          if (card.id === id1 && card.path === clickedOnce) {
            return { ...card, clicked: !card.clicked };
          }
          return card;
        });

        setProperty(updatedProperty);
      }, 1000);
    }
  }

  return (
    <div className="outer">
      <div className="card_container">
        {property.map((element) => {
          return (
            <div
              key={element.id}
              className="cards"
              onClick={() => handleCardClick(element.id, element.path)}
            >
              {element.clicked ? (
                <img src={element.path}></img>
              ) : (
                <img
                  style={{ borderRadius: "10px" }}
                  src="./images/blank.webp"
                ></img>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
