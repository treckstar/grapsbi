import React from "react";
import { Link } from "gatsby";
import cx from 'classnames'
import HeroPopover from "../components/hero-popover";
import {
  navLinks,
  navLinksA,
  navLinksLi
} from '../components/navbar.module.scss';
const data = [
  {
    id: 0,
    text: "about",
    url: "/about/",
  },
  {
    id: 1,
    text: "meta",
    url: "/meta/",
  },
  {
    id: 2,
    text: "changelog",
    url: "/changelog/",
  },
  {
    id: 3,
    text: "reference",
    url: "/reference/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "projects",
    url: "/projects/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li className={navLinksLi} key={link.id}>
      <Link className={navLinksA} to={link.url}>{link.text}</Link>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={navLinks}>
      {/*  <li className={navLinksLi}><HeroPopover /></li> */}
      {tempLinks}
    </ul>
  );
};