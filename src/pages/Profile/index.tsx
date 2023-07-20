import _ from "lodash";
import { useRef, useState } from "react";
import fakerData from "../../utils/faker";
import Button from "../../base-components/Button";
import {
  FormInput,
  FormLabel,
  FormSelect,
  FormSwitch,
  FormTextarea,
} from "../../base-components/Form";
import Progress from "../../base-components/Progress";
import TinySlider, {
  TinySliderElement,
} from "../../base-components/TinySlider";
import Lucide from "../../base-components/Lucide";
import FileIcon from "../../base-components/FileIcon";
import { Menu, Tab } from "../../base-components/Headless";
import { Tab as HeadlessTab } from "@headlessui/react";
import TomSelect from "../../base-components/TomSelect";
import Tippy from "../../base-components/Tippy";

function Main() {
  const newProductsRef = useRef<TinySliderElement>();
  const newAuthorsRef = useRef<TinySliderElement>();
  const [select, setSelect] = useState("1");

  const prevNewProducts = () => {
    newProductsRef.current?.tns.goTo("prev");
  };
  const nextNewProducts = () => {
    newProductsRef.current?.tns.goTo("next");
  };
  const prevNewAuthors = () => {
    newAuthorsRef.current?.tns.goTo("prev");
  };
  const nextNewAuthors = () => {
    newAuthorsRef.current?.tns.goTo("next");
  };

  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Profile Layout</h2>
      </div>
      <Tab.Group>
        {/* BEGIN: Profile Info */}
        <div className="px-5 pt-5 mt-5 intro-y box">
          <div className="flex flex-col pb-5 -mx-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
            <div className="flex items-center justify-center flex-1 px-5 lg:justify-start">
              <div className="relative flex-none w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={fakerData[0].photos[0]}
                />
              </div>
              <div className="ml-5">
                <div className="w-24 text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                  {fakerData[0].users[0].name}
                </div>
                <div className="text-slate-500">{fakerData[0].jobs[0]}</div>
              </div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 border-t border-l border-r lg:mt-0 border-slate-200/60 dark:border-darkmode-400 lg:border-t-0 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col items-center justify-center mt-4 lg:items-start">
                <div className="flex items-center truncate sm:whitespace-normal">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {fakerData[0].users[0].email}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram
                  {fakerData[0].users[0].name}
                </div>
                <div className="flex items-center mt-3 truncate sm:whitespace-normal">
                  <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter
                  {fakerData[0].users[0].name}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center flex-1 px-5 pt-5 mt-6 border-t lg:mt-0 lg:border-0 border-slate-200/60 dark:border-darkmode-400 lg:pt-0">
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">201</div>
                <div className="text-slate-500">Orders</div>
              </div>
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">1k</div>
                <div className="text-slate-500">Purchases</div>
              </div>
              <div className="w-20 py-3 text-center rounded-md">
                <div className="text-xl font-medium text-primary">492</div>
                <div className="text-slate-500">Reviews</div>
              </div>
            </div>
          </div>
          <Tab.List
            variant="link-tabs"
            className="flex-col justify-center text-center sm:flex-row lg:justify-start"
          >
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Shield" className="w-4 h-4 mr-2" /> Account
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </Tab.Button>
            </Tab>
            <Tab fullWidth={false}>
              <Tab.Button className="flex items-center py-4 cursor-pointer">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
              </Tab.Button>
            </Tab>
          </Tab.List>
        </div>
        {/* END: Profile Info */}
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: Latest Uploads */}
              <div className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Latest Uploads
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>All Files</Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Button
                    variant="outline-secondary"
                    className="hidden sm:flex"
                  >
                    All Files
                  </Button>
                </div>
                <div className="p-5">
                  <div className="flex items-center">
                    <FileIcon className="w-12 file" variant="directory" />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Documentation
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center mt-5">
                    <FileIcon
                      className="w-12 text-xs file"
                      variant="file"
                      type="MP3"
                    />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Celine Dion - Ashes
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                  <div className="flex items-center mt-5">
                    <FileIcon className="w-12 file" variant="empty-directory" />
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Resources
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">0 KB</div>
                    </div>
                    <Menu className="ml-auto">
                      <Menu.Button as="a" className="block w-5 h-5">
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>
              </div>
              {/* END: Latest Uploads */}
              {/* BEGIN: Work In Progress */}
              <Tab.Group className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Work In Progress
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        New
                      </Menu.Item>
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        Last Week
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Tab.List
                    variant="link-tabs"
                    className="hidden w-auto ml-auto sm:flex"
                  >
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        New
                      </Tab.Button>
                    </Tab>
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        Last Week
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                </div>
                <div className="p-5">
                  <Tab.Panels>
                    <Tab.Panel>
                      <div>
                        <div className="flex">
                          <div className="mr-auto">Pending Tasks</div>
                          <div>20%</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-1/2 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <div className="mt-5">
                        <div className="flex">
                          <div className="mr-auto">Completed Tasks</div>
                          <div>2 / 20</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-1/4 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <div className="mt-5">
                        <div className="flex">
                          <div className="mr-auto">Tasks In Progress</div>
                          <div>42</div>
                        </div>
                        <Progress className="h-1 mt-2">
                          <Progress.Bar
                            className="w-3/4 bg-primary"
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></Progress.Bar>
                        </Progress>
                      </div>
                      <Button
                        as="a"
                        variant="secondary"
                        href=""
                        className="block w-40 mx-auto mt-5"
                      >
                        View More Details
                      </Button>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
              {/* END: Work In Progress */}
              {/* BEGIN: Daily Sales */}
              <div className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Daily Sales</h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                        Excel
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Button
                    variant="outline-secondary"
                    className="hidden sm:flex"
                  >
                    <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                    Excel
                  </Button>
                </div>
                <div className="p-5">
                  <div className="relative flex items-center">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[0].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[0].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Bootstrap 4 HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$19
                    </div>
                  </div>
                  <div className="relative flex items-center mt-5">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[1].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[1].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Tailwind HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$25
                    </div>
                  </div>
                  <div className="relative flex items-center mt-5">
                    <div className="flex-none w-12 h-12 image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-full"
                        src={fakerData[2].photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <a href="" className="font-medium">
                        {fakerData[2].users[0].name}
                      </a>
                      <div className="mr-5 text-slate-500 sm:mr-5">
                        Vuejs HTML Admin Template
                      </div>
                    </div>
                    <div className="font-medium text-slate-600 dark:text-slate-500">
                      +$21
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Daily Sales */}
              {/* BEGIN: Latest Tasks */}
              <Tab.Group className="col-span-12 intro-y box lg:col-span-6">
                <div className="flex items-center px-5 py-5 border-b sm:py-0 border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Latest Tasks
                  </h2>
                  <Menu className="ml-auto sm:hidden">
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        New
                      </Menu.Item>
                      <Menu.Item className="w-full" as={HeadlessTab}>
                        Last Week
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Tab.List
                    variant="link-tabs"
                    className="hidden w-auto ml-auto sm:flex"
                  >
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        New
                      </Tab.Button>
                    </Tab>
                    <Tab fullWidth={false}>
                      <Tab.Button className="py-5 cursor-pointer">
                        Last Week
                      </Tab.Button>
                    </Tab>
                  </Tab.List>
                </div>
                <div className="p-5">
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="flex items-center">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Create New Campaign
                          </a>
                          <div className="text-slate-500">10:00 AM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Meeting With Client
                          </a>
                          <div className="text-slate-500">02:00 PM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                      <div className="flex items-center mt-5">
                        <div className="pl-4 border-l-2 border-primary dark:border-primary">
                          <a href="" className="font-medium">
                            Create New Repository
                          </a>
                          <div className="text-slate-500">04:00 PM</div>
                        </div>
                        <FormSwitch className="ml-auto">
                          <FormSwitch.Input type="checkbox" />
                        </FormSwitch>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </div>
              </Tab.Group>
              {/* END: Latest Tasks */}
              {/* BEGIN: New Products */}
              <div className="col-span-12 intro-y box">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    New Products
                  </h2>
                  <Button
                    variant="outline-secondary"
                    className="px-2 mr-2"
                    onClick={prevNewProducts}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="px-2"
                    onClick={nextNewProducts}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Button>
                </div>
                <div id="new-products" className="py-5 tiny-slider">
                  <TinySlider
                    getRef={(el) => {
                      newProductsRef.current = el;
                    }}
                  >
                    {_.take(fakerData, 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col items-center pb-5 lg:flex-row">
                          <div className="flex flex-col items-center pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.images[0]}
                                />
                              </div>
                            </div>
                            <div className="mt-3 mr-auto text-center sm:text-left sm:mt-0">
                              <a href="" className="text-lg font-medium">
                                {faker.products[0].name}
                              </a>
                              <div className="mt-1 text-slate-500 sm:mt-0">
                                {faker.news[0].shortContent}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Orders</div>
                            </div>
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[1]}k
                              </div>
                              <div className="text-slate-500">Purchases</div>
                            </div>
                            <div className="w-20 py-3 text-center rounded-md">
                              <div className="text-xl font-medium text-primary">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Reviews</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                          <div className="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0">
                            <div className="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">
                              Date of Release
                            </div>
                          </div>
                          <div className="flex mt-5 sm:ml-auto sm:mt-0">
                            <Button
                              variant="secondary"
                              className="w-20 ml-auto"
                            >
                              Preview
                            </Button>
                            <Button variant="secondary" className="w-20 ml-2">
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Products */}
              {/* BEGIN: New Authors */}
              <div className="col-span-12 intro-y box">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">New Authors</h2>
                  <Button
                    variant="outline-secondary"
                    className="px-2 mr-2"
                    onClick={prevNewAuthors}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="px-2"
                    onClick={nextNewAuthors}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Button>
                </div>
                <div id="new-authors" className="py-5 tiny-slider">
                  <TinySlider
                    getRef={(el) => {
                      newAuthorsRef.current = el;
                    }}
                  >
                    {_.take(fakerData, 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col items-center pb-5 lg:flex-row">
                          <div className="flex flex-col items-center flex-1 pr-5 sm:flex-row lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.photos[0]}
                                />
                              </div>
                            </div>
                            <div className="mt-3 mr-auto text-center sm:text-left sm:mt-0">
                              <a href="" className="text-lg font-medium">
                                {faker.users[0].name}
                              </a>
                              <div className="mt-1 text-slate-500 sm:mt-0">
                                {faker.jobs[0]}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center flex-1 w-full px-5 pt-4 mt-6 border-t lg:w-auto lg:mt-0 lg:pt-0 lg:items-start lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="flex items-center">
                              <a
                                href=""
                                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
                              >
                                <Lucide
                                  icon="Facebook"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].email}
                            </div>
                            <div className="flex items-center mt-2">
                              <a
                                href=""
                                className="flex items-center justify-center w-8 h-8 mr-2 border rounded-full text-slate-400"
                              >
                                <Lucide
                                  icon="Twitter"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].name}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center pt-5 border-t sm:flex-row border-slate-200/60 dark:border-darkmode-400">
                          <div className="flex items-center justify-center w-full pb-5 border-b sm:w-auto sm:justify-start sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 sm:pb-0">
                            <div className="px-3 py-2 mr-3 font-medium rounded text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">Joined Date</div>
                          </div>
                          <div className="flex mt-5 sm:ml-auto sm:mt-0">
                            <Button
                              variant="secondary"
                              className="w-20 ml-auto"
                            >
                              Message
                            </Button>
                            <Button variant="secondary" className="w-20 ml-2">
                              Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Authors */}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            {/* BEGIN: Profile Menu */}
            {/* <div className="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block">
              <div className="mt-5 intro-y box">
                <div className="relative flex items-center p-5">
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="text-base font-medium">
                      {fakerData[0].users[0].name}
                    </div>
                    <div className="text-slate-500">{fakerData[0].jobs[0]}</div>
                  </div>
                  <Menu>
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-56">
                      <Menu.Header> Export Options</Menu.Header>
                      <Menu.Divider />
                      <Menu.Item>
                        <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                        English
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Box" className="w-4 h-4 mr-2" />
                        Indonesia
                        <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                          10
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                        English
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                        Indonesia
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Footer>
                        <Button
                          variant="primary"
                          type="button"
                          className="px-2 py-1"
                        >
                          Settings
                        </Button>
                        <Button
                          variant="secondary"
                          type="button"
                          className="px-2 py-1 ml-auto"
                        >
                          View Profile
                        </Button>
                      </Menu.Footer>
                    </Menu.Items>
                  </Menu>
                </div>
                <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center font-medium text-primary" href="">
                    <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Personal
                    Information
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Box" className="w-4 h-4 mr-2" /> Account Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> User
                    Settings
                  </a>
                </div>
                <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center" href="">
                    <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Email
                    Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Box" className="w-4 h-4 mr-2" /> Saved Credit
                    Cards
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Social Networks
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Tax
                    Information
                  </a>
                </div>
                <div className="flex p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <Button variant="primary" type="button" className="px-2 py-1">
                    New Group
                  </Button>
                  <Button
                    variant="outline-secondary"
                    type="button"
                    className="px-2 py-1 ml-auto"
                  >
                    New Quick Link
                  </Button>
                </div>
              </div>
            </div> */}
            {/* END: Profile Menu */}
            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
              {/* BEGIN: Display Information */}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Display Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="flex flex-col xl:flex-row">
                    <div className="flex-1 mt-6 xl:mt-0">
                      <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-12 2xl:col-span-6">
                          <div>
                            <FormLabel htmlFor="update-profile-form-1">
                              Display Name
                            </FormLabel>
                            <FormInput
                              id="update-profile-form-1"
                              type="text"
                              placeholder="Input text"
                              value={fakerData[0].users[0].name}
                              onChange={() => { }}
                              disabled
                            />
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="update-profile-form-2">
                              Nearest MRT Station
                            </FormLabel>
                            <TomSelect
                              id="update-profile-form-2"
                              value={select}
                              onChange={setSelect}
                              className="w-full"
                            >
                              <option value="1">Admiralty</option>
                              <option value="2">Aljunied</option>
                              <option value="3">Ang Mo Kio</option>
                              <option value="4">Bartley</option>
                              <option value="5">Beauty World</option>
                            </TomSelect>
                          </div>
                        </div>
                        <div className="col-span-12 2xl:col-span-6">
                          <div className="mt-3 2xl:mt-0">
                            <FormLabel htmlFor="update-profile-form-3">
                              Postal Code
                            </FormLabel>
                            <TomSelect
                              id="update-profile-form-3"
                              value={select}
                              onChange={setSelect}
                              className="w-full"
                            >
                              <option value="1">
                                018906 - 1 STRAITS BOULEVARD SINGA...
                              </option>
                              <option value="2">
                                018910 - 5A MARINA GARDENS DRIVE...
                              </option>
                              <option value="3">
                                018915 - 100A CENTRAL BOULEVARD...
                              </option>
                              <option value="4">
                                018925 - 21 PARK STREET MARINA...
                              </option>
                              <option value="5">
                                018926 - 23 PARK STREET MARINA...
                              </option>
                            </TomSelect>
                          </div>
                          <div className="mt-3">
                            <FormLabel htmlFor="update-profile-form-4">
                              Phone Number
                            </FormLabel>
                            <FormInput
                              id="update-profile-form-4"
                              type="text"
                              placeholder="Input text"
                              value="65570828"
                              onChange={() => { }}
                            />
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="mt-3">
                            <FormLabel htmlFor="update-profile-form-5">
                              Address
                            </FormLabel>
                            <FormTextarea
                              id="update-profile-form-5"
                              placeholder="Adress"
                              value="10 Anson Road, International Plaza, #10-11, 079903
                            Singapore, Singapore"
                              onChange={() => { }}
                            ></FormTextarea>
                          </div>
                        </div>
                      </div>
                      <Button variant="primary" type="button" className="w-20 mt-3">
                        Save
                      </Button>
                    </div>
                    <div className="mx-auto w-52 xl:mr-0 xl:ml-6">
                      <div className="p-5 border-2 border-dashed rounded-md shadow-sm border-slate-200/60 dark:border-darkmode-400">
                        <div className="relative h-40 mx-auto cursor-pointer image-fit zoom-in">
                          <img
                            className="rounded-md"
                            alt="Midone Tailwind HTML Admin Template"
                            src={fakerData[0].photos[0]}
                          />
                          <Tippy
                            as="div"
                            content="Remove this profile photo?"
                            className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mt-2 -mr-2 text-white rounded-full bg-danger"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Tippy>
                        </div>
                        <div className="relative mx-auto mt-5 cursor-pointer">
                          <Button
                            variant="primary"
                            type="button"
                            className="w-full"
                          >
                            Change Photo
                          </Button>
                          <FormInput
                            type="file"
                            className="absolute top-0 left-0 w-full h-full opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Display Information */}
              {/* BEGIN: Personal Information */}
              <div className="mt-5 intro-y box">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">
                    Personal Information
                  </h2>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 xl:col-span-6">
                      <div>
                        <FormLabel htmlFor="update-profile-form-6">Email</FormLabel>
                        <FormInput
                          id="update-profile-form-6"
                          type="text"
                          placeholder="Input text"
                          value={fakerData[0].users[0].email}
                          onChange={() => { }}
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-7">Name</FormLabel>
                        <FormInput
                          id="update-profile-form-7"
                          type="text"
                          placeholder="Input text"
                          value={fakerData[0].users[0].name}
                          onChange={() => { }}
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-8">
                          ID Type
                        </FormLabel>
                        <FormSelect id="update-profile-form-8">
                          <option>IC</option>
                          <option>FIN</option>
                          <option>Passport</option>
                        </FormSelect>
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-9">
                          ID Number
                        </FormLabel>
                        <FormInput
                          id="update-profile-form-9"
                          type="text"
                          placeholder="Input text"
                          value="357821204950001"
                          onChange={() => { }}
                        />
                      </div>
                    </div>
                    <div className="col-span-12 xl:col-span-6">
                      <div className="mt-3 xl:mt-0">
                        <FormLabel htmlFor="update-profile-form-10">
                          Phone Number
                        </FormLabel>
                        <FormInput
                          id="update-profile-form-10"
                          type="text"
                          placeholder="Input text"
                          value="65570828"
                          onChange={() => { }}
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-11">
                          Address
                        </FormLabel>
                        <FormInput
                          id="update-profile-form-11"
                          type="text"
                          placeholder="Input text"
                          value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                          onChange={() => { }}
                        />
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-12">
                          Bank Name
                        </FormLabel>
                        <TomSelect
                          id="update-profile-form-12"
                          value={select}
                          onChange={setSelect}
                          className="w-full"
                        >
                          <option value="1">SBI - STATE BANK OF INDIA</option>
                          <option value="2">CITI BANK - CITI BANK</option>
                        </TomSelect>
                      </div>
                      <div className="mt-3">
                        <FormLabel htmlFor="update-profile-form-13">
                          Bank Account
                        </FormLabel>
                        <FormInput
                          id="update-profile-form-13"
                          type="text"
                          placeholder="Input text"
                          value="DBS Current 011-903573-0"
                          onChange={() => { }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button
                      variant="primary"
                      type="button"
                      className="w-20 mr-auto"
                    >
                      Save
                    </Button>
                    <a href="" className="flex items-center text-danger">
                      <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                      Account
                    </a>
                  </div>
                </div>
              </div>
              {/* END: Personal Information */}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
              {/* BEGIN: Change Password */}
              <div className="intro-y box lg:mt-5">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="mr-auto text-base font-medium">Change Password</h2>
                </div>
                <div className="p-5">
                  <div>
                    <FormLabel htmlFor="change-password-form-1">
                      Old Password
                    </FormLabel>
                    <FormInput
                      id="change-password-form-1"
                      type="password"
                      placeholder="Input text"
                    />
                  </div>
                  <div className="mt-3">
                    <FormLabel htmlFor="change-password-form-2">
                      New Password
                    </FormLabel>
                    <FormInput
                      id="change-password-form-2"
                      type="password"
                      placeholder="Input text"
                    />
                  </div>
                  <div className="mt-3">
                    <FormLabel htmlFor="change-password-form-3">
                      Confirm New Password
                    </FormLabel>
                    <FormInput
                      id="change-password-form-3"
                      type="password"
                      placeholder="Input text"
                    />
                  </div>
                  <Button variant="primary" type="button" className="mt-4">
                    Change Password
                  </Button>
                </div>
              </div>
              {/* END: Change Password */}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="flex flex-col-reverse col-span-12 lg:col-span-4 2xl:col-span-3 lg:block">
              <div className="mt-5 intro-y box">
                {/* <div className="relative flex items-center p-5">
                  <div className="w-12 h-12 image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={fakerData[0].photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <div className="text-base font-medium">
                      {fakerData[0].users[0].name}
                    </div>
                    <div className="text-slate-500">{fakerData[0].jobs[0]}</div>
                  </div>
                  <Menu>
                    <Menu.Button as="a" className="block w-5 h-5">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-56">
                      <Menu.Header> Export Options</Menu.Header>
                      <Menu.Divider />
                      <Menu.Item>
                        <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                        English
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Box" className="w-4 h-4 mr-2" />
                        Indonesia
                        <div className="px-1 ml-auto text-xs text-white rounded-full bg-danger">
                          10
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                        English
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                        Indonesia
                      </Menu.Item>
                      <Menu.Divider />
                      <Menu.Footer>
                        <Button
                          variant="primary"
                          type="button"
                          className="px-2 py-1"
                        >
                          Settings
                        </Button>
                        <Button
                          variant="secondary"
                          type="button"
                          className="px-2 py-1 ml-auto"
                        >
                          View Profile
                        </Button>
                      </Menu.Footer>
                    </Menu.Items>
                  </Menu>
                </div> */}
                <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center font-medium text-primary" href="">
                    <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Personal
                    Information
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Box" className="w-4 h-4 mr-2" /> Account Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> User
                    Settings
                  </a>
                </div>
                <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <a className="flex items-center" href="">
                    <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Email
                    Settings
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Box" className="w-4 h-4 mr-2" /> Saved Credit
                    Cards
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Social Networks
                  </a>
                  <a className="flex items-center mt-5" href="">
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Tax
                    Information
                  </a>
                </div>
                <div className="flex p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <Button variant="primary" type="button" className="px-2 py-1">
                    New Group
                  </Button>
                  <Button
                    variant="outline-secondary"
                    type="button"
                    className="px-2 py-1 ml-auto"
                  >
                    New Quick Link
                  </Button>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}

export default Main;
