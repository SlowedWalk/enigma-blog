import _ from "lodash";
import Button from "../../base-components/Button";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect } from "../../base-components/Form";
import Progress from "../../base-components/Progress";
import Lucide from "../../base-components/Lucide";
import Tippy from "../../base-components/Tippy";
import { Menu } from "../../base-components/Headless";
import { useGetUsersQuery } from '../../api/userSlice';
import LoadingIcon from "../../base-components/LoadingIcon";

function Main() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery('getUsers');

  let content: string | JSX.Element = '';

  if (isLoading) {
    content =
      <div className="flex flex-col mt-10 items-center justify-end col-span-6 sm:col-span-3 xl:col-span-2">
        <LoadingIcon icon="oval" className="w-8 h-8" />
        <div className="mt-2 text-xs text-center">
         <h3 className="text-lg"> Loading ...</h3>
        </div>
      </div>;
  } else if (isSuccess) {
    content =
      <>
        <h2 className="mt-10 text-lg font-medium intro-y">Users Layout</h2>
        <div className="grid grid-cols-12 gap-6 mt-5">
          <div className="flex flex-wrap items-center col-span-12 mt-2 intro-y sm:flex-nowrap">
            <Button variant="primary" className="mr-2 shadow-md">
              Add New User
            </Button>
            <Menu>
              <Menu.Button as={Button} className="px-2 !box">
                <span className="flex items-center justify-center w-5 h-5">
                  <Lucide icon="Plus" className="w-4 h-4" />
                </span>
              </Menu.Button>
              <Menu.Items className="w-40">
                <Menu.Item>
                  <Lucide icon="Users" className="w-4 h-4 mr-2" /> Add Group
                </Menu.Item>
                <Menu.Item>
                  <Lucide icon="MessageCircle" className="w-4 h-4 mr-2" /> Send
                  Message
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <div className="hidden mx-auto md:block text-slate-500">
              Showing 1 to 10 of 150 entries
            </div>
            <div className="w-full mt-3 sm:w-auto sm:mt-0 sm:ml-auto md:ml-0">
              <div className="relative w-56 text-slate-500">
                <FormInput
                  type="text"
                  className="w-56 pr-10 !box"
                  placeholder="Search..."
                />
                <Lucide
                  icon="Search"
                  className="absolute inset-y-0 right-0 w-4 h-4 my-auto mr-3"
                />
              </div>
            </div>
          </div>
          {/* BEGIN: Users Layout */}
          {users.ids.map((id: number) => (
            <div key={id} className="col-span-12 intro-y md:col-span-6">
              <div className="box">
                <div className="flex flex-col items-center p-5 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                  <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={users.entities[id]?.avatar}
                    />
                  </div>
                  <div className="mt-3 text-center lg:ml-2 lg:mr-auto lg:text-left lg:mt-0">
                    <a href={`/profile/${users.entities[id].id}`} className="font-medium">
                      {users.entities[id]?.name}
                    </a>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {users.entities[id]?.job}
                    </div>
                  </div>
                  <div className="flex mt-3 -ml-2 lg:ml-0 lg:justify-end lg:mt-0">
                    <Tippy
                      as="a"
                      href={users.entities[id]?.socials[0]?.url}
                      className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
                      content="Facebook"
                    >
                      <Lucide icon="Facebook" className="w-3 h-3 fill-current" />
                    </Tippy>
                    <Tippy
                      as="a"
                      href={users.entities[id]?.socials[1]?.url}
                      className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
                      content="Twitter"
                    >
                      <Lucide icon="Twitter" className="w-3 h-3 fill-current" />
                    </Tippy>
                    <Tippy
                      as="a"
                      href={users.entities[id]?.socials[2]?.url}
                      className="flex items-center justify-center w-8 h-8 ml-2 border rounded-full dark:border-darkmode-400 text-slate-400 zoom-in"
                      content="Linked In"
                    >
                      <Lucide icon="Linkedin" className="w-3 h-3 fill-current" />
                    </Tippy>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center p-5 lg:flex-nowrap">
                  <div className="w-full mb-4 mr-auto lg:w-1/2 lg:mb-0">
                    <div className="flex text-xs text-slate-500">
                      <div className="mr-auto">Progress</div>
                      <div>20%</div>
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
                  <Button variant="primary" className="px-2 py-1 mr-2">
                    Message
                  </Button>
                  <Button variant="outline-secondary" className="px-2 py-1">
                    <a href={`/profile/${users.entities[id].id}`}>Profile</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {/* END: Users Layout */}
          {/* BEGIN: Pagination */}
          <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap">
            <Pagination className="w-full sm:w-auto sm:mr-auto">
              <Pagination.Link>
                <Lucide icon="ChevronsLeft" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronLeft" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>...</Pagination.Link>
              <Pagination.Link>1</Pagination.Link>
              <Pagination.Link active>2</Pagination.Link>
              <Pagination.Link>3</Pagination.Link>
              <Pagination.Link>...</Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronRight" className="w-4 h-4" />
              </Pagination.Link>
              <Pagination.Link>
                <Lucide icon="ChevronsRight" className="w-4 h-4" />
              </Pagination.Link>
            </Pagination>
            <FormSelect className="w-20 mt-3 !box sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </FormSelect>
          </div>
          {/* END: Pagination */}
        </div>
      </>
  } else if (isError) {
    content =
    <>
      <div className="mt-10 text-white lg:mt-0">
        <div className="font-medium intro-x text-8xl">404</div>
        <div className="mt-5 text-xl font-medium intro-x lg:text-3xl">
          Oops. This page has gone missing.
        </div>
        <div className="mt-3 text-lg intro-x">
          You may have mistyped the address or the page may have moved.
        </div>
        <Button className="px-4 py-3 mt-10 text-white border-white intro-x dark:border-darkmode-400 dark:text-slate-200">
          Back to Home
        </Button>
      </div>
    </>
  }
  return content;
}

export default Main;
