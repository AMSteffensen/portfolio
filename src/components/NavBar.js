import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-red-600 hover:text-green-800 text-4xl font-bold tracking-widest"
          >
            AMSteffensen
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="bg-red-200 text-white-100"
            className="inline-flex items-center py-3 px-3 rounded text-red-600 hover:text-green-800 text-2xl"
          >
            Blog Posts
          </NavLink>
          <NavLink
            activeClassName="bg-red-200 text-white-100"
            className="inline-flex items-center py-3 px-3 rounded text-red-600 hover:text-green-800 text-2xl"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="bg-red-200 text-white-100"
            className="inline-flex items-center py-3 px-3 rounded text-red-600 hover:text-green-800 text-2xl"
            to="/about"
          >
            About Me
          </NavLink>
          <div className="inline-flex py-3 px-4 my-6">
            <SocialIcon
              url="http://linkedin.com/in/amsteffensen"
              className="mr-4"
              target="_blank"
              bgColor="#dc2626"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/amsteffensen"
              className="mr-4"
              target="_blank"
              bgColor="#dc2626"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.instagram.com/am.steffensen/"
              className="mr-4"
              target="_blank"
              bgColor="#dc2626"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/AMSteffensen"
              className="mr-4"
              target="_blank"
              bgColor="#dc2626"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
