import React from "react";
import { Link } from "gatsby";
import cx from 'classnames'
import {
  sidebarLinks,
  sidebarLinksA,
  sidebarLinksLi
} from '../components/sidebar.module.scss';
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
];

const tempLinks = data.map((link) => {
  return (
    <li className={sidebarLinksLi} key={link.id}>
      <Link className={sidebarLinksA} to={link.url}>{link.text}</Link>
    </li>
  );
});
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={sidebarLinks}>
      {tempLinks}
    </ul>
  );
};