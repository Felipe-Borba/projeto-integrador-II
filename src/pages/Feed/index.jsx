import React from "react";
import LayoutMain from "../../components/Layout/LayoutMain";
import Carousel from "./CarouselCustom";
import "./style.css";

const eventos = [
  {
    id: 1,
    image:
      "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/BprzyQ89mRWlQttOg0rhQTbhEtxyMY9Xsk7Z2rcS.jpeg",
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
    image:
      "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/rbtqBqpeCfTQSGja57VlZ1b8CTOna4QTKkjqqenq.jpeg",
    title: "Paradise Sunset by Corona",
    description: `Nada melhor como o Paradise Sunset by Corona para iniciar o novo ano!

O segundo dia de festa do Jurerê Weekend será no dia 02 de janeiro, com o Paradise Sunset, assinado pela Corona.

Na beira da praia, com música boa, cerveja e a vibe singular de Jurerê In, o day party promete entregar uma experiência única para iniciar 2024.`,
    eventDate: "Ter, 02 de Janeiro de 2024",
    opening: "14:00",
    place: "APCEF - Associação do Pessoal da Caixa Econômica Federal",
    city: "Florianópolis",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [{ name: "José", review: "" }],
    promoter: "Jurere Eventos",
    show: ["MANEVA", "COY", "CRIS HOEFLING", "DJs"],
    genre: ["eletrônica", "funk"],
    type: ["festa"],
  },
  // {
  //   id: 2,
  //   image: "",
  //   title: "Tourada edição 24",
  //   description: "",
  //   eventDate: new Date(),
  //   place: "Stage music Park",
  //   city: "Florianópolis",
  //   state: "SC",
  //   location: { latitude: 1231231, longitude: 12312321 },
  //   review: [
  //     { name: "Camila", review: "Não perco um unica edição dessa festa" },
  //   ],
  //   promoter: "Centro Acadêmico Mecânica UFSC",
  //   show: ["dj paçoca", "Bruno e Barreto"],
  //   //lincar com evento passado, nesse caso que tem todo semestre
  //   genre: ["funk", "eletrônica", "sertanejo universitário"],
  //   type: ["festa", "open-bar", "universitária"],
  // },
  // {
  //   id: 3,
  //   image: "",
  //   title: "COMIC(CON)",
  //   description: "O maior evento geek da Grande Florianópolis!",
  //   eventDate: new Date(),
  //   place: "",
  //   city: "Florianópolis",
  //   state: "SC",
  //   location: { latitude: 1231231, longitude: 12312321 },
  //   //lincar com evento passado, nesse caso que tem todo semestre
  //   review: [
  //     {
  //       name: "julia",
  //       review: "fui na edição passada e adorei as lojinhas de doces japoneses",
  //     },
  //   ],
  //   promoter: "nao sei",
  //   show: [],
  //   genre: ["geek", "otaku"],
  //   type: ["evento"],
  // },
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
