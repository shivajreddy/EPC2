import { useState } from "react"

const Item = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  return (
    <div className="border-2 bg-slate-400" onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: "pointer" }}>
      {
        isExpanded &&
        <div>
          <h3> this is extra info for card</h3>
        </div>
      }
      <p >lot xx-xx-xx</p>
      <p>bar</p>
    </div>
  )
}


function Lab() {


  const [activeId, setActiveId] = useState<number | null>();

  const handleClick = (id: number) => {
    setActiveId(id);
  }

  const handleOutsideClick = () => {
    setActiveId(null);
  }


  return (
    <div>
      <p>test expand comp</p>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default Lab

/*
import * as React from 'react';
import './style.css';

interface Card {
  id: number;
  url: string;
  title: string;
};

interface Props {
  data: Array<Card>;
};

const ExpandingCards = ({data}: Props) => {
  const [activeId, setActiveId] = React.useState<number>(1)

  const onClick = (id: number) => setActiveId(id);

  return (
    <div class="container">
      {
        data.map(card => (
          <div
            key={card.id}
            class={`panel ${activeId === card.id ? 'active' : ''}`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}>
            <h3>{card.title}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default ExpandingCards;
*/