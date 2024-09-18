import { array, object, string } from "yup";

import rollingPapers from "../../../public/assets/images/rollingPapers.png";
import backwoods from "../../../public/assets/images/backwoods.png";
import grinders from "../../../public/assets/images/grinders.png";
import ashTrays from "../../../public/assets/images/ashTrays.png";
import lighters from "../../../public/assets/images/lighters.png";
import vapes from "../../../public/assets/images/vapes.png";
import flame from "../../../public/assets/icons/flame.svg";
import flash from "../../../public/assets/icons/flash.svg";
import spark from "../../../public/assets/icons/spark.svg";

import backwoodsLogo from "../../../public/assets/images/backwoods.svg";
import blazySuzan from "../../../public/assets/images/blazySuzan.svg";
import lostMary from "../../../public/assets/images/lostMary.svg";
import futurola from "../../../public/assets/images/futurola.svg";
import voopoo from "../../../public/assets/images/voopoo.svg";
import smok from "../../../public/assets/images/smok.svg";
import rizla from "../../../public/assets/images/rizla.svg";
import raw from "../../../public/assets/images/raw.svg";
import ocb from "../../../public/assets/images/ocb.svg";
import bou from "../../../public/assets/images/bou.svg";

import lostMaryFlavour from "../../../public/assets/images/lostMaryFlavour.png";
import voopooFlavour from "../../../public/assets/images/voopooFlavour.png";
import skeFlavour from "../../../public/assets/images/skeFlavour.png";
import bouFlavour from "../../../public/assets/images/bouFlavour.png";

import regularFilterCart from "../../../public/assets/images/regularFilterCart.png";
import rawClassicCart from "../../../public/assets/images/rawClassicCart.png";
import bicBlackCart from "../../../public/assets/images/bicBlackCart.png";
import voopooCart from "../../../public/assets/images/voopooCart.png";
import rizlaCart from "../../../public/assets/images/rizlaCart.png";


export const METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const OPTION_VALIDATION = object()
  .shape({
    name: string().required("Required"),
    id: string().required("Required"),
  })
  .required("Required");

export const OPTIONS_VALIDATION = array()
  .of(
    object().shape({
      name: string().required("Required"),
      id: string().required("Required"),
    })
  )
  .required("Required");


export const PRODUCT_DISPLAY = [
  {
    name: "Vapes",
    id: "1",
    image: vapes,
  },
  {
    name: "Lighters",
    id: "2",
    image: lighters,
  },
  {
    name: "Ash Trays",
    id: "3",
    image: ashTrays,
  },
  {
    name: "Rolling Papers",
    id: "4",
    image: rollingPapers,
  },
  {
    name: "Grinders",
    id: "5",
    image: grinders,
  },
  {
    name: "backwoods",
    id: "6",
    image: backwoods,
  },
];

export const PERKS_DATA = [
  {
    icon: flame,
    title: "Quality that you can trust",
    description: "We're committed to providing the best smoking accessories.",
    id: "1",
  },
  {
    icon: flash,
    title: "Speed delivery",
    description: "No more waiting around – Smoke without stress ⚡️💨",
    id: "2",
  },
  {
    icon: spark,
    title: "Great customer service",
    description:
      "Our friendly staff is dedicated to assisting with all your needs.",
    id: "3",
  },
];

export const FAVORITE_BRANDS = [
  { img: rizla, id: "1" },
  { img: futurola, id: "2" },
  { img: backwoodsLogo, id: "3" },
  { img: raw, id: "4" },
  { img: bou, id: "5" },
  { img: ocb, id: "6" },
  { img: smok, id: "7" },
  { img: voopoo, id: "8" },
  { img: lostMary, id: "9" },
  { img: blazySuzan, id: "10" },
];

export const FLAVOUR_DATA = [
  {
    name: "VooPoo Drag S2 Pod Vape Kit",
    id: "1",
    img: voopooFlavour,
  },
  {
    name: "SKE Crystal Super Max 4500",
    id: "2",
    img: skeFlavour,
  },
  {
    name: "Bou Star 600 Disposable Vape",
    id: "3",
    img: bouFlavour,
  },
  {
    name: "Lost Mary MO5000 Disposable",
    id: "4",
    img: lostMaryFlavour,
  },
];

export const SHOP_ITEM_DATA = [
  {
    name: "VooPoo Argus P1 Pod Vape Kit",
    id: "1",
    img: voopooCart,
    price: "₦ 15,700",
  },
  {
    name: "Bic Black Gas Lighter",
    id: "2",
    img: bicBlackCart,
    price: "₦ 15,700",
  },
  {
    name: "Rizla - Silver Kingsize Slim Papers Combi Pack",
    id: "3",
    img: rizlaCart,
    price: "₦ 15,700",
  },
  {
    name: "Raw classic connoisseur 1 1/4 rolling papers with pre-rolled tips combo pack",
    id: "4",
    img: rawClassicCart,
    price: "₦ 15,700",
  },
  {
    name: "Regular Size Pink Activated Carbon Filter Tips",
    id: "5",
    img: regularFilterCart,
    price: "₦ 15,700",
  },
  {
    name: "Big Size Herb Grinder",
    id: "6",
    img: grinders,
    price: "₦ 15,700",
  },
];
