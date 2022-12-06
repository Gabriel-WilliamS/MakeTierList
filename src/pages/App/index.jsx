import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import {
  Container,
  ColumnRank,
  Card,
  ColumnTitle,
  ColumnRankContainer
} from "./styles";
const playerList = [
  { id: "hopz", content: "hopz" },
  { id: "M4rquesss", content: "M4rquesss" },
  { id: "Gurtan", content: "Gurtan" },
  { id: "ghoul", content: "ghoul" },
  { id: "Vinha", content: "Vinha" },
  { id: "Pato", content: "Pato" },
  { id: "Soette", content: "Soette" },
  { id: "yuuta", content: "yuuta" },
  { id: "nightmare", content: "nightmare" },
  { id: "Nyared", content: "Nyared" },
  { id: "Robozinho", content: "Robozinho" },
  { id: "Bortolac", content: "Bortolac" },
  { id: "Jabu", content: "Jabu" },
  { id: "GGs", content: "GGs" },
  { id: "daniel", content: "daniel" },
  { id: "TaDeHack", content: "TaDeHack" },
  { id: "gomes", content: "gomes" },
  { id: "axis", content: "axis" },
  { id: "Leogyon", content: "Leogyon" },
  { id: "Alan", content: "Alan" },
  { id: "Frombull", content: "Frombull" },
  { id: "xavi", content: "xavi" },
  { id: "KDS", content: "KDS" },
  { id: "grilo", content: "grilo" },
  { id: "Conti", content: "Conti" },
  { id: "SofiaDaPuta", content: "SofiaDaPuta" },
  { id: "koshy", content: "koshy" },
  { id: "TiãoCabeçaDeLampida", content: "TiãoCabeçaDeLampida" },
  { id: "Flary", content: "Flary" },
  { id: "Trylouz", content: "Trylouz" },
  { id: "yLux", content: "yLux" },
  { id: "Deep", content: "Deep" },
  { id: "Stm", content: "Stm" },
  { id: "Capivara", content: "Capivara" },
  { id: "Fraiha", content: "Fraiha" },
  { id: "exd", content: "exd" },
  { id: "Ah sla", content: "Ah sla" },
  { id: "Yuri", content: "Yuri" },
  { id: "Yureev", content: "Yureev" },
  { id: "cyrex", content: "cyrex" },
  { id: "GBA", content: "GBA" },
  { id: "GIGI", content: "GIGI" },
  { id: "Buster", content: "Buster" },
  { id: "Lorax", content: "Lorax" },
  { id: "zDragonnz", content: "zDragonnz" },
  { id: "Blablau", content: "Blablau" },
  { id: "I guess", content: "I guess" },
  { id: "Preck", content: "Preck" },
  { id: "Flexy", content: "Flexy" },
  { id: "Jns", content: "Jns" },
  { id: "Pasquali", content: "Pasquali" },
  { id: "Shadows", content: "Shadows" },
  { id: "Smokess", content: "Smokess" },
  { id: "Zero", content: "Zero" },
  { id: "957", content: "957" },
  { id: "Detonex", content: "Detonex" },
  { id: "Enzorp", content: "Enzorp" },
  { id: "Rocks", content: "Rocks" },
  { id: "Baka", content: "Baka" },
  { id: "Chad", content: "Chad" },
  { id: "Cleiton", content: "Cleiton" },
  { id: "Click", content: "Click" },
  { id: "Caio HSW", content: "Caio HSW" },
  { id: "mrn", content: "mrn" },
  { id: "chtkghk4", content: "chtkghk4" },
  { id: "godan", content: "godan" },
  { id: "Wiki", content: "Wiki" },
  { id: "Inniw", content: "Inniw" },
  { id: "Ikki", content: "Ikki" },
  { id: "Kirito", content: "Kirito" },
  { id: "XLrodrigo", content: "XLrodrigo" },
  { id: "MXL", content: "MXL" },
  { id: "Poliw", content: "Poliw" },
  { id: "Vitão", content: "Vitão" },
  { id: "Bpz", content: "Bpz" },
  { id: "Braz", content: "Braz" },
  { id: "KDZ", content: "KDZ" },
  { id: "Rochinha", content: "Rochinha" },
  { id: "Quide", content: "Quide" },
  { id: "Raster", content: "Raster" },
  { id: "Victor", content: "Victor" },
  { id: "White", content: "White" },
  { id: "Yuukari", content: "Yuukari" },
  { id: "unk", content: "unk" },
  { id: "ndp", content: "ndp" },
  { id: "SuperHamester", content: "SuperHamester" },
  { id: "Freezay", content: "Freezay" },
  { id: "Sosty", content: "Sosty" },
  { id: "Sora", content: "Sora" },
  { id: "Black Flash", content: "Black Flash" },
  { id: "guy", content: "guy" },
  { id: "Kannes", content: "Kannes" },
  { id: "Zkug", content: "Zkug" },
  { id: "Pintonauta", content: "Pintonauta" },
  { id: "Cabeça de cotovelo", content: "Cabeça de cotovelo" },
  { id: "Joaopopopo", content: "Joaopopopo" },
  { id: "PTZ", content: "PTZ" },
  { id: "teteus", content: "teteus" },
  { id: "JhonLemon", content: "JhonLemon" },
  { id: "Hellcase", content: "Hellcase" },
  { id: "gbr", content: "gbr" },
  { id: "Zipped", content: "Zipped" },
  { id: "Diih", content: "Diih" },
  { id: "Dedeneyee", content: "Dedeneyee" },
  { id: "Mutoco", content: "Mutoco" },
  { id: "Caike", content: "Caike" },
  { id: "trl", content: "trl" },
  { id: "Romulo", content: "Romulo" },
  { id: "Lopin", content: "Lopin" },
  { id: "Vergonha", content: "Vergonha" },
  { id: "Fade", content: "Fade" },
  { id: "Carlos LG", content: "Carlos LG" },
  { id: "D4rk Pikachu", content: "D4rk Pikachu" },
  { id: "Blindão", content: "Blindão" },
  { id: "Silent", content: "Silent" },
  { id: "JavaScript", content: "JavaScript" },
  { id: "C410", content: "C410" },
  { id: "notzyn", content: "notzyn" },
  { id: "Bruno Vasques", content: "Bruno Vasques" },
  { id: "jOu", content: "jOu" },
  { id: "Toddynho", content: "Toddynho" },
  { id: "Jabuti", content: "Jabuti" },
  { id: "Goularte", content: "Goularte" },
  { id: "Galda", content: "Galda" },
  { id: "Zeruc", content: "Zeruc" },
  { id: "Dollynho", content: "Dollynho" },
  { id: "Doritos", content: "Doritos" },
  { id: "Fu3go", content: "Fu3go" },
  { id: "LeeeeNegron", content: "LeeeeNegron" },
  { id: "Deton", content: "Deton" },
  { id: "Detaton", content: "Detaton" },
  { id: "Salada", content: "Salada" },
  { id: "Hateky", content: "Hateky" },
  { id: "Murilin", content: "Murilin" },
  { id: "Sweezy", content: "Sweezy" },
  { id: "Swazeira", content: "Swazeira" },
  { id: "Bara", content: "Bara" },
  { id: "xxDaniel", content: "xxDaniel" }
];

const rowsFromBackend = {
  firstColum: {
    name: "Teste",
    items: []
  },
  secondColum: {
    name: "B",
    items: []
  },
  thirdColum: {
    name: "C",
    items: []
  },
  fourthColum: {
    name: "D",
    items: []
  },
  fifthColum: {
    name: "E",
    items: []
  },
  List: {
    name: "List",
    items: playerList
  }
};

const onDragEnd = (result, rows, setRows) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = rows[source.droppableId];
    const destColumn = rows[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setRows({
      ...rows,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = rows[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setRows({
      ...rows,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};

export function App() {
  const [rows, setRows] = useState(rowsFromBackend);

  return (
    <Container>
      <DragDropContext onDragEnd={(result) => onDragEnd(result, rows, setRows)}>
        {Object.entries(rows).map(([columnId, column], index) => {
          return (
            <div key={columnId}>
              <Droppable
                droppableId={columnId.toString()}
                key={columnId}
                direction="horizontal"
              >
                {(provided, snapshot) => {
                  return (
                    <ColumnRank
                      isList={columnId == "List"}
                      isDraggingOver={snapshot.isDraggingOver}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <ColumnRankContainer>
                        <ColumnTitle columnType={columnId}>
                          {column.name}
                        </ColumnTitle>

                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id.toString()}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <Card
                                    isDragging={snapshot.isDragging}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {item.content}
                                  </Card>
                                );
                              }}
                            </Draggable>
                          );
                        })}

                        {provided.placeholder}
                      </ColumnRankContainer>
                    </ColumnRank>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </Container>
  );
}
