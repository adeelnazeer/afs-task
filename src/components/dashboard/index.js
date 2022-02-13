/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Icon from "../../assets/images/home.png";
import User from "../../assets/images/download.jpg";
import Card from "../../assets/images/l.jpg";
import Arrowdown from "../../assets/images/down-arrow.png";
import ArrowUp from "../../assets/images/up-arrows.png";
import Single from "../../assets/images/single.png";
import Setting from "../../assets/images/settings.png";
import Search from "../../assets/images/search.png";
import Logo from "../../assets/images/lo.png";
import Close from "../../assets/images/close.png";
import Right from "../../assets/images/right.png";
import Bell from "../../assets/images/bell.png";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import "./style.scss";

export default (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="main-dashboard">
      <div className="inner pt-10 lg:pr-10 lg:pl-0 xs:px-4 flex">
        {show === false && (
          <div className="lg:w-1/6 xs:w-5/6 h-screen lg:static  xs:fixed  background-green xs:z-10">
            <div className="pb-32">
              <div className="  logo mr-6 flex items-center">
                <img className="logo-img" src={Logo} alt="" />
                <img
                  className="w-4 h-4 lg:invisible xs:visible "
                  src={Close}
                  alt=""
                  onClick={() => {
                    setShow(true);
                  }}
                />
              </div>
            </div>
            <div className=" pl-6">
              <div className="flex py-2 selected">
                <div className="px-4">
                  <img src={Icon} alt="" />
                </div>
                <div className="pl-4">
                  <h2 className="font-medium">Dashboard</h2>
                </div>
              </div>
            </div>
            <div className="pt-6 pl-6">
              <div className="flex py-2  white">
                <div className="px-4">
                  <img src={Search} alt="" />
                </div>
                <div className="pl-4">
                  <h2 className="font-medium">Search</h2>
                </div>
              </div>
            </div>
            <div className="pt-6 pl-6">
              <div className="flex py-2 white ">
                <div className="px-4">
                  <img src={Setting} alt="" />
                </div>
                <div className="pl-4">
                  <h2 className="font-medium">Setting</h2>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="lg:w-5/6 xs:w-full card-color second-column p-6">
          <div class="flex ...  items-center flex-wrap justify-end ">
            {show === true && (
              <div class="w-full ...">
                <img
                  className="w-4  lg:invisible xs:visible "
                  src={Right}
                  alt=""
                  onClick={() => {
                    setShow(false);
                  }}
                />
              </div>
            )}
            <div class="lg:w-3/5 xs:w-full ... flex items-center justify-end">
              <div>
                <input className="lg:w-80 xs:w-full pt-2" />
              </div>
              <div className="px-6">
                <img src={Bell} alt="" />
              </div>
              <div>
                <img className="user" src={User} alt="" />
              </div>
            </div>
          </div>
          <div className="flex drop-down-main flex-wrap mt-4">
            <Dropdown
              placeholder="Select an option"
              className="my-className first"
              options={["Dropdown", "two", "three"]}
              value="Dropdown"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
            <div class="vl xs:invisible lg:visible"></div>
            <Dropdown
              placeholder="Select an option"
              className="my-className other"
              options={["Dropdown", "two", "three"]}
              value="Dropdown"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
            <div class="vl xs:invisible lg:visible"></div>
            <Dropdown
              placeholder="Select an option"
              className="my-className other"
              options={["Dropdown", "two", "three"]}
              value="Dropdown"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
            <div class="vl xs:invisible lg:visible"></div>
            <Dropdown
              placeholder="Select an option"
              className="my-className other"
              options={["Dropdown", "two", "three"]}
              value="Dropdown"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
            <div class="vl xs:invisible lg:visible"></div>
            <Dropdown
              placeholder="Select an option "
              className="my-className other"
              options={["Dropdown", "two", "three"]}
              value="Dropdown"
              onChange={(value) => console.log("change!", value)}
              onSelect={(value) => console.log("selected!", value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) =>
                console.log("closedBySelection?:", closedBySelection)
              }
              onOpen={() => console.log("open!")}
            />
          </div>
          <div className="inner-content  mt-6">
            <h1 className="orange text-left text-2xl font-semibold">
              General Report
            </h1>
            <div class="flex ... pt-8 justify-around flex-wrap">
              <div class="lg:w-1/6 xs:w-full p-4 ... shadow-lg shadow-indigo-500/40 clr-green border-r-10">
                <img className="card-image pt-2" src={Card} alt="" />
                <p className="pt-2">Hair saloon</p>
                <div className="flex items-center justify-center">
                  <h1 className="  text-2xl">14,800</h1>
                  <div className="pl-2">
                    <img src={ArrowUp} alt="" />
                  </div>
                </div>
              </div>
              <div class="lg:w-1/6 xs:w-full p-4 ... shadow-lg shadow-indigo-500/40 border-r-10">
                <img className="card-image pt-2" src={Card} alt="" />
                <p className="pt-2 clr-green">Hair saloon</p>
                <div className="flex items-center justify-center">
                  <h1 className="clr-red  text-2xl">14,800</h1>
                  <div className="pl-2">
                    <img src={Arrowdown} alt="" />
                  </div>
                </div>
              </div>
              <div class="lg:w-1/6 xs:w-full p-4 ... shadow-lg shadow-indigo-500/40 clr-green border-r-10">
                <img className="card-image pt-2" src={Card} alt="" />
                <p className="pt-2">Hair saloon</p>
                <div className="flex items-center justify-center">
                  <h1 className="  text-2xl">14,800</h1>
                  <div className="pl-2">
                    <img src={ArrowUp} alt="" />
                  </div>
                </div>
              </div>
              <div class="lg:w-1/6 xs:w-full p-4 ... shadow-lg shadow-indigo-500/40 clr-green border-r-10">
                <img className="card-image pt-2" src={Card} alt="" />
                <p className="pt-2">Hair saloon</p>
                <div className="flex items-center justify-center">
                  <h1 className="  text-2xl">14,800</h1>
                  <div className="pl-2">
                    <img src={ArrowUp} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-48">
              <h1 className="font-semibold text-2xl clr-green">
                More Module Comming Soon
              </h1>
              <img className="m-auto pt-2" src={Single} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
