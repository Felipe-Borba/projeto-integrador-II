import React from "react";
import LayoutMain from "../../components/Layout/LayoutMain";
import Carousel from "./CarouselCustom";
import "./style.css";

const eventos = [
  {
    id: 1,
    title: "CPM 22 em Balneário",
    description: "",
    eventDate: new Date(),
    place: "The Room - Music Park BC",
    city: "Balneário Camboriú",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [{ name: "José", review: "Sempre é bom o show deles" }],
    promoter: "MG Entretenimento",
    show: ["cpm22"],
    genre: ["rock", "MPB"],
    type: ["show"],
  },
  {
    id: 2,
    title: "Tourada edição 24",
    description: "",
    eventDate: new Date(),
    place: "Stage music Park",
    city: "Florianópolis",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [
      { name: "Camila", review: "Não perco um unica edição dessa festa" },
    ],
    promoter: "Centro Acadêmico Mecânica UFSC",
    show: ["dj paçoca", "Bruno e Barreto"],
    //lincar com evento passado, nesse caso que tem todo semestre
    genre: ["funk", "eletrônica", "sertanejo universitário"],
    type: ["festa", "open-bar", "universitária"],
  },
  {
    id: 3,
    title: "COMIC(CON)",
    description: "O maior evento geek da Grande Florianópolis!",
    eventDate: new Date(),
    place: "",
    city: "Florianópolis",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    //lincar com evento passado, nesse caso que tem todo semestre
    review: [
      {
        name: "julia",
        review: "fui na edição passada e adorei as lojinhas de doces japoneses",
      },
    ],
    promoter: "nao sei",
    show: [],
    genre: ["geek", "otaku"],
    type: ["evento"],
  },
];

export default function Feed() {
  return (
    <LayoutMain headerUser>
      <section className="feed-container">
        <h1>Eventos recomendados:</h1>
        <div className="feed-carousel-container">
          <Carousel events={eventos} />
        </div>
      </section>
    </LayoutMain>
  );
}
