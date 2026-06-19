import { useState, useEffect } from "react";
import "./UmrohApp.css"; // Menyambungkan CSS kembali

// Menyambungkan Komponen UI kembali
import { DS, SubTabs, KaabaSVG } from "./components/ui/Common";
import { MiniMap } from "./components/ui/Maps";

// Menyambungkan Data kembali
import { prepData, tutorialData, OB_SLIDES, FAQ_DATA } from "./data/content";