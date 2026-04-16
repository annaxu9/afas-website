// app/projects/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { StudentProjectSlider } from "../components/StudentProjectSlider";

type Grade = "8" | "7" | "6";

interface StudentProject {
  id: string;
  grade: Grade;
  firstName: string;
  lastInitial: string;
  imageSrcs: string[]; // collection of images for this student's project
}

// 🔧 Sample data — you can expand this to ~90 per grade.
const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "6-leah-s",
    grade: "6",
    firstName: "Leah",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/leah_s_1.png"],
  },
  {
    id: "6-ivanna-j",
    grade: "6",
    firstName: "Ivanna",
    lastInitial: "J",
    imageSrcs: [
      "images/projects/6th/ivanna_j_1.png",
      "images/projects/6th/ivanna_j_2.png",
      "images/projects/6th/ivanna_j_2.png",
    ],
  },
  {
    id: "6-isaac-n",
    grade: "6",
    firstName: "Isaac",
    lastInitial: "N",
    imageSrcs: [
      "images/projects/6th/isaac_n_1.png",
      "images/projects/6th/isaac_n_2.png",
      "images/projects/6th/isaac_n_3.png",
    ],
  },
  {
    id: "6-miguel-m",
    grade: "6",
    firstName: "Miguel",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/miguel_m_1.png"],
  },
  {
    id: "6-asher-a",
    grade: "6",
    firstName: "Asher",
    lastInitial: "A",
    imageSrcs: [
      "images/projects/6th/asher_a_1.png",
      "images/projects/6th/asher_a_2.png",
      "images/projects/6th/asher_a_3.png",
    ],
  },
  {
    id: "6-hugo-p",
    grade: "6",
    firstName: "Hugo",
    lastInitial: "P",
    imageSrcs: ["images/projects/6th/hugo_p_1.png"],
  },
  {
    id: "6-carter-h",
    grade: "6",
    firstName: "Carter",
    lastInitial: "H",
    imageSrcs: ["images/projects/6th/carter_h_1.png"],
  },
  {
    id: "6-mia-s",
    grade: "6",
    firstName: "Mia",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/mia_s_1.png"],
  },
  {
    id: "6-reid-w",
    grade: "6",
    firstName: "Reid",
    lastInitial: "W",
    imageSrcs: ["images/projects/6th/reid_w_1.png"],
  },
  {
    id: "6-patrick-m",
    grade: "6",
    firstName: "Patrick",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/6th/patrick_m_1.png",
      "images/projects/6th/patrick_m_2.png",
      "images/projects/6th/patrick_m_3.png",
    ],
  },
  {
    id: "6-sagan-r",
    grade: "6",
    firstName: "Sagan",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/sagan_r_1.png",
      "images/projects/6th/sagan_r_2.png",
      "images/projects/6th/sagan_r_3.png",
    ],
  },
  {
    id: "6-colin-p",
    grade: "6",
    firstName: "Colin",
    lastInitial: "P",
    imageSrcs: [
      "images/projects/6th/colin_p_1.png",
      "images/projects/6th/colin_p_2.png",
      "images/projects/6th/colin_p_3.png",
      "images/projects/6th/colin_p_4.png",
    ],
  },
  {
    id: "6-leticia-l",
    grade: "6",
    firstName: "Leticia",
    lastInitial: "L",
    imageSrcs: ["images/projects/6th/leticia_l_1.png"],
  },
  {
    id: "6-leo-m",
    grade: "6",
    firstName: "Leo",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/6th/leo_m_1.png",
      "images/projects/6th/leo_m_2.png",
      "images/projects/6th/leo_m_3.png",
      "images/projects/6th/leo_m_4.png",
      "images/projects/6th/leo_m_5.png",
    ],
  },
  {
    id: "6-divya-v",
    grade: "6",
    firstName: "Divya",
    lastInitial: "V",
    imageSrcs: ["images/projects/6th/divya_v_1.png"],
  },
  {
    id: "6-james-r",
    grade: "6",
    firstName: "James",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/james_r_1.png"],
  },
  {
    id: "6-juanjose-o",
    grade: "6",
    firstName: "Juanjose",
    lastInitial: "O",
    imageSrcs: [
      "images/projects/6th/juanjose_o_1.png",
      "images/projects/6th/juanjose_o_2.png",
      "images/projects/6th/juanjose_o_3.png",
    ],
  },
  {
    id: "6-micah-e",
    grade: "6",
    firstName: "Micah",
    lastInitial: "E",
    imageSrcs: [
      "images/projects/6th/micah_e_1.png",
      "images/projects/6th/micah_e_2.png",
      "images/projects/6th/micah_e_3.png",
      "images/projects/6th/micah_e_4.png",
    ],
  },
  {
    id: "6-adrian-e",
    grade: "6",
    firstName: "Adrian",
    lastInitial: "E",
    imageSrcs: ["images/projects/6th/adrian_e_1.png"],
  },
  {
    id: "6-ignacio-f",
    grade: "6",
    firstName: "Ignacio",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/6th/ignacio_f_1.png",
      "images/projects/6th/ignacio_f_2.png",
      "images/projects/6th/ignacio_f_3.png",
      "images/projects/6th/ignacio_f_4.png",
      "images/projects/6th/ignacio_f_5.png",
    ],
  },
  {
    id: "6-asher-s",
    grade: "6",
    firstName: "Asher",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/6th/asher_s_1.png",
      "images/projects/6th/asher_s_2.png",
      "images/projects/6th/asher_s_3.png",
    ],
  },
  {
    id: "6-pedro-c",
    grade: "6",
    firstName: "Pedro",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/6th/pedro_c_1.png",
      "images/projects/6th/pedro_c_2.png",
      "images/projects/6th/pedro_c_3.png",
    ],
  },
  {
    id: "6-maria-e",
    grade: "6",
    firstName: "Maria",
    lastInitial: "E",
    imageSrcs: ["images/projects/6th/maria_e_1.png"],
  },
  {
    id: "6-steven-y",
    grade: "6",
    firstName: "Steven",
    lastInitial: "Y",
    imageSrcs: [
      "images/projects/6th/steven_y_1.png",
      "images/projects/6th/steven_y_2.png",
      "images/projects/6th/steven_y_3.png",
      "images/projects/6th/steven_y_4.png",
    ],
  },
  {
    id: "6-sarah-s",
    grade: "6",
    firstName: "Sarah",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/sarah_s_1.png"],
  },
  {
    id: "6-axel-v",
    grade: "6",
    firstName: "Axel",
    lastInitial: "V",
    imageSrcs: [
      "images/projects/6th/axel_v_1.png",
      "images/projects/6th/axel_v_2.png",
      "images/projects/6th/axel_v_3.png",
    ],
  },
  {
    id: "6-anderson-l",
    grade: "6",
    firstName: "Anderson",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/6th/anderson_l_1.png",
      "images/projects/6th/anderson_l_2.png",
      "images/projects/6th/anderson_l_3.png",
      "images/projects/6th/anderson_l_4.png",
      "images/projects/6th/anderson_l_5.png",
    ],
  },
  {
    id: "6-ayman-h",
    grade: "6",
    firstName: "Ayman",
    lastInitial: "H",
    imageSrcs: ["images/projects/6th/ayman_h_1.png"],
  },
  {
    id: "6-eva-r",
    grade: "6",
    firstName: "Eva",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/eva_r_1.png"],
  },
  {
    id: "6-wesley-r",
    grade: "6",
    firstName: "Wesley",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/wesley_r_1.png",
      "images/projects/6th/wesley_r_2.png",
      "images/projects/6th/wesley_r_3.png",
      "images/projects/6th/wesley_r_4.png",
    ],
  },
  {
    id: "6-chase-r",
    grade: "6",
    firstName: "Chase",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/chase_r_1.png",
      "images/projects/6th/chase_r_2.png",
      "images/projects/6th/chase_r_3.png",
    ],
  },
  {
    id: "6-menaal-k",
    grade: "6",
    firstName: "Menaal",
    lastInitial: "K",
    imageSrcs: ["images/projects/6th/menaal_k_1.png"],
  },
  {
    id: "6-emely-p",
    grade: "6",
    firstName: "Emely",
    lastInitial: "P",
    imageSrcs: ["images/projects/6th/emely_p_1.png"],
  },
  {
    id: "6-maika-t",
    grade: "6",
    firstName: "Maika",
    lastInitial: "T",
    imageSrcs: ["images/projects/6th/maika_t_1.png"],
  },
  {
    id: "6-audrey-r",
    grade: "6",
    firstName: "Audrey",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/audrey_r_1.png",
      "images/projects/6th/audrey_r_2.png",
      "images/projects/6th/audrey_r_3.png",
    ],
  },
  {
    id: "6-aarej-a",
    grade: "6",
    firstName: "Aarej",
    lastInitial: "A",
    imageSrcs: [
      "images/projects/6th/aarej_a_1.png",
      "images/projects/6th/aarej_a_2.png",
      "images/projects/6th/aarej_a_3.png",
    ],
  },
  {
    id: "6-elmer-g",
    grade: "6",
    firstName: "Elmer",
    lastInitial: "G",
    imageSrcs: ["images/projects/6th/elmer_g_1.png"],
  },
  {
    id: "6-elias-c",
    grade: "6",
    firstName: "Elias",
    lastInitial: "C",
    imageSrcs: ["images/projects/6th/elias_c_1.png"],
  },
  {
    id: "6-justin-m",
    grade: "6",
    firstName: "Justin",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/justin_m_1.png"],
  },
  {
    id: "6-abigail-l",
    grade: "6",
    firstName: "Abigail",
    lastInitial: "L",
    imageSrcs: ["images/projects/6th/abigail_l_1.png"],
  },
  {
    id: "6-jeremy-a",
    grade: "6",
    firstName: "Jeremy",
    lastInitial: "A",
    imageSrcs: ["images/projects/6th/jeremy_a_1.png"],
  },

  {
    id: "6-ashly-s",
    grade: "6",
    firstName: "Ashly",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/ashly_s_1.png"],
  },
  {
    id: "6-ronan-f",
    grade: "6",
    firstName: "Ronan",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/6th/ronan_f_1.png",
      "images/projects/6th/ronan_f_2.png",
      "images/projects/6th/ronan_f_3.png",
    ],
  },
  {
    id: "6-katherine-r",
    grade: "6",
    firstName: "Katherine",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/katherine_r_1.png"],
  },
  {
    id: "6-amparo-l",
    grade: "6",
    firstName: "Amparo",
    lastInitial: "L",
    imageSrcs: ["images/projects/6th/amparo_l_1.png"],
  },
  {
    id: "6-keneth-m",
    grade: "6",
    firstName: "Keneth",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/keneth_m_1.png"],
  },
  {
    id: "6-paul-c",
    grade: "6",
    firstName: "Paul",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/6th/paul_c_1.png",
      "images/projects/6th/paul_c_2.png",
      "images/projects/6th/paul_c_3.png",
    ],
  },
  {
    id: "6-cristofer-m",
    grade: "6",
    firstName: "Cristofer",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/6th/cristofer_m_1.png",
      "images/projects/6th/cristofer_m_2.png",
      "images/projects/6th/cristofer_m_3.png",
      "images/projects/6th/cristofer_m_4.png",
    ],
  },
  {
    id: "6-aiden-r",
    grade: "6",
    firstName: "Aiden",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/aiden_r_1.png",
      "images/projects/6th/aiden_r_2.png",
      "images/projects/6th/aiden_r_3.png",
      "images/projects/6th/aiden_r_4.png",
    ],
  },
  {
    id: "6-axel-m",
    grade: "6",
    firstName: "Axel",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/axel_m_1.png"],
  },
  {
    id: "6-carmen-z",
    grade: "6",
    firstName: "Carmen",
    lastInitial: "Z",
    imageSrcs: ["images/projects/6th/carmen_z_1.png"],
  },

  {
    id: "6-florence-w",
    grade: "6",
    firstName: "Florence",
    lastInitial: "W",
    imageSrcs: [
      "images/projects/6th/florence_w_1.png",
      "images/projects/6th/florence_w_2.png",
      "images/projects/6th/florence_w_3.png",
    ],
  },
  {
    id: "6-malachi-a",
    grade: "6",
    firstName: "Malachi",
    lastInitial: "A",
    imageSrcs: ["images/projects/6th/malachi_a_1.png"],
  },
  {
    id: "6-karla-c",
    grade: "6",
    firstName: "Karla",
    lastInitial: "C",
    imageSrcs: ["images/projects/6th/karla_c_1.png"],
  },
  {
    id: "6-esmeralda-r",
    grade: "6",
    firstName: "Esmeralda",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/esmeralda_r_1.png"],
  },
  {
    id: "6-ariana-m",
    grade: "6",
    firstName: "Ariana",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/ariana_m_1.png"],
  },
  {
    id: "6-ana-r",
    grade: "6",
    firstName: "Ana",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/ana_r_1.png"],
  },
  {
    id: "6-fatima-d",
    grade: "6",
    firstName: "Fatima",
    lastInitial: "D",
    imageSrcs: ["images/projects/6th/fatima_d_1.png"],
  },
  {
    id: "6-tasha-p",
    grade: "6",
    firstName: "Tasha",
    lastInitial: "P",
    imageSrcs: ["images/projects/6th/tasha_p_1.png"],
  },
  {
    id: "6-jeremiah-f",
    grade: "6",
    firstName: "Jeremiah",
    lastInitial: "F",
    imageSrcs: ["images/projects/6th/jeremiah_f_1.png"],
  },
  {
    id: "6-justin-j",
    grade: "6",
    firstName: "Justin",
    lastInitial: "J",
    imageSrcs: ["images/projects/6th/justin_j_1.png"],
  },
  {
    id: "6-alexia-m",
    grade: "6",
    firstName: "Alexia",
    lastInitial: "M",
    imageSrcs: ["images/projects/6th/alexia_n_1.png"],
  },
  {
    id: "6-khloe-m",
    grade: "6",
    firstName: "Khloe",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/6th/khloe_m_1.png",
      "images/projects/6th/khloe_m_2.png",
      "images/projects/6th/khloe_m_3.png",
      "images/projects/6th/khloe_m_4.png",
    ],
  },
  {
    id: "6-jonathon-c",
    grade: "6",
    firstName: "Jonathon",
    lastInitial: "C",
    imageSrcs: ["images/projects/6th/jonathon_c_1.png"],
  },
  {
    id: "6-genesis-c",
    grade: "6",
    firstName: "Genesis",
    lastInitial: "C",
    imageSrcs: ["images/projects/6th/genesis_c_1.png"],
  },
  {
    id: "6-haoming-l",
    grade: "6",
    firstName: "Haoming",
    lastInitial: "L",
    imageSrcs: ["images/projects/6th/haoming_l_1.png"],
  },
  {
    id: "6-jaylee-a",
    grade: "6",
    firstName: "Jaylee",
    lastInitial: "A",
    imageSrcs: ["images/projects/6th/jaylee_a_1.png"],
  },
  {
    id: "6-heidy-r",
    grade: "6",
    firstName: "Heidy",
    lastInitial: "R",
    imageSrcs: ["images/projects/6th/heidy_r_1.png"],
  },
  {
    id: "6-yariel-h",
    grade: "6",
    firstName: "Yariel",
    lastInitial: "H",
    imageSrcs: [
      "images/projects/6th/yariel_h_1.png",
      "images/projects/6th/yariel_h_2.png",
      "images/projects/6th/yariel_h_3.png",
      "images/projects/6th/yariel_h_4.png",
    ],
  },
  {
    id: "6-melanie-l",
    grade: "6",
    firstName: "Melanie",
    lastInitial: "L",
    imageSrcs: ["images/projects/6th/melanie_l_1.png"],
  },
  {
    id: "6-israel-e",
    grade: "6",
    firstName: "Israel",
    lastInitial: "E",
    imageSrcs: [
      "images/projects/6th/israel_e_1.png",
      "images/projects/6th/israel_e_2.png",
      "images/projects/6th/israel_e_3.png",
      "images/projects/6th/israel_e_4.png",
    ],
  },
  {
    id: "6-casey-p",
    grade: "6",
    firstName: "Casey",
    lastInitial: "P",
    imageSrcs: ["images/projects/6th/casey_p_1.png"],
  },
  {
    id: "6-aaron-s",
    grade: "6",
    firstName: "Aaron",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/aaron_s_1.png"],
  },
  {
    id: "6-hazelle-o",
    grade: "6",
    firstName: "Hazelle",
    lastInitial: "O",
    imageSrcs: [
      "images/projects/6th/hazelle_o_1.png",
      "images/projects/6th/hazelle_o_2.png",
      "images/projects/6th/hazelle_o_3.png",
    ],
  },
  {
    id: "6-isabelli-s",
    grade: "6",
    firstName: "Isabelli",
    lastInitial: "S",
    imageSrcs: ["images/projects/6th/isabelli_s_1.png"],
  },
  {
    id: "6-brianna-r",
    grade: "6",
    firstName: "Brianna",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/6th/brianna_r_1.png",
      "images/projects/6th/brianna_r_2.png",
      "images/projects/6th/brianna_r_3.png",
      "images/projects/6th/brianna_r_4.png",
    ],
  },
  {
    id: "6-enola-v",
    grade: "6",
    firstName: "Enola",
    lastInitial: "V",
    imageSrcs: [
      "images/projects/6th/enola_v_1.png",
      "images/projects/6th/enola_v_2.png",
      "images/projects/6th/enola_v_3.png",
      "images/projects/6th/enola_v_4.png",
    ],
  },
  {
    id: "7-dylan-y",
    grade: "7",
    firstName: "Dylan",
    lastInitial: "Y",
    imageSrcs: [
      "images/projects/7th/dylan_y_1.png",
      "images/projects/7th/dylan_y_2.png",
      "images/projects/7th/dylan_y_3.png",
      "images/projects/7th/dylan_y_4.png",
      "images/projects/7th/dylan_y_5.png",
      "images/projects/7th/dylan_y_6.png",
    ],
  },
  {
    id: "7-patrick-c",
    grade: "7",
    firstName: "Patrick",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/7th/patrick_c_1.png",
      "images/projects/7th/patrick_c_2.png",
      "images/projects/7th/patrick_c_3.png",
      "images/projects/7th/patrick_c_4.png",
      "images/projects/7th/patrick_c_5.png",
    ],
  },
  {
    id: "7-sarah-l",
    grade: "7",
    firstName: "Sarah",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/7th/sarah_l_1.png",
      "images/projects/7th/sarah_l_2.png",
      "images/projects/7th/sarah_l_3.png",
      "images/projects/7th/sarah_l_4.png",
    ],
  },
  {
    id: "7-enzo-c",
    grade: "7",
    firstName: "Enzo",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/7th/enzo_c_1.png",
      "images/projects/7th/enzo_c_2.png",
      "images/projects/7th/enzo_c_3.png",
      "images/projects/7th/enzo_c_4.png",
    ],
  },
  {
    id: "7-dilan-h",
    grade: "7",
    firstName: "Dilan",
    lastInitial: "H",
    imageSrcs: ["images/projects/7th/dilan_h_1.png"],
  },
  {
    id: "7-suchi-p",
    grade: "7",
    firstName: "Suchi",
    lastInitial: "P",
    imageSrcs: [
      "images/projects/7th/suchi_p_1.png",
      "images/projects/7th/suchi_p_2.png",
      "images/projects/7th/suchi_p_3.png",
      "images/projects/7th/suchi_p_4.png",
    ],
  },
  {
    id: "7-anderson-c",
    grade: "7",
    firstName: "Anderson",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/7th/anderson_c_1.png",
      "images/projects/7th/anderson_c_2.png",
      "images/projects/7th/anderson_c_3.png",
      "images/projects/7th/anderson_c_4.png",
    ],
  },
  {
    id: "7-jeremias-r",
    grade: "7",
    firstName: "Jeremias",
    lastInitial: "R",
    imageSrcs: ["images/projects/7th/jeremias_r_1.png"],
  },
  {
    id: "7-joaquim-f",
    grade: "7",
    firstName: "Joaquim",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/7th/joaquim_f_1.png",
      "images/projects/7th/joaquim_f_2.png",
      "images/projects/7th/joaquim_f_3.png",
      "images/projects/7th/joaquim_f_4.png",
    ],
  },
  {
    id: "7-callie-f",
    grade: "7",
    firstName: "Callie",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/7th/callie_f_1.png",
      "images/projects/7th/callie_f_2.png",
      "images/projects/7th/callie_f_3.png",
      "images/projects/7th/callie_f_4.png",
    ],
  },
  {
    id: "7-melissa-m",
    grade: "7",
    firstName: "Melissa",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/7th/melissa_m_1.png",
      "images/projects/7th/melissa_m_2.png",
      "images/projects/7th/melissa_m_3.png",
      "images/projects/7th/melissa_m_4.png",
    ],
  },
  {
    id: "7-molly-b",
    grade: "7",
    firstName: "Molly",
    lastInitial: "B",
    imageSrcs: [
      "images/projects/7th/molly_b_1.png",
      "images/projects/7th/molly_b_2.png",
      "images/projects/7th/molly_b_3.png",
      "images/projects/7th/molly_b_4.png",
    ],
  },
  {
    id: "7-charlotte-g",
    grade: "7",
    firstName: "Charlotte",
    lastInitial: "G",
    imageSrcs: [
      "images/projects/7th/charlotte_g_1.png",
      "images/projects/7th/charlotte_g_2.png",
      "images/projects/7th/charlotte_g_3.png",
      "images/projects/7th/charlotte_g_4.png",
    ],
  },
  {
    id: "7-helen-e",
    grade: "7",
    firstName: "Helen",
    lastInitial: "E",
    imageSrcs: [
      "images/projects/7th/helen_e_1.png",
      "images/projects/7th/helen_e_2.png",
      "images/projects/7th/helen_e_3.png",
    ],
  },

  {
    id: "7-anelia-m",
    grade: "7",
    firstName: "Anelia",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/7th/anelia_m_1.png",
      "images/projects/7th/anelia_m_2.png",
      "images/projects/7th/anelia_m_3.png",
    ],
  },

  {
    id: "7-mika-p",
    grade: "7",
    firstName: "Mika",
    lastInitial: "P",
    imageSrcs: [
      "images/projects/7th/mika_p_1.png",
      "images/projects/7th/mika_p_2.png",
      "images/projects/7th/mika_p_3.png",
    ],
  },
  {
    id: "7-violet-k",
    grade: "7",
    firstName: "Violet",
    lastInitial: "K",
    imageSrcs: [
      "images/projects/7th/violet_k_1.png",
      "images/projects/7th/violet_k_2.png",
      "images/projects/7th/violet_k_3.png",
      "images/projects/7th/violet_k_4.png",
    ],
  },
  {
    id: "7-tristan-t",
    grade: "7",
    firstName: "Tristan",
    lastInitial: "T",
    imageSrcs: ["images/projects/7th/tristan_t_1.png"],
  },
  {
    id: "7-jasmin-f",
    grade: "7",
    firstName: "Jasmin",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/7th/jasmin_f_1.png",
      "images/projects/7th/jasmin_f_2.png",
      "images/projects/7th/jasmin_f_3.png",
    ],
  },
  {
    id: "7-evander-k",
    grade: "7",
    firstName: "Evander",
    lastInitial: "K",
    imageSrcs: [
      "images/projects/7th/evander_k_1.png",
      "images/projects/7th/evander_k_2.png",
      "images/projects/7th/evander_k_3.png",
      "images/projects/7th/evander_k_4.png",
    ],
  },
  {
    id: "7-alex-w",
    grade: "7",
    firstName: "Alex",
    lastInitial: "W",
    imageSrcs: [
      "images/projects/7th/alex_w_1.png",
      "images/projects/7th/alex_w_2.png",
      "images/projects/7th/alex_w_3.png",
      "images/projects/7th/alex_w_4.png",
      "images/projects/7th/alex_w_5.png",
    ],
  },
  {
    id: "7-jayline-m",
    grade: "7",
    firstName: "Jayline",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/jayline_m_1.png"],
  },
  {
    id: "7-tiffany-d",
    grade: "7",
    firstName: "Tiffany",
    lastInitial: "D",
    imageSrcs: ["images/projects/7th/tiffany_d_1.png"],
  },
  {
    id: "7-jeff-y",
    grade: "7",
    firstName: "Jeff",
    lastInitial: "Y",
    imageSrcs: [
      "images/projects/7th/jeff_y_1.png",
      "images/projects/7th/jeff_y_2.png",
      "images/projects/7th/jeff_y_3.png",
      "images/projects/7th/jeff_y_4.png",
    ],
  },
  {
    id: "7-brandon-o",
    grade: "7",
    firstName: "Brandon",
    lastInitial: "O",
    imageSrcs: ["images/projects/7th/brandon_o_1.png"],
  },
  {
    id: "7-katherine-v",
    grade: "7",
    firstName: "Katherine",
    lastInitial: "V",
    imageSrcs: ["images/projects/7th/katherine_v_1.png"],
  },
  {
    id: "7-alyson-r",
    grade: "7",
    firstName: "Alyson",
    lastInitial: "R",
    imageSrcs: ["images/projects/7th/alyson_r_1.png"],
  },
  {
    id: "7-carla-y",
    grade: "7",
    firstName: "Carla",
    lastInitial: "Y",
    imageSrcs: [
      "images/projects/7th/carla_y_1.png",
      "images/projects/7th/carla_y_2.png",
      "images/projects/7th/carla_y_3.png",
      "images/projects/7th/carla_y_4.png",
    ],
  },
  {
    id: "7-valery-y",
    grade: "7",
    firstName: "Valery",
    lastInitial: "Y",
    imageSrcs: ["images/projects/7th/valery_q_1.png"],
  },
  {
    id: "7-aarav-k",
    grade: "7",
    firstName: "Aarav",
    lastInitial: "K",
    imageSrcs: ["images/projects/7th/aarav_k_1.png"],
  },
  {
    id: "7-valerie-g",
    grade: "7",
    firstName: "Valerie",
    lastInitial: "G",
    imageSrcs: ["images/projects/7th/valerie_g_1.png"],
  },
  {
    id: "7-ashley-g",
    grade: "7",
    firstName: "Ashley",
    lastInitial: "G",
    imageSrcs: ["images/projects/7th/ashley_g_1.png"],
  },
  {
    id: "7-valery-s",
    grade: "7",
    firstName: "Valery",
    lastInitial: "S",
    imageSrcs: ["images/projects/7th/valery_s_1.png"],
  },
  {
    id: "7-izabella-v",
    grade: "7",
    firstName: "Izabella",
    lastInitial: "V",
    imageSrcs: [
      "images/projects/7th/izabella_v_1.png",
      "images/projects/7th/izabella_v_2.png",
      "images/projects/7th/izabella_v_3.png",
      "images/projects/7th/izabella_v_4.png",
    ],
  },
  {
    id: "7-edison-m",
    grade: "7",
    firstName: "Edison",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/edison_m_1.png"],
  },
  {
    id: "7-jayla-f",
    grade: "7",
    firstName: "Jayla",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/7th/jayla_f_1.png",
      "images/projects/7th/jayla_f_2.png",
      "images/projects/7th/jayla_f_3.png",
      "images/projects/7th/jayla_f_4.png",
    ],
  },
  {
    id: "7-sara-z",
    grade: "7",
    firstName: "Sara",
    lastInitial: "Z",
    imageSrcs: ["images/projects/7th/sara_z_1.png"],
  },
  {
    id: "7-jeffrey-m",
    grade: "7",
    firstName: "Jeffrey",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/jeffrey_m_1.png"],
  },
  {
    id: "7-nico-f",
    grade: "7",
    firstName: "Nico",
    lastInitial: "F",
    imageSrcs: ["images/projects/7th/nico_f_1.png"],
  },
  {
    id: "7-francisco-b",
    grade: "7",
    firstName: "Francisco",
    lastInitial: "B",
    imageSrcs: [
      "images/projects/7th/francisco_b_1.png",
      "images/projects/7th/francisco_b_2.png",
      "images/projects/7th/francisco_b_3.png",
      "images/projects/7th/francisco_b_4.png",
    ],
  },
  {
    id: "7-parth-b",
    grade: "7",
    firstName: "Parth",
    lastInitial: "B",
    imageSrcs: [
      "images/projects/7th/parth_b_1.png",
      "images/projects/7th/parth_b_2.png",
      "images/projects/7th/parth_b_3.png",
    ],
  },
  {
    id: "7-mateo-p",
    grade: "7",
    firstName: "Mateo",
    lastInitial: "P",
    imageSrcs: ["images/projects/7th/mateo_p_1.png"],
  },
  {
    id: "7-nathalie-f",
    grade: "7",
    firstName: "Nathalie",
    lastInitial: "F",
    imageSrcs: ["images/projects/7th/nathalie_f_1.png"],
  },
  {
    id: "7-leandro-r",
    grade: "7",
    firstName: "Leandro",
    lastInitial: "R",
    imageSrcs: ["images/projects/7th/leandro_r_1.png"],
  },
  {
    id: "7-sebastian-s",
    grade: "7",
    firstName: "Sebastian",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/7th/sebastian_s_1.png",
      "images/projects/7th/sebastian_s_2.png",
      "images/projects/7th/sebastian_s_3.png",
      "images/projects/7th/sebastian_s_4.png",
    ],
  },
  {
    id: "7-melissa-v",
    grade: "7",
    firstName: "Melissa",
    lastInitial: "V",
    imageSrcs: ["images/projects/7th/melissa_v_1.png"],
  },
  {
    id: "7-rose-c",
    grade: "7",
    firstName: "Rose",
    lastInitial: "C",
    imageSrcs: ["images/projects/7th/rose_c_1.png"],
  },
  {
    id: "7-lina-v",
    grade: "7",
    firstName: "Lina",
    lastInitial: "V",
    imageSrcs: [
      "images/projects/7th/lina_v_1.png",
      "images/projects/7th/lina_v_2.png",
      "images/projects/7th/lina_v_3.png",
      "images/projects/7th/lina_v_4.png",
    ],
  },
  {
    id: "7-tracey-p",
    grade: "7",
    firstName: "Tracey",
    lastInitial: "P",
    imageSrcs: ["images/projects/7th/tracey_p_1.png"],
  },
  {
    id: "7-angel-p",
    grade: "7",
    firstName: "Angel",
    lastInitial: "P",
    imageSrcs: ["images/projects/7th/angel_p_1.png"],
  },
  {
    id: "7-kevin-p",
    grade: "7",
    firstName: "Kevin",
    lastInitial: "P",
    imageSrcs: ["images/projects/7th/kevin_p_1.png"],
  },
  {
    id: "7-omar-s",
    grade: "7",
    firstName: "Omar",
    lastInitial: "S",
    imageSrcs: ["images/projects/7th/omar_s_1.png"],
  },
  {
    id: "7-johan-c",
    grade: "7",
    firstName: "Johan",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/7th/johan_c_1.png",
      "images/projects/7th/johan_c_2.png",
      "images/projects/7th/johan_c_3.png",
      "images/projects/7th/johan_c_4.png",
    ],
  },
  {
    id: "7-cristian-h",
    grade: "7",
    firstName: "Cristian",
    lastInitial: "H",
    imageSrcs: ["images/projects/7th/cristian_h_1.png"],
  },
  {
    id: "7-keira-f",
    grade: "7",
    firstName: "Keira",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/7th/keira_f_1.png",
      "images/projects/7th/keira_f_2.png",
      "images/projects/7th/keira_f_3.png",
    ],
  },
  {
    id: "7-ever-m",
    grade: "7",
    firstName: "Ever",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/ever_m_1.png"],
  },
  {
    id: "7-jayden-d",
    grade: "7",
    firstName: "Jayden",
    lastInitial: "D",
    imageSrcs: [
      "images/projects/7th/jayden_d_1.png",
      "images/projects/7th/jayden_d_2.png",
      "images/projects/7th/jayden_d_3.png",
      "images/projects/7th/jayden_d_4.png",
    ],
  },
  {
    id: "7-ellis-m",
    grade: "7",
    firstName: "Ellis",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/ellis_m_1.png"],
  },
  {
    id: "7-princess-a",
    grade: "7",
    firstName: "Princess",
    lastInitial: "A",
    imageSrcs: ["images/projects/7th/princess_a_1.png"],
  },
  {
    id: "7-marvin-u",
    grade: "7",
    firstName: "Marvin",
    lastInitial: "U",
    imageSrcs: ["images/projects/7th/marvin_u_1.png"],
  },
  {
    id: "7-maxwell-z",
    grade: "7",
    firstName: "Maxwell",
    lastInitial: "Z",
    imageSrcs: ["images/projects/7th/max_z_1.png"],
  },
  {
    id: "7-ule-r",
    grade: "7",
    firstName: "Ule",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/7th/ule_r_1.png",
      "images/projects/7th/ule_r_2.png",
      "images/projects/7th/ule_r_3.png",
      "images/projects/7th/ule_r_4.png",
    ],
  },
  {
    id: "7-aydan-g",
    grade: "7",
    firstName: "Aydan",
    lastInitial: "G",
    imageSrcs: ["images/projects/7th/aydan_g_1.png"],
  },
  {
    id: "7-finn-b",
    grade: "7",
    firstName: "Finn",
    lastInitial: "B",
    imageSrcs: ["images/projects/7th/finn_b_1.png"],
  },
  {
    id: "7-brayden-d",
    grade: "7",
    firstName: "Brayden",
    lastInitial: "D",
    imageSrcs: ["images/projects/7th/brayden_d_1.png"],
  },
  {
    id: "7-kiara-l",
    grade: "7",
    firstName: "Kiara",
    lastInitial: "L",
    imageSrcs: ["images/projects/7th/kiara_l_1.png"],
  },
  {
    id: "7-giovanni-m",
    grade: "7",
    firstName: "Giovanni",
    lastInitial: "M",
    imageSrcs: ["images/projects/7th/giovanni_m_1.png"],
  },
  {
    id: "7-oscar-e",
    grade: "7",
    firstName: "Oscar",
    lastInitial: "E",
    imageSrcs: ["images/projects/7th/oscar_e_1.png"],
  },
  {
    id: "7-jaydden-d",
    grade: "7",
    firstName: "Jaydden",
    lastInitial: "D",
    imageSrcs: ["images/projects/7th/jaydden_d_1.png"],
  },
  {
    id: "7-christopher-g",
    grade: "7",
    firstName: "Christopher",
    lastInitial: "G",
    imageSrcs: ["images/projects/7th/christopher_g_1.png"],
  },
  {
    id: "7-adriano-a",
    grade: "7",
    firstName: "Adriano",
    lastInitial: "A",
    imageSrcs: ["images/projects/7th/adriano_a_1.png"],
  },

  {
    id: "8-samlain-n",
    grade: "8",
    firstName: "Samlain",
    lastInitial: "N",
    imageSrcs: [
      "images/projects/8th/samlain_n_1.png",
      "images/projects/8th/samlain_n_2.png",
      "images/projects/8th/samlain_n_3.png",
      "images/projects/8th/samlain_n_4.png",
    ],
  },
  {
    id: "8-cade-d",
    grade: "8",
    firstName: "Cade",
    lastInitial: "D",
    imageSrcs: [
      "images/projects/8th/cade_d_1.png",
      "images/projects/8th/cade_d_2.png",
      "images/projects/8th/cade_d_3.png",
      "images/projects/8th/cade_d_4.png",
    ],
  },
  {
    id: "8-caleb-f",
    grade: "8",
    firstName: "Caleb",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/8th/caleb_f_1.png",
      "images/projects/8th/caleb_f_2.png",
      "images/projects/8th/caleb_f_3.png",
      "images/projects/8th/caleb_f_4.png",
    ],
  },
  {
    id: "8-mason-m",
    grade: "8",
    firstName: "Mason",
    lastInitial: "M",
    imageSrcs: ["images/projects/8th/mason_m_1.png"],
  },
  {
    id: "8-milena-d",
    grade: "8",
    firstName: "Milena",
    lastInitial: "D",
    imageSrcs: [
      "images/projects/8th/milena_d_1.png",
      "images/projects/8th/milena_d_2.png",
      "images/projects/8th/milena_d_3.png",
    ],
  },
  {
    id: "8-judy-l",
    grade: "8",
    firstName: "Judy",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/8th/judy_l_1.png",
      "images/projects/8th/judy_l_2.png",
      "images/projects/8th/judy_l_3.png",
    ],
  },
  {
    id: "8-lilyana-p",
    grade: "8",
    firstName: "Lilyana",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/lilyana_p_1.png"],
  },
  {
    id: "8-giovannie-a",
    grade: "8",
    firstName: "Giovannie",
    lastInitial: "A",
    imageSrcs: ["images/projects/8th/giovannie_a_1.png"],
  },
  {
    id: "8-richard-b",
    grade: "8",
    firstName: "Richard",
    lastInitial: "B",
    imageSrcs: [
      "images/projects/8th/richard_b_1.png",
      "images/projects/8th/richard_b_2.png",
      "images/projects/8th/richard_b_3.png",
      "images/projects/8th/richard_b_4.png",
    ],
  },
  {
    id: "8-fransisco-l",
    grade: "8",
    firstName: "Francisco",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/8th/francisco_o_1.png",
      "images/projects/8th/francisco_o_2.png",
      "images/projects/8th/francisco_o_3.png",
      "images/projects/8th/francisco_o_4.png",
    ],
  },
  {
    id: "8-elder-m",
    grade: "8",
    firstName: "Elder",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/8th/elder_m_1.png",
      "images/projects/8th/elder_m_2.png",
      "images/projects/8th/elder_m_3.png",
      "images/projects/8th/elder_m_4.png",
    ],
  },

  {
    id: "8-lucy-t",
    grade: "8",
    firstName: "Lucy",
    lastInitial: "T",
    imageSrcs: ["images/projects/8th/lucy_t_1.png"],
  },
  {
    id: "8-nathan-p",
    grade: "8",
    firstName: "Nathan",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/nathan_p_1.png"],
  },
  {
    id: "8-darwing-p",
    grade: "8",
    firstName: "Darwing",
    lastInitial: "P",
    imageSrcs: [
      "images/projects/8th/darwing_p_1.png",
      "images/projects/8th/darwing_p_2.png",
      "images/projects/8th/darwing_p_3.png",
      "images/projects/8th/darwing_p_4.png",
    ],
  },
  {
    id: "8-oscar-c",
    grade: "8",
    firstName: "Oscar",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/8th/oscar_c_1.png",
      "images/projects/8th/oscar_c_2.png",
      "images/projects/8th/oscar_c_3.png",
      "images/projects/8th/oscar_c_4.png",
    ],
  },
  {
    id: "8-maria_clara-n",
    grade: "8",
    firstName: "Maria Clara",
    lastInitial: "N",
    imageSrcs: ["images/projects/8th/maria_clara_n_1.png"],
  },
  {
    id: "8-madeleine-r",
    grade: "8",
    firstName: "Madeleine",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/8th/madeleine_r_1.png",
      "images/projects/8th/madeleine_r_2.png",
      "images/projects/8th/madeleine_r_3.png",
      "images/projects/8th/madeleine_r_4.png",
    ],
  },

  {
    id: "8-cambria-r",
    grade: "8",
    firstName: "Cambria",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/8th/cambria_r_1.png",
      "images/projects/8th/cambria_r_2.png",
      "images/projects/8th/cambria_r_3.png",
      "images/projects/8th/cambria_r_4.png",
    ],
  },
  {
    id: "8-nimit-s",
    grade: "8",
    firstName: "Nimit",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/8th/nimit_s_1.png",
      "images/projects/8th/nimit_s_2.png",
      "images/projects/8th/nimit_s_3.png",
      "images/projects/8th/nimit_s_4.png",
      "images/projects/8th/nimit_s_5.png",
    ],
  },
  {
    id: "8-mark-r",
    grade: "8",
    firstName: "Mark",
    lastInitial: "R",
    imageSrcs: [
      "images/projects/8th/mark_r_1.png",
      "images/projects/8th/mark_r_2.png",
      "images/projects/8th/mark_r_3.png",
      "images/projects/8th/mark_r_4.png",
    ],
  },
  {
    id: "8-dexter-b",
    grade: "8",
    firstName: "Dexter",
    lastInitial: "B",
    imageSrcs: [
      "images/projects/8th/dexter_b_1.png",
      "images/projects/8th/dexter_b_2.png",
      "images/projects/8th/dexter_b_3.png",
      "images/projects/8th/dexter_b_4.png",
    ],
  },
  {
    id: "8-stephanie-p",
    grade: "8",
    firstName: "Stephanie",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/stephanie_p_1.png"],
  },
  {
    id: "8-mathias-m",
    grade: "8",
    firstName: "Mathias",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/8th/mathias_m_1.png",
      "images/projects/8th/mathias_m_2.png",
      "images/projects/8th/mathias_m_3.png",
      "images/projects/8th/mathias_m_4.png",
    ],
  },
  {
    id: "8-diego-p",
    grade: "8",
    firstName: "Diego",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/diego_p_1.png"],
  },
  {
    id: "8-sam-l",
    grade: "8",
    firstName: "Sam",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/8th/sam_l_1.png",
      "images/projects/8th/sam_l_1.png",
      "images/projects/8th/sam_l_2.png",
      "images/projects/8th/sam_l_2.png",
    ],
  },
  {
    id: "8-enzo-l",
    grade: "8",
    firstName: "Enzo",
    lastInitial: "L",
    imageSrcs: ["images/projects/8th/enzo_l_1.png"],
  },
  {
    id: "8-diego-f",
    grade: "8",
    firstName: "Diego",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/8th/diego_f_1.png",
      "images/projects/8th/diego_f_2.png",
      "images/projects/8th/diego_f_3.png",
    ],
  },
  {
    id: "8-nirjal-m",
    grade: "8",
    firstName: "Nirjal",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/8th/nirjal_m_1.png",
      "images/projects/8th/nirjal_m_2.png",
      "images/projects/8th/nirjal_m_3.png",
      "images/projects/8th/nirjal_m_4.png",
    ],
  },
  {
    id: "8-daniel-f",
    grade: "8",
    firstName: "Daniel",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/8th/daniel_f_1.png",
      "images/projects/8th/daniel_f_2.png",
      "images/projects/8th/daniel_f_3.png",
      "images/projects/8th/daniel_f_4.png",
    ],
  },
  {
    id: "8-rowan-s",
    grade: "8",
    firstName: "Rowan",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/8th/rowan_s_1.png",
      "images/projects/8th/rowan_s_2.png",
      "images/projects/8th/rowan_s_3.png",
      "images/projects/8th/rowan_s_4.png",
    ],
  },
  {
    id: "8-aiyanna-r",
    grade: "8",
    firstName: "Aiyanna",
    lastInitial: "R",
    imageSrcs: ["images/projects/8th/aiyanna_r_1.png"],
  },
  {
    id: "8-joshua-l",
    grade: "8",
    firstName: "Joshua",
    lastInitial: "L",
    imageSrcs: [
      "images/projects/8th/joshua_l_1.png",
      "images/projects/8th/joshua_l_2.png",
      "images/projects/8th/joshua_l_3.png",
      "images/projects/8th/joshua_l_4.png",
    ],
  },
  {
    id: "8-muna-h",
    grade: "8",
    firstName: "Muna",
    lastInitial: "H",
    imageSrcs: [
      "images/projects/8th/muna_h_1.png",
      "images/projects/8th/muna_h_2.png",
      "images/projects/8th/muna_h_3.png",
    ],
  },

  {
    id: "8-kristopher-g",
    grade: "8",
    firstName: "Kristopher",
    lastInitial: "G",
    imageSrcs: ["images/projects/8th/kristopher_g_1.png"],
  },
  {
    id: "8-ashley-l",
    grade: "8",
    firstName: "Ashley",
    lastInitial: "L",
    imageSrcs: ["images/projects/8th/ashley_l_1.png"],
  },
  {
    id: "8-jacob-d",
    grade: "8",
    firstName: "Jacob",
    lastInitial: "D",
    imageSrcs: ["images/projects/8th/jacob_d_1.png"],
  },
  {
    id: "8-pedro-s",
    grade: "8",
    firstName: "Pedro",
    lastInitial: "S",
    imageSrcs: ["images/projects/8th/pedro_s_1.png"],
  },
  {
    id: "8-donte-j",
    grade: "8",
    firstName: "Donte",
    lastInitial: "J",
    imageSrcs: [
      "images/projects/8th/donte_j_1.png",
      "images/projects/8th/donte_j_2.png",
      "images/projects/8th/donte_j_3.png",
    ],
  },
  {
    id: "8-matteo-g",
    grade: "8",
    firstName: "Matteo",
    lastInitial: "G",
    imageSrcs: ["images/projects/8th/matteo_g_1.png"],
  },
  {
    id: "8-melvin-m",
    grade: "8",
    firstName: "Melvin",
    lastInitial: "M",
    imageSrcs: ["images/projects/8th/melvin_m_1.png"],
  },
  {
    id: "8-angela-p",
    grade: "8",
    firstName: "Angela",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/angela_p_1.png"],
  },
  {
    id: "8-franco-s",
    grade: "8",
    firstName: "Franco",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/8th/franco_s_1.png",
      "images/projects/8th/franco_s_2.png",
      "images/projects/8th/franco_s_3.png",
      "images/projects/8th/franco_s_4.png",
    ],
  },
  {
    id: "8-jancarlos-l",
    grade: "8",
    firstName: "Jancarlos",
    lastInitial: "L",
    imageSrcs: ["images/projects/8th/jancarlos_l_1.png"],
  },
  {
    id: "8-jenna-e",
    grade: "8",
    firstName: "Jenna",
    lastInitial: "E",
    imageSrcs: [
      "images/projects/8th/jenna_e_1.png",
      "images/projects/8th/jenna_e_2.png",
      "images/projects/8th/jenna_e_3.png",
      "images/projects/8th/jenna_e_4.png",
    ],
  },
  {
    id: "8-luis-a",
    grade: "8",
    firstName: "Luis",
    lastInitial: "A",
    imageSrcs: ["images/projects/8th/luis_a_1.png"],
  },
  {
    id: "8-jayden-p",
    grade: "8",
    firstName: "Jayden",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/jayden_p_1.png"],
  },
  {
    id: "8-felipe-s",
    grade: "8",
    firstName: "Felipe",
    lastInitial: "S",
    imageSrcs: [
      "images/projects/8th/felipe_s_1.png",
      "images/projects/8th/felipe_s_2.png",
      "images/projects/8th/felipe_s_3.png",
      "images/projects/8th/felipe_s_4.png",
    ],
  },
  {
    id: "8-naiyah-c",
    grade: "8",
    firstName: "Naiyah",
    lastInitial: "C",
    imageSrcs: ["images/projects/8th/naiyah_c_1.png"],
  },
  {
    id: "8-hana-c",
    grade: "8",
    firstName: "Hana",
    lastInitial: "C",
    imageSrcs: ["images/projects/8th/hana_c_1.png"],
  },
  {
    id: "8-trinity-s",
    grade: "8",
    firstName: "Trinity",
    lastInitial: "S",
    imageSrcs: ["images/projects/8th/trinity_s_1.png"],
  },
  {
    id: "8-jakhari-p",
    grade: "8",
    firstName: "Jakhari",
    lastInitial: "P",
    imageSrcs: ["images/projects/8th/jakhari_p_1.png"],
  },
  {
    id: "8-clyde-l",
    grade: "8",
    firstName: "Clyde",
    lastInitial: "L",
    imageSrcs: ["images/projects/8th/clyde_l_1.png"],
  },

  {
    id: "8-theo-c",
    grade: "8",
    firstName: "Theo",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/8th/theo_c_1.png",
      "images/projects/8th/theo_c_2.png",
      "images/projects/8th/theo_c_3.png",
      "images/projects/8th/theo_c_4.png",
    ],
  },
  {
    id: "8-edwin-c",
    grade: "8",
    firstName: "Edwin",
    lastInitial: "C",
    imageSrcs: ["images/projects/8th/edwin_c_1.png"],
  },
  {
    id: "8-gregory-h",
    grade: "8",
    firstName: "Gregory",
    lastInitial: "H",
    imageSrcs: ["images/projects/8th/gregory_h_1.png"],
  },
  {
    id: "8-cristopher-g",
    grade: "8",
    firstName: "Cristopher",
    lastInitial: "G",
    imageSrcs: [
      "images/projects/8th/cristopher_g_1.png",
      "images/projects/8th/cristopher_g_2.png",
      "images/projects/8th/cristopher_g_3.png",
    ],
  },
  {
    id: "8-mya-r",
    grade: "8",
    firstName: "Mya",
    lastInitial: "R",
    imageSrcs: ["images/projects/8th/mya_r_1.png"],
  },
  {
    id: "8-shabib-a",
    grade: "8",
    firstName: "Shabib",
    lastInitial: "A",
    imageSrcs: ["images/projects/8th/shabib_a_1.png"],
  },
  {
    id: "8-tasir-t",
    grade: "8",
    firstName: "Tasir",
    lastInitial: "T",
    imageSrcs: ["images/projects/8th/tasir_t_1.png"],
  },
  {
    id: "8-jayden-s",
    grade: "8",
    firstName: "Jayden",
    lastInitial: "S",
    imageSrcs: ["images/projects/8th/jayden_s_1.png"],
  },
  {
    id: "8-miran-c",
    grade: "8",
    firstName: "Mirian",
    lastInitial: "C",
    imageSrcs: ["images/projects/8th/mirian_c_1.png"],
  },
  {
    id: "8-helen-c",
    grade: "8",
    firstName: "Helen",
    lastInitial: "C",
    imageSrcs: [
      "images/projects/8th/helen_c_1.png",
      "images/projects/8th/helen_c_2.png",
      "images/projects/8th/helen_c_3.png",
    ],
  },
  {
    id: "8-adriana-v",
    grade: "8",
    firstName: "Adriana",
    lastInitial: "V",
    imageSrcs: ["images/projects/8th/adriana_v_1.png"],
  },
  {
    id: "8-anderson-f",
    grade: "8",
    firstName: "Anderson",
    lastInitial: "F",
    imageSrcs: [
      "images/projects/8th/anderson_f_1.png",
      "images/projects/8th/anderson_f_2.png",
      "images/projects/8th/anderson_f_3.png",
      "images/projects/8th/anderson_f_4.png",
    ],
  },
  {
    id: "8-andrea-b",
    grade: "8",
    firstName: "Andrea",
    lastInitial: "B",
    imageSrcs: ["images/projects/8th/andrea_b_1.png"],
  },
  {
    id: "8-christopher-m",
    grade: "8",
    firstName: "Christopher",
    lastInitial: "M",
    imageSrcs: [
      "images/projects/8th/christopher_m_1.png",
      "images/projects/8th/christopher_m_2.png",
      "images/projects/8th/christopher_m_3.png",
    ],
  },
  {
    id: "8-marlon-r",
    grade: "8",
    firstName: "Marlon",
    lastInitial: "R",
    imageSrcs: ["images/projects/8th/marlon_r_1.png"],
  },
  {
    id: "8-edman-h",
    grade: "8",
    firstName: "Edman",
    lastInitial: "H",
    imageSrcs: ["images/projects/8th/edman_h_1.png"],
  },
  {
    id: "8-fernanda-m",
    grade: "8",
    firstName: "Fernanda",
    lastInitial: "M",
    imageSrcs: ["images/projects/8th/fernanda_m_1.png"],
  },

  {
    id: "8-matthew-c",
    grade: "8",
    firstName: "Matthew",
    lastInitial: "C",
    imageSrcs: ["images/projects/8th/matthew_c_1.png"],
  },
  {
    id: "8-marques-m",
    grade: "8",
    firstName: "Marques",
    lastInitial: "M",
    imageSrcs: ["images/projects/8th/marques_m_1.png"],
  },

  // 👉 Add all other students here…
];

const handyLinkStyle: React.CSSProperties = {
  padding: "8px 14px",
  background: "#f7f7f7",
  borderRadius: "999px",
  textDecoration: "none",
  fontSize: "16px",
  color: "#333",
  fontWeight: 600,
  border: "1px solid #ddd",
};

export default function ProjectsPage() {
  const grades: Grade[] = ["8", "7", "6"];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #FFF8A6, #FFD1DC, #B3E5FC)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* Title & Intro */}
        <h1
          style={{
            fontSize: "40px",
            fontWeight: 900,
            marginBottom: "10px",
            color: "#222",
          }}
        >
          🎨 Final Projects Gallery
        </h1>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "18px",
            lineHeight: 1.6,
            color: "#555",
          }}
        >
          Take a look at the amazing final projects from{" "}
          <strong>8th, 7th, and 6th grade</strong> students in Digital Literacy
          and Computer Science!
        </p>

        {/* Grade Jump Links (like your Handy Links) */}
        <div
          style={{
            marginBottom: "24px",
            padding: "14px 16px",
            borderRadius: "16px",
            background: "#fdf7e3",
            border: "1px solid #f0e0a0",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontWeight: 700,
              fontSize: "18px",
              color: "#444",
            }}
          >
            🔗 Jump to a Grade
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <a href="#grade-8" style={handyLinkStyle}>
              8th Grade
            </a>
            <a href="#grade-7" style={handyLinkStyle}>
              7th Grade
            </a>
            <a href="#grade-6" style={handyLinkStyle}>
              6th Grade
            </a>
          </div>
        </div>

        {/* All Grades Sections */}
        <div
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#444",
          }}
        >
          {grades.map((grade, idx) => {
            const projectsForGrade = STUDENT_PROJECTS.filter(
              (p) => p.grade === grade
            );

            return (
              <section
                key={grade}
                id={`grade-${grade}`}
                style={{ marginTop: idx === 0 ? "10px" : "40px" }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    marginBottom: "12px",
                  }}
                >
                  🖼️ {grade}th Grade Projects
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "18px",
                  }}
                >
                  {projectsForGrade.map((project) => (
                    <div
                      key={project.id}
                      style={{
                        background: "#fafafa",
                        borderRadius: "16px",
                        padding: "10px",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        maxWidth: "400px", // 🔥 NEW — cap the card width
                        flex: "1 1 300px", // 🔥 NEW — responsive base width
                      }}
                    >
                      {/* Project slideshow */}
                      <div
                        style={{
                          width: "100%",
                          borderRadius: "12px",
                          overflow: "hidden",
                          border: "1px solid #ddd",
                          marginBottom: "8px",
                        }}
                      >
                        <StudentProjectSlider images={project.imageSrcs} />
                      </div>

                      {/* <div
                        style={{
                          fontSize: "16px",
                          fontWeight: 700,
                          textAlign: "center",
                          color: "#333",
                        }}
                      >
                        {project.firstName} {project.lastInitial}.
                      </div> */}
                    </div>
                  ))}
                </div>

                {/* Divider between grades */}
                {idx < grades.length - 1 && (
                  <hr
                    style={{
                      border: "0",
                      borderTop: "4px solid #333",
                      margin: "30px 0",
                    }}
                  />
                )}
              </section>
            );
          })}
        </div>

        {/* Back link */}
        <div style={{ marginTop: "32px" }}>
          <Link
            href="/"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              textDecoration: "none",
              color: "black",
            }}
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
