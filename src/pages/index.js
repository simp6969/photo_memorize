import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function App() {
  const [clicked, setClicked] = useState(false);
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
  const [click, setClick] = useState(1);
  const [fisrtClick, setFirstClick] = useState();
  const [globalID, setGlobalID] = useState();
  useEffect(() => {
    const shuffledProperty = [...property].sort(() => Math.random() - 0.5);
    setProperty(shuffledProperty);
  }, []);
  function handleCardClick(id, path) {
    setClick(click + 1);
    const updatedProperty = property.map((card) => {
      if (card.id == id) {
        return { ...card, clicked: !card.clicked };
      }
      return card;
    });
    setProperty(updatedProperty);
    if (click === 1) {
      setFirstClick(path);
      setGlobalID(id);
    } else if (click === 2) {
      setClick(1);

      setTimeout(() => {
        let newProp = property.map((element) => {
          return { ...element, clicked: false };
        });
        setProperty(newProp);
        if (fisrtClick === path) {
          if (id == globalID) {
            return;
          } else {
            alert("same photo");
            let updated = property.filter(
              (element) => element.path !== fisrtClick && element.path !== path
            );
            console.log(updated);
            setProperty(updated);
          }
        }
      }, 500);
    }
  }
  return (
    <div className="outer">
      <h1>jaja</h1>
      <div className="card_container">
        {property.map((element, index) => {
          return (
            <div
              key={index}
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
